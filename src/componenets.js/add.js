import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

function AddUser() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      Name: name,
      Email: email,
      phone: phone,
      // Include the image data as a Base64 string
      Image: imageFile ? URL.createObjectURL(imageFile) : null,
    };

    // Send newUser to the server, including the image data

    axios
      .post("http://localhost:3000/Details", newUser)
      .then((response) => {
        console.log("User added successfully:", response.data);
        navigate("/"); // Redirect to the home page after adding the user
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold">
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold">
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*" // Allow only image files
            onChange={handleImageChange} // Handle file selection
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {imageFile && (
            <img
              src={URL.createObjectURL(imageFile)} // Display the selected image
              alt="Selected"
              className="mt-2 max-w-full h-auto"
            />
          )}
          <button
            type="button"
            onClick={() => {
              // Trigger the file input dialog
              const fileInput = document.getElementById("image");
              fileInput.click();
            }}
            className="mt-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Select Image
          </button>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
