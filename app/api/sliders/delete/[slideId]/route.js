import Slider from "@/model/slider";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    await connectDB();

    try {
        const { slideId } = await params;

        if (!slideId) {
            return NextResponse.json(
                { status: "failed", message: "Slider ID is required!" },
                { status: 400 }
            );
        }

        const deletedSlider = await Slider.findByIdAndDelete(slideId);

        if (!deletedSlider) {
            return NextResponse.json(
                { status: "failed", message: "Slider not found!" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { status: "success", message: "Slider deleted successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in delete process:", error);
        return NextResponse.json(
            { status: "failed", message: "Error in deleting product!" },
            { status: 500 }
        );
    }
}