import Blog from "@/models/Blogs";
import Category from "@/models/Category";
import Slider from "@/models/Slider";
import connectDB from "@/utils/connectDB"

export const fetchSlides = async () => {
    connectDB();
    try {
        const slides = await Slider.find();
        return JSON.parse(JSON.stringify(slides));
    } catch (error) {
        throw new Error("!خطا در دریافت اطلاعات");
    }
}

export const fetchBlogs = async () => {
    connectDB();
    try {
        const blogs = await Blog.find();
        return JSON.parse(JSON.stringify(blogs));
    } catch (error) {
        throw new Error("!خطا در دریافت اطلاعات");
    }
}

export async function getData() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products`, { cache: "no-store" });
        if (!res.ok) {
            throw new Error("failed to fetch dataaaa")
        }
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}