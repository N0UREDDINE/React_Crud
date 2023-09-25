import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/Details/${id}`)
            .then((res) => {
                setUser(res.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-200 h-screen flex flex-col items-center justify-center">
            <div className="w-100 bg-white shadow-xl hover:shadow-lg p-8 rounded-lg">
                <img
                    className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
                    src={user.Image || user.DefaultImage}
                    alt=""
                />

                <div className="text-center mt-4 text-3xl font-medium">{user.Name}</div>

                <hr className="my-6 border-t border-gray-300" />



                <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-800">Name  : {user.Name}</h2>
                    <p className="text-xl font-semibold text-gray-800">Email    : {user.Email}</p>
                    <p className="text-xl font-semibold text-gray-800">Phone  : {user.phone}</p>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;
