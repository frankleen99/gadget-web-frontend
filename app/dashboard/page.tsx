"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const Dashboard = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        rating: "",
    });
    const [coverImage, setCoverImage] = useState<File | null>(null);
    const [parlorImage, setParlorImage] = useState<File | null>(null);
    const [bedroomImage, setBedroomImage] = useState<File | null>(null);
    const [bathroomImage, setBathroomImage] = useState<File | null>(null);
    const [responseMessage, setResponseMessage] = useState("");
    const [propertyId, setPropertyId] = useState<string | null>(null);
    const [deleteId, setDeleteId] = useState<string>("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            setIsLoggedIn(true); // User is logged in
        }
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setFile: React.Dispatch<React.SetStateAction<File | null>>
    ) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const form = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            form.append(key, value.toString());
        });
        if (coverImage) form.append("cover_image", coverImage);
        if (parlorImage) form.append("parlor_image", parlorImage);
        if (bedroomImage) form.append("bedroom_image", bedroomImage);
        if (bathroomImage) form.append("bathroom_image", bathroomImage);

        try {
            const token = localStorage.getItem("authToken");
            if (!token) {
                setResponseMessage("You are not authorized. Please log in.");
                return;
            }

            let response;
            if (propertyId) {
                // PUT or PATCH method (Update property)
                response = await axios.put(
                    `https://elbisapi.onrender.com/v1/api/properties/${propertyId}`,
                    form,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            } else {
                // POST method (Create new property)
                response = await axios.post(
                    "https://elbisapi.onrender.com/v1/api/properties",
                    form,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            }

            if (response.data.success) {
                setResponseMessage(
                    propertyId
                        ? "Property updated successfully!"
                        : "Property uploaded successfully!"
                );
                console.log("Upload successful:", response.data);
                setFormData({
                    name: "",
                    description: "",
                    price: "",
                    rating: "",
                });
                setCoverImage(null);
                setParlorImage(null);
                setBedroomImage(null);
                setBathroomImage(null);
                setPropertyId(null); // Reset propertyId after successful submission
            } else {
                setResponseMessage("Error uploading property.");
            }
        } catch (error) {
            console.error("Upload error:", error);
            setResponseMessage("Please try again.");
        }
    };

    const handleDelete = async () => {
        if (!deleteId) {
            setResponseMessage("Please enter a property ID to delete.");
            return;
        }

        try {
            const token = localStorage.getItem("authToken");
            if (!token) {
                setResponseMessage("You are not authorized. Please log in.");
                return;
            }

            console.log("Attempting to delete property with ID:", deleteId);

            const response = await axios.delete(
                `https://elbisapi.onrender.com/v1/api/properties/${deleteId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Delete response:", response.data);

            if (response.data.success) {
                setResponseMessage("Property deleted successfully!");
                setDeleteId(""); // Clear the delete ID input after successful deletion
            } else {
                setResponseMessage("Error deleting property.");
            }
        } catch (error) {
            console.error("Delete error:", error);
            setResponseMessage("Failed to delete property. Please try again.");
        }
    };

    return (

        <div>
            <Navbar />
            <div className="min-h-screen flex flex-col lg:flex-row items-start justify-center gap-10 bg-gray-50 px-4 sm:px-6 lg:px-8 py-10">

                {/* Upload/Edit Form */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-xl bg-white p-8 sm:p-10 rounded-xl shadow-xl border border-gray-200 space-y-6"
                >
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                        {propertyId ? "Edit Property" : "Upload Property"}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <textarea
                            name="name"
                            placeholder="Name"
                            onChange={handleInputChange}
                            className="p-3 border border-gray-300 rounded-lg resize-none"
                            required
                        />
                        <textarea
                            name="description"
                            placeholder="Description"
                            onChange={handleInputChange}
                            className="p-3 border border-gray-300 rounded-lg resize-none"
                            required
                        />
                        <input
                            type="text"
                            name="price"
                            placeholder="Price"
                            onChange={handleInputChange}
                            className="p-3 border border-gray-300 rounded-lg"
                            required
                        />
                        <input
                            type="number"
                            name="rating"
                            placeholder="Rating"
                            onChange={handleInputChange}
                            className="p-3 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, setCoverImage)}
                            className="p-3 border border-gray-300 rounded-lg"
                        />
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, setParlorImage)}
                            className="p-3 border border-gray-300 rounded-lg"
                        />
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, setBedroomImage)}
                            className="p-3 border border-gray-300 rounded-lg"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 font-semibold rounded-lg text-white bg-black shadow-md transition duration-300 ease-in-out hover:opacity-90"
                    >
                        Submit
                    </button>
                </form>

                {/* Delete Section */}
                <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-xl shadow-xl border border-gray-200">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Delete Property
                    </h3>
                    <input
                        type="text"
                        value={deleteId}
                        onChange={(e) => setDeleteId(e.target.value)}
                        placeholder="Enter Property ID to delete"
                        className="w-full p-3 border border-gray-300 rounded-lg mb-5"
                    />
                    <button
                        onClick={handleDelete}
                        className="w-full text-white py-3 rounded-lg shadow-md font-semibold bg-black transition duration-300 ease-in-out hover:opacity-90"
                    >
                        Delete Property
                    </button>
                </div>

            </div>
            <Footer />

        </div>

    );
};

export default Dashboard;
