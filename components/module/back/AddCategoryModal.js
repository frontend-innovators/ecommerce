"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";

import { toast } from "react-toastify";

function AddServiceModal({ setIsModalOpen, addCategory }) {
    const [category, setCategory] = useState({
        id: "",
        name: "",
    });
    const [imageFile, setImageFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory((prevCategory) => ({ ...prevCategory, [name]: value }))
    };
    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleAddCategory = async () => {
        try {
            const formData = new FormData();
            formData.append("id", category.id);
            formData.append("name", category.name);
            if (imageFile) {
                formData.append("image", imageFile);
            }

            const res = await fetch("/api/categories", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "خطا در افزودن دسته بندی");
            }

            toast.success("دسته بندی با موفقیت اضافه شد:", data);
            setCategory({
                id: "",
                name: "",
            });
            setImageFile(null);
            addCategory(data.category);
            setIsModalOpen(false);
        } catch (error) {
            console.error("خطا در ایجاد دسته بندی:", error.message);
        }
    };

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center z-50">
            <div className="rounded-md relative w-4/5 max-w-2xl max-h-[90vh] overflow-y-auto p-6 bg-white">
                <IoClose
                    className="absolute top-2 left-2 text-lg cursor-pointer"
                    onClick={() => setIsModalOpen(false)}
                />
                <h2 className="text-2xl font-bold mb-4">ایجاد دسته بندی جدید</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        name="id"
                        placeholder="شناسه دسته بندی"
                        value={category.id}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="نام دسته بندی"
                        value={category.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <div>
                        <label className="block mb-2">تصویر:</label>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 file:bg-orange-500 file:text-white file:py-2 file:px-4 file:rounded-lg"
                        />
                    </div>
                    <button
                        onClick={handleAddCategory}
                        className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-orange-600 transition"
                    >
                        افزودن دسته بندی
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddServiceModal;
