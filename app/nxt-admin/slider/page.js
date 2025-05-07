"use client";

import EditSliderModal from "@/components/module/back/EditSliderModal";
import AddSliderModal from "@/components/module/back/AddSliderModal";
import api from "@/config/cnofig";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Slider() {
    const [slider, setSlider] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [selectedSliderId, setSelectedSliderId] = useState(null);
    const [sliderToEdit, setSliderToEdit] = useState(null);

    const fetchedData = async () => {
        try {
            const response = await api.get('/api/sliders');
            setSlider(response.data);
        } catch (error) {
            console.error("Failed to fetch slides:", error.message);
            throw new Error("Failed to fetch slides");
        }
    };

    useEffect(() => {
        fetchedData();
    }, []);

    const addSlider = (newSlider) => {
        setSlider(prevSliders => [...prevSliders, newSlider]);
    };

    const handleEdit = (id) => {
        const slide = slider.find((p) => p._id === id); // Find the slider by its ID
        if (slide) {
            setSliderToEdit(slide); // Set the slider to edit
            setIsEditModalOpen(true); // Open the modal
        } else {
            console.error("Slider not found with id:", id);
        }
    };

    const handleDelete = async () => {
        try {
            const res = await fetch(`/api/sliders/delete/${selectedSliderId}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                const errorData = await res.json();
                console.error("Error from server:", errorData.message);
                throw new Error("Failed to delete the slide");
            }

            // Update state by removing the deleted product
            setSlider(prevSliders => prevSliders.filter(slider => slider._id !== selectedSliderId));

            toast.success('اسلاید با موفقیت حذف شد!')
            closeConfirmModal();
        } catch (error) {
            toast.error('خطا در حذف اسلاید!', error.message);
        }
    };

    const openConfirmModal = (sliderId) => {
        setSelectedSliderId(sliderId);
        setIsConfirmModalOpen(true);
    };

    const closeConfirmModal = () => {
        setSelectedSliderId(null);
        setIsConfirmModalOpen(false);
    };

    const handleToggleIsActive = () => {
        setSlider((prev) => ({ ...prev, isActive: !prev.isActive }));
    };


    return (
        <div className="w-full p-6 bg-white shadow-md rounded-lg">
            <button onClick={() => setIsModalOpen(true)} className="bg-orange-500 text-white py-2 px-4 rounded-md cursor-pointer">ایجاد اسلاید جدید</button>
            {isModalOpen && <AddSliderModal handleToggleIsActive={handleToggleIsActive} setIsModalOpen={setIsModalOpen} addSlider={addSlider} />}
            <div className="mt-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">لیست اسلایدها</h2>
                <div className="overflow-x-auto text-center">
                    <table className="table-auto w-full border-collapse border border-gray-300 shadow-md rounded-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300">#</th>
                                <th className="px-4 py-2 border border-gray-300">عنوان</th>
                                <th className="px-4 py-2 border border-gray-300">لینک</th>
                                <th className="px-4 py-2 border border-gray-300">تصویر</th>
                                <th className="px-4 py-2 border border-gray-300">تاریخ ایجاد</th>
                                <th className="px-4 py-2 border border-gray-300">عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {slider.map((slide, index) => (
                                <tr key={slide._id || index} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border border-gray-300 text-center">{digitsEnToFa(index + 1)}</td>
                                    <td className="px-4 py-2 border border-gray-300">{slide.title}</td>
                                    <td className="px-4 py-2 border border-gray-300">{slide.link}</td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        {new Date(slide.createdAt).toLocaleDateString("fa-IR")}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        <button
                                            onClick={() => handleEdit(slide._id)}
                                            className="bg-orange-600 text-white py-1 px-3 rounded-lg hover:bg-orange-700 transition mr-2"
                                        >
                                            ویرایش
                                        </button>
                                        <EditSliderModal
                                            handleToggleIsActive={handleToggleIsActive}
                                            isOpen={isEditModalOpen}
                                            sliderToEdit={sliderToEdit}
                                            setIsEditModalOpen={setIsEditModalOpen}
                                            updateSlider={(updatedSlider) => {
                                                setSlider((prevSliders) =>
                                                    prevSliders.map((slider) =>
                                                        slider._id === updatedSlider._id ? updatedSlider : slider
                                                    )
                                                );
                                            }}
                                        />
                                        <button
                                            onClick={() => openConfirmModal(slide._id)}
                                            className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition mr-6"
                                        >
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isConfirmModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p className="text-lg font-bold mb-4">آیا مطمئن هستید که می‌خواهید این محصول را حذف کنید؟</p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600 transition"
                            >
                                بله، حذف کن
                            </button>
                            <button
                                onClick={closeConfirmModal}
                                className="bg-gray-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-gray-600 transition"
                            >
                                لغو
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer position="bottom-right" />
        </div>
    );
}

export default Slider;