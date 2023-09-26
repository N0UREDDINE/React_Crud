import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    Name: "",
    Email: "",
    phone: "",
    Image: null, // Initialize the Image field as null
  });

  useEffect(() => {
    // Fetch the user data based on the id
    axios
      .get(`http://localhost:3000/Details/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a PUT request to update the user data
    axios
      .put(`http://localhost:3000/Details/${id}`, user)
      .then((response) => {
        console.log("User updated successfully:", response.data);
        navigate("/"); // Redirect to the home page after editing the user
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const imageBase64 = reader.result;
      setUser({
        ...user,
        Image: imageBase64, // Update the Image field with the new image data
      });
    };
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            value={user.Name}
            onChange={handleInputChange}
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
            name="Email"
            value={user.Email}
            onChange={handleInputChange}
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
            value={user.phone}
            onChange={handleInputChange}
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
            accept="image/*"
            onChange={handleImageChange} // Handle file selection
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {user.Image && (
            <img
              src={user.Image}
              alt="User's Image"
              className="mt-2 max-w-full h-auto"
            />
          )}
          <button
            type="button"
            onClick={() => {
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
          Update User
        </button>
      </form>
    </div>
  );
}

export default EditUser;
