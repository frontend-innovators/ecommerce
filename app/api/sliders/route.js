import Slider from "@/models/Slider";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
    await connectDB();
    try {
        const data = await req.formData();
        const title = data.get("title");
        const season = data.get("season");
        const link = data.get("link");
        const position = data.get("position");
        const button = data.get("button");
        const image = data.get("image");

        // Check if all required fields are provided
        if (!title || !image || !link || !button || !season) {
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
            const slider = new Slider({
                title,
                season,
                link,
                position,
                button,
                image: `/images/${imageName}` // Save the relative path
            });

            await slider.save();

            return NextResponse.json(
                { message: "اسلاید با موفقیت اضافه شد:", slider },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { error: "فایل تصویر معتبر نیست." },
                { status: 400 }
            );
        }

    } catch (error) {
        console.error("خطا در ایجاد اسلاید:", error.message);
        return NextResponse.json(
            { error: "خطای سرور" },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectDB();
        const sliders = await Slider.find();
        return NextResponse.json(sliders, { status: 200 });
    } catch (error) {
        console.error("Error fetching sliders:", error);
        return NextResponse.json({ error: "Failed to fetch sliders" }, { status: 500 });
    }
}