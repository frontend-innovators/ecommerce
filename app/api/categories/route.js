import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";
import Category from "@/models/Category";
import fs from "fs";
import path from "path";

export async function POST(req) {
    await connectDB();
    try {
        const data = await req.formData();
        const id = data.get("id");
        const name = data.get("name");
        const image = data.get("image");

        if (!id || !name || !image) {
            return NextResponse.json(
                { error: "تمام فیلد ها را پر کنید" },
                { status: 400 }
            );
        }

        // Ensure the image is a file
        if (image && image.size > 0) {
            // Generate a unique filename to avoid conflicts
            const imageName = `${image.name}`;
            const imagePath = path.join(process.cwd(), 'public', 'images', imageName);

            // Write the file to the public/images/ directory
            const buffer = await image.arrayBuffer();
            const bufferData = Buffer.from(buffer);
            fs.writeFileSync(imagePath, bufferData);

            // Save the relative path to MongoDB (e.g., /images/imageName)
            const category = new Category({
                id,
                name,
                image: `/images/${imageName}` // Save the relative path
            });

            await category.save();

            return NextResponse.json(
                { message: "دسته بندی با موفقیت اضافه شد:", category },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { error: "فایل تصویر معتبر نیست." },
                { status: 400 }
            );
        }



    } catch (error) {
        console.error("خطا در ایجاد دسته بندی:", error.message);
        return NextResponse.json(
            { error: "خطای سرور" },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectDB();
        const categories = await Category.find();
        return NextResponse.json({ status: "Success", categories }, { status: 200 });
    } catch (error) {
        console.error("Error fetching categories:", error);
        return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
    }
}