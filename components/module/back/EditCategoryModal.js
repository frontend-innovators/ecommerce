"use client";

import { useEffect, useState } from "react";

import { toast } from "react-toastify";

function EditCategoryModa({ isOpen, setIsEditModalOpen, categoryToEdit, updateCategory }) {
  const [category, setCategory] = useState({
    id: "",
    name: "",
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (isOpen && categoryToEdit) {
      setCategory({
        id: categoryToEdit.id || "",
        name: categoryToEdit.name || "",
      });
    }
  }, [isOpen, categoryToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => {
      const updatedCategory = { ...prev, [name]: value };
      if (name === "name") {
        updatedCategory.slug = value.trim().toLowerCase().replace(/\s+/g, "-");
      }
      return updatedCategory;
    });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleUpdateCategory = async () => {
    try {
      const formData = new FormData();
      formData.append("id", category.id);
      formData.append("name", category.name);
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const res = await fetch(`/api/categories/edit/${categoryToEdit._id}`, {
        method: "PUT",
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "خطا در ویرایش دسته بندی");
      }

      const data = await res.json();
      updateCategory(data.category);

      toast.success("دسته بندی با موفقیت ویرایش شد!");
      setIsEditModalOpen(false);
    } catch (error) {
      toast.error(error.message || "خطا در ویرایش دسته بندی");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center z-50">
      <div className="rounded-lg shadow-lg w-full max-w-2xl p-6 relative overflow-y-auto max-h-[90vh] bg-white">
        <button
          onClick={() => setIsEditModalOpen(false)}
          className="absolute top-3 right-3"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">ویرایش دسته بندی</h2>

        <input
          type="text"
          name="id"
          placeholder="عنوان دسته بندی"
          value={category.id}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="text"
          name="name"
          placeholder="آدرس"
          value={category.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <div className="mt-4">
          <label className="bloc mb-2">تصویر:</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 file:bg-orange-500 file:text-white file:py-2 file:px-4 file:rounded-lg"
          />
        </div>

        <button
          onClick={handleUpdateCategory}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-orange-600 transition mt-4"
        >
          اعمال تغییرات
        </button>
      </div>
    </div>
  );
}

export default EditCategoryModa;
