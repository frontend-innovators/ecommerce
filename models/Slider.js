import { Schema, model, models } from "mongoose";

const sliderSchema = new Schema(
    {
        title: { type: String, required: true },
        image: { type: String, required: true },
        season: { type: String, required: true },
        link: { type: String },
        position: { type: Number, default: 0 },
        button: { type: String, required: true },
    },
    { timestamps: true }
);

const Slider = models.Slider || model("Slider", sliderSchema);

export default Slider;