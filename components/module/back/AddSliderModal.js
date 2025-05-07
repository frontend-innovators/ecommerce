import React, { useState } from 'react'

import { IoClose } from "react-icons/io5";

function AddSliderModal({ setIsModalOpen, addSlider, handleToggleIsActive }) {

    const [slider, setSlider] = useState({
        title: "",
        season: "",
        link: "",
        position: 0,
        button: "",
    });
    const [imageFile, setImageFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSlider((prev) => ({ ...prev, [name]: value }));
    };


    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleAddSlider = async () => {
        try {
            const formData = new FormData();
            formData.append("title", slider.title);
            formData.append("season", slider.season);
            formData.append("link", slider.link);
            formData.append("position", slider.position);
            formData.append("button", slider.button);
            if (imageFile) {
                formData.append("image", imageFile); // Append the file
            }

            const res = await fetch("/api/sliders", {
                method: "POST",
                body: formData,
            });

            const data = await res.json(); // Parse response as JSON

            if (!res.ok) {
                throw new Error(data.error || "Failed to add slide");
            }

            console.log("Slide added:", data);
            setSlider({
                title: "",
                season: "",
                link: "",
                position: 0,
                button: "",
            });
            addSlider(data.slider);
            setImageFile(null);
            setIsModalOpen(false);
        } catch (error) {
            console.error("Failed to add slide:", error.message);
        }
    };

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center z-50">
            <div className='bg-white p-6 rounded-md relative'>
                <IoClose className='absolute top-2 left-2 text-lg cursor-pointer' onClick={() => setIsModalOpen(false)} />
                <h2 className="text-2xl font-bold text-gray-800 mb-4">ایجاد اسلاید جدید</h2>
                <div className="space-y-4">
                    {/* Title Input */}
                    <input
                        type="text"
                        name="title"
                        placeholder="عنوان اسلاید"
                        value={slider.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {/* Season Input */}
                    <input
                        type="text"
                        name="season"
                        placeholder="عنوان اسلاید"
                        value={slider.season}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {/* Link */}
                    <input
                        type="text"
                        name="link"
                        placeholder="لینک"
                        value={slider.link}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {/* Button Text Input */}
                    <input
                        type="text"
                        name="button"
                        placeholder="متن دکمه"
                        value={slider.button}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {/* Position */}
                    <input
                        type="number"
                        name="position"
                        placeholder="موقعیت"
                        value={slider.position}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {/* File Input */}
                    <div>
                        <label className="block text-gray-700 mb-2">تصویر:</label>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 file:bg-orange-500 file:text-white file:py-2 file:px-4 file:rounded-lg"
                        />
                    </div>
                    {/* Submit Button */}
                    <button
                        onClick={handleAddSlider}
                        className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-orange-600 transition cursor-pointer"
                    >
                        افزودن اسلاید
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddSliderModal