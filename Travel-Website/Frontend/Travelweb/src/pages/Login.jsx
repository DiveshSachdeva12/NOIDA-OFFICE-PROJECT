import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import navigation

function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize navigation

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            console.log("🔹 Sending Login Data:", formData);
            const response = await axios.post("http://localhost:5000/api/auth/login", formData, {
                headers: { "Content-Type": "application/json" }
            });

            console.log("✅ Login Success:", response.data);
            
            // Store token in localStorage
            localStorage.setItem("token", response.data.token);

            alert("🎉 Login Successful!");

            // Redirect user to dashboard or home page
            navigate("/dashboard"); 

        } catch (error) {
            console.error("❌ Login Failed:", error.response?.data || error.message);
            setError(error.response?.data?.message || "Login failed. Please try again.");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-3">Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
