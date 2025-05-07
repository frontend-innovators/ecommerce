"use client";

import { useState, useEffect } from "react";

import { toast } from "react-toastify";

function EditSliderModal({ isOpen, setIsEditModalOpen, sliderToEdit, updateSlider, handleToggleIsActive }) {
    const [slider, setSlider] = useState({
        title: "",
        season: "",
        link: "",
        position: 0,
        button: "",
    });
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        if (isOpen && sliderToEdit) {
            setSlider({
                title: sliderToEdit.title || "",
                season: sliderToEdit.season || "",
                link: sliderToEdit.link || "",
                position: sliderToEdit.position || "",
                button: sliderToEdit.button || "",
            });
        }
    }, [isOpen, sliderToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSlider((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]); // Store the selected file
    };

    const handleUpdateSlider = async () => {
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

            const res = await fetch(`/api/sliders/edit/${sliderToEdit._id}`, {
                method: "PUT",
                body: formData,
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to update slider");
            }

            const data = await res.json();

            // Update the category in the parent component
            updateSlider(data.slider);

            // Show success toast and close the modal
            toast.success('اسلاید با موفقیت ویرایش شد!');
            setIsEditModalOpen(false);

        } catch (error) {
            // Show error toast
            toast.error(error.message || 'خطا در ویرایش اسلاید');
        }
    };

    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md relative">
                <button
                    onClick={() => setIsEditModalOpen(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                    ×
                </button>
                <h2 className="text-2xl font-bold mb-4">ویرایش اسلاید</h2>
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
                        placeholder="فصل"
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
                    <div className="mb-4">
                        <input
                            type="file"
                            onChange={handleImageChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 file:bg-orange-500 file:text-white file:py-2 file:px-4 file:rounded-lg"
                        />
                    </div>
                    {/* Update category Button */}
                    <button
                        onClick={handleUpdateSlider}
                        className="w-full mt-5 bg-orange-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-orange-600 transition"
                    >
                        اعمال تغییرات
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditSliderModal;