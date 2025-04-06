import Category from "@/models/Category";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function PUT(req, { params }) {
    await connectDB();

    try {
        const { categoryId } = params;
        const data = await req.formData();
        const id = data.get("id");
        const name = data.get("name");
        const image = data.get("image");

        if (!categoryId) {
            return NextResponse.json(
                { error: "آیدی دسته بندی الزامی است." },
                { status: 400 }
            );
        }

        const existingCategory = await Category.findById(categoryId);
        if (!existingCategory) {
            return NextResponse.json(
                { error: "دسته بندی با این آیدی پیدا نشد." },
                { status: 404 }
            );
        }

        // Process new image if provided
        let imagePath = existingCategory.image;
        if (image && image.size > 0) {
            const imageName = `${Date.now()}-${image.name}`;
            const newImagePath = path.join(process.cwd(), "public", "images", imageName);

            const buffer = await image.arrayBuffer();
            const bufferData = Buffer.from(buffer);
            fs.writeFileSync(newImagePath, bufferData);

            // Delete old image (optional)
            if (existingCategory.image && existingCategory.image.startsWith("/images/")) {
                const oldImagePath = path.join(process.cwd(), "public", existingCategory.image);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }

            imagePath = `/images/${imageName}`;
        }

        // Update category
        existingCategory.id = id || existingCategory.id;
        existingCategory.name = name || existingCategory.name;
        existingCategory.image = imagePath;

        await existingCategory.save();

        return NextResponse.json(
            { message: "دسته بندی با موفقیت بروزرسانی شد", category: existingCategory },
            { status: 200 }
        );
    } catch (error) {
        console.error("خطا در بروزرسانی دسته بندی:", error.message);
        return NextResponse.json(
            { error: "خطای سرور" },
            { status: 500 }
        );
    }
}
