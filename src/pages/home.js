import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  function loadUsers() {
    axios.get("http://localhost:3000/Details")
      .then((res) => {
        setUsers(res.data.reverse());
      });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  function deleteUser(id) {
    axios.delete(`http://localhost:3000/Details/${id}`).then(loadUsers());
  }

  return (
    <div className="w-full h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">User Data Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="text-left px-4 py-2 bg-gray-200">ID</th>
              <th className="text-left px-4 py-2 bg-gray-200">Name</th>
              <th className="text-left px-4 py-2 bg-gray-200">Email</th>
              <th className="text-left px-4 py-2 bg-gray-200">Phone</th>
              <th className="text-left px-4 py-2 bg-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{data.Name}</td>
                <td className="border px-4 py-2">{data.Email}</td>
                <td className="border px-4 py-2">{data.phone}</td>
                <td className="border px-4 py-2">
                  <Link to={`/user/${data.id}`} className="bg-blue-500 text-white px-2 py-1 rounded-lg mr-2">View</Link>
                  <Link to={`/edit-user/${data.id}`} className="bg-green-500 text-white px-2 py-1 rounded-lg mr-2">Edit</Link>
                  <button onClick={() => deleteUser(data.id)} className="bg-red-500 text-white px-2 py-1 rounded-lg">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
