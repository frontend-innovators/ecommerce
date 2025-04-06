"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Heading from "@tiptap/extension-heading";

function EditProductModal({ isOpen, setIsEditModalOpen, productToEdit, updateProduct }) {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    slug: "",
    price: "",
    quantity: "",
    tags: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data.categories);
      } catch (error) {
        toast.error("خطا در دریافت دسته‌بندی‌ها");
      }
    };

    fetchCategories();
  }, []);

  const [thumbnail, setThumbnail] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [previewThumb, setPreviewThumb] = useState(null);
  const [previewGallery, setPreviewGallery] = useState([]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Heading,
      Placeholder.configure({
        placeholder: "توضیحات خود را اینجا وارد کنید...",
      }),
    ],
    content: productToEdit?.description || "",
    onUpdate: ({ editor }) => {
      setProduct((prev) => ({
        ...prev,
        description: editor.getHTML(),
      }));
    },
  });

  useEffect(() => {
    if (isOpen && productToEdit) {
      setProduct({
        title: productToEdit.title || "",
        slug: productToEdit.slug || "",
        price: productToEdit.price || "",
        quantity: productToEdit.quantity || "",
        tags: Array.isArray(productToEdit.tags) ? productToEdit.tags.join(", ") : productToEdit.tags,
        description: productToEdit.description || "",
        category: productToEdit.category || "",
      });

      setPreviewThumb(productToEdit.thumbnail || null);
      setPreviewGallery(productToEdit.gallery || []);
      editor?.commands.setContent(productToEdit.description || "");
    }
  }, [isOpen, productToEdit, editor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      const updatedProduct = { ...prev, [name]: value };
      if (name === "title") {
        updatedProduct.slug = value.trim().toLowerCase().replace(/\s+/g, "-");
      }
      return updatedProduct;
    });
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      setPreviewThumb(URL.createObjectURL(file));
    }
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    setGallery(files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewGallery(previews);
  };

  const handleUpdateProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("title", product.title);
      formData.append("slug", product.slug);
      formData.append("price", product.price);
      formData.append("quantity", product.quantity);
      formData.append("tags", product.tags);
      formData.append("description", product.description);
      formData.append("category", product.category);

      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }

      gallery.forEach((file) => {
        formData.append("gallery", file);
      });

      const res = await fetch(`/api/products/edit/${productToEdit._id}`, {
        method: "PUT",
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "خطا در ویرایش محصول");
      }

      const data = await res.json();
      updateProduct(data.product);

      toast.success("محصول با موفقیت ویرایش شد!");
      setIsEditModalOpen(false);
    } catch (error) {
      toast.error(error.message || "خطا در ویرایش محصول");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center z-50">
      <div className="rounded-lg shadow-lg w-full max-w-2xl p-6 relative overflow-y-auto max-h-[90vh] bg-white">
        <button
          onClick={() => setIsEditModalOpen(false)}
          className="absolute top-3 right-3 text-2xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">ویرایش محصول</h2>

        <input
          type="text"
          name="title"
          placeholder="عنوان"
          value={product.title}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
        />

        <input
          type="text"
          name="slug"
          placeholder="اسلاگ"
          value={product.slug}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
        />

        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">انتخاب دسته‌بندی</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="price"
          placeholder="قیمت"
          value={product.price}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
        />

        <input
          type="text"
          name="quantity"
          placeholder="تعداد"
          value={product.quantity}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
        />

        <input
          type="text"
          name="tags"
          placeholder="برچسب‌ها (با ویرگول جدا شود)"
          value={product.tags}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
        />

        <div className="border border-gray-300 rounded-lg p-4 mb-4">
          <div className="flex gap-2 mb-2">
            <button onClick={() => editor?.chain().focus().toggleBold().run()} className={`py-1 px-3 rounded ${editor?.isActive("bold") ? "bg-orange-500 text-white" : "bg-gray-500 text-white"}`}>Bold</button>
            <button onClick={() => editor?.chain().focus().toggleItalic().run()} className={`py-1 px-3 rounded ${editor?.isActive("italic") ? "bg-orange-500 text-white" : "bg-gray-500 text-white"}`}>Italic</button>
            <button onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()} className={`py-1 px-3 rounded ${editor?.isActive("heading", { level: 1 }) ? "bg-orange-500 text-white" : "bg-gray-500 text-white"}`}>H1</button>
            <button onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} className={`py-1 px-3 rounded ${editor?.isActive("heading", { level: 2 }) ? "bg-orange-500 text-white" : "bg-gray-500 text-white"}`}>H2</button>
          </div>
          <EditorContent editor={editor} />
        </div>

        <div className="mt-4 mb-4">
          <label className="block mb-1">تصویر شاخص (Thumbnail):</label>
          <input
            type="file"
            onChange={handleThumbnailChange}
            className="w-full border border-gray-300 rounded-lg file:bg-orange-500 file:text-white file:py-2 file:px-4 file:rounded-lg"
          />
          {previewThumb && (
            <img
              src={previewThumb}
              alt="Preview Thumbnail"
              className="mt-2 w-32 h-32 object-cover rounded border"
            />
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">گالری تصاویر:</label>
          <input
            type="file"
            multiple
            onChange={handleGalleryChange}
            className="w-full border border-gray-300 rounded-lg file:bg-orange-500 file:text-white file:py-2 file:px-4 file:rounded-lg"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {previewGallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`gallery-img-${i}`}
                className="w-24 h-24 object-cover rounded border"
              />
            ))}
          </div>
        </div>

        <button
          onClick={handleUpdateProduct}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-orange-600 transition"
        >
          اعمال تغییرات
        </button>
      </div>
    </div>
  );
}

export default EditProductModal;
