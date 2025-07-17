'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

export default function AdminDashboard() {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState('');
  const [imageFiles, setImageFiles] = useState<(File | null)[]>([null, null, null]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [deleteId, setDeleteId] = useState('');

  const handleFileChange = (index: number, file: File | null) => {
    const newFiles = [...imageFiles];
    newFiles[index] = file;
    setImageFiles(newFiles);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFiles[0] || !description || !title || !price || !rating || !category) {
      setMessage('Please fill all fields and at least the first image.');
      return;
    }

    setUploading(true);
    setMessage('');

    try {
      const uploadedUrls: string[] = [];

      for (let i = 0; i < imageFiles.length; i++) {
        const file = imageFiles[i];
        if (!file) {
          uploadedUrls.push('');
          continue;
        }

        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${i}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('products-images')
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false,
          });

        if (uploadError) {
          setMessage('Error uploading image: ' + uploadError.message);
          setUploading(false);
          return;
        }

        const { data: publicUrlData } = supabase.storage
          .from('products-images')
          .getPublicUrl(filePath);

        uploadedUrls.push(publicUrlData.publicUrl);
      }

      const [image_url, image_url2, image_url3] = uploadedUrls;

      const { error: insertError } = await supabase.from('products').insert([
        {
          image_url,
          image_url2,
          image_url3,
          title,
          description,
          price: parseFloat(price),
          rating: parseFloat(rating),
          category,
        },
      ]);

      if (insertError) {
        setMessage('Error saving product: ' + insertError.message);
        setUploading(false);
        return;
      }

      setMessage('✅ Product uploaded successfully!');
      setTitle('');
      setDescription('');
      setPrice('');
      setRating('');
      setCategory('');
      setImageFiles([null, null, null]);
      for (let i = 0; i < 3; i++) {
        const input = document.getElementById(`imageInput${i}`) as HTMLInputElement;
        if (input) input.value = '';
      }
    } catch (error) {
      setMessage('Unexpected error: ' + error);
    }

    setUploading(false);
  };

  //  Updated delete function
  const handleDelete = async () => {
    if (!deleteId || deleteId.trim() === '') {
      setMessage('❌ Please enter a valid ID to delete.');
      return;
    }

    const idToDelete = deleteId.trim();

    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', idToDelete);

    if (error) {
      setMessage('❌ Error deleting product: ' + error.message);
    } else {
      setMessage(`✅ Product with ID ${idToDelete} deleted.`);
      setDeleteId('');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 mb-20">
        <h1 className="text-3xl font-bold mb-6 text-center">🛒 Admin Product Dashboard</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Image inputs in a row */}
          <div className="flex flex-wrap gap-4 mb-6">
            {[0, 1, 2].map((index) => (
              <div key={index} className="flex-1 min-w-[150px]">
                <label htmlFor={`imageInput${index}`} className="block font-semibold mb-1">
                  Product Image {index + 1} {index === 0 && <span className="text-red-500">*</span>}
                </label>
                <input
                  type="file"
                  id={`imageInput${index}`}
                  accept="image/*"
                  onChange={(e) => handleFileChange(index, e.target.files?.[0] || null)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            ))}
          </div>

          {/* Title */}
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter product title"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows={3}
            />
          </div>

          {/* Price, Rating, Category in one row */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Price (₦)</label>
              <input
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Price"
              />
            </div>

            <div className="flex-1">
              <label className="block font-semibold mb-1">Rating (0 - 5)</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Rating"
              />
            </div>

            <div className="flex-1">
              <label className="block font-semibold mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Select Category</option>
                <option value="computers">Computers</option>
                <option value="accessories">Accessories</option>
                <option value="phones">Phones</option>
                <option value="speaker">Speaker</option>
                <option value="router">Router</option>
                <option value="watch">Watch</option>
                <option value="gaming">Gaming</option>
                <option value="tv">TV</option>
                <option value="new">NewDeal</option>
                <option value="goodDeals">GoodDeals</option>

              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition mx-auto block"
          >
            {uploading ? 'Uploading...' : 'Upload Product'}
          </button>

        </form>

        <hr className="my-8" />

        <div className="space-y-3">
          <h2 className="text-xl font-bold">🗑️ Delete Product</h2>
          <input
            type="text"
            placeholder="Enter Product ID to delete"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 transition mx-auto block"
          >
            Delete Product
          </button>

        </div>

        {message && (
          <p className="mt-6 text-center text-sm text-red-600 font-medium">{message}</p>
        )}
      </div>
      <Footer />
    </div>

  );
}
