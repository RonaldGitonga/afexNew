'use client'
import React, { useState } from 'react';
import axios from 'axios';

const BlogCreationPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [slug, setSlug] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async(e) => {
 
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image)
    formData.append("title", title)
    formData.append("description", description)
    formData.append("slug", slug)
    formData.append("date", date);

     axios.post(
      "http://localhost:3000/api/blogs",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    // Handle form submission (e.g., send data to server)
    console.log({ title, description, slug, date, image });
  };
  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-white shadow-md rounded-sm text-black ">
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 p-2 w-full border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 p-2 w-full border rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="slug" className="block text-sm font-medium text-gray-600">
            Slug
          </label>
          <input
            type="text"
            id="slug"
            className="mt-1 p-2 w-full border rounded-md"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-600">
            Date of Submission
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 p-2 w-full border rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
            Image URL
          </label>
          <input
            type="file"
            id="image"
            className="mt-1 p-2 w-full border rounded-md"
            accept='image/*'
            onChange= {onInputChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default BlogCreationPage;
