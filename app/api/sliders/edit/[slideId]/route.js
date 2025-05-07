import connectDB from "@/utils/connectDB";
import Slider from "@/models/Slider";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function PUT(req, { params }) {
    await connectDB();
    try {
        const { slideId } = await params;
        const data = await req.formData();
        const id = slideId; 
        const title = data.get("title");
        const season = data.get("season");
        const link = data.get("link");
        const position = data.get("position");
        const button = data.get("button");
        const image = data.get("image");

        if (!id) {
            return NextResponse.json(
                { error: "آیدی محصول الزامی است." },
                { status: 400 }
            );
        }

        // Find the product in the database
        const existingSlide = await Slider.findById(id);
        if (!existingSlide) {
            return NextResponse.json(
                { error: "اسلایدی با این آیدی پیدا نشد." },
                { status: 404 }
            );
        }

        let imagePath = existingSlide.image; // Default to existing image path
        if (image && image.size > 0) {
            // If a new image is provided, save it
            const imageName = `${image.name}`;
            imagePath = path.join(process.cwd(), 'public', 'images', imageName);

            // Write the file to the public/images/ directory
            const buffer = await image.arrayBuffer();
            const bufferData = Buffer.from(buffer);
            fs.writeFileSync(imagePath, bufferData);

            // Use the relative path for MongoDB
            imagePath = `/images/${imageName}`;
        }

        // Update the product fields
        existingSlide.title = title || existingSlide.title;
        existingSlide.season = season || existingSlide.season;
        existingSlide.link = link || existingSlide.link;
        existingSlide.position = position || existingSlide.position;
        existingSlide.button = button || existingSlide.button;
        existingSlide.image = imagePath;

        // Save the updated product
        await existingSlide.save();

        return NextResponse.json(
            { message: "اسلاید با موفقیت بروزرسانی شد", slider: existingSlide },
            { status: 200 }
        );
    } catch (error) {
        console.error("خطا در بروزرسانی اسلاید:", error.message);
        return NextResponse.json(
            { error: "خطای سرور" },
            { status: 500 }
        );
    }
}