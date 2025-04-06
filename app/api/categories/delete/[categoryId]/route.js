import Category from "@/models/Category";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    await connectDB();

    try {
        const { categoryId } = await params;

        if (!categoryId) {
            return NextResponse.json(
                { status: "failed", message: "Category ID is required!" },
                { status: 400 }
            );
        }

        const deletedCategory = await Category.findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            return NextResponse.json(
                { status: "failed", message: "Category not found!" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { status: "success", message: "Category deleted successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in delete process:", error);
        return NextResponse.json(
            { status: "failed", message: "Error in deleting Category!" },
            { status: 500 }
        );
    }
}
