import React, { useState } from "react";
import { backentUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

function AdminLogin({ setToken }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handelAdminDetails = async (event) => {
        try {
            event.preventDefault();
            console.log(email, password);
            const response = await axios.post(
                backentUrl + "/api/user/loginAdmin",
                { email, password }
            );
            if (response.data.success) {
                setToken(response.data.token);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Admin Login
                </h2>

                <form
                    onSubmit={handelAdminDetails}
                    method="POST"
                    className="space-y-5"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm  outline-0 "
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            placeholder="Enter your password"
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            value={password}
                            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm outline-none "
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
