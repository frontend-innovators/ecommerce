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