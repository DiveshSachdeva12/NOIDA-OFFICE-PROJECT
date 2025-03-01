import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState({ name: false, email: false, password: false, confirmPassword: false });

    const validate = (name, value) => {
        let error = "";
        let valid = false;

        const nameRegex = /^[a-zA-Z\s]{3,}$/;  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (name === "name") {
            valid = nameRegex.test(value);
            error = valid ? "" : "Username must be at least 3 letters (no numbers or special characters).";
        } else if (name === "email") {
            valid = emailRegex.test(value);
            error = valid ? "" : "Enter a valid email address.";
        } else if (name === "password") {
            valid = passwordRegex.test(value);
            error = valid ? "" : "Password must be at least 8 characters, include uppercase, number, and special character.";
        } else if (name === "confirmPassword") {
            valid = value === formData.password && value.length > 0;
            error = valid ? "" : "Passwords do not match.";
        }

        return { error, valid };
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const { error, valid } = validate(name, value);

        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: error });
        setIsValid({ ...isValid, [name]: valid });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValid.name || !isValid.email || !isValid.password || !isValid.confirmPassword) {
            toast.error("Please fix the errors before submitting.");
            return;
        }

        try {
            console.log("🔹 Sending Data to Backend:", formData);
            const response = await axios.post("http://localhost:5000/api/auth/register", formData, {
                headers: { "Content-Type": "application/json" }
            });

            console.log("✅ Registration Success:", response.data);
            toast.success("🎉 Registration Successful!");
        } catch (error) {
            console.error("❌ Registration Failed:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Registration failed. Please try again.");
        }
    };

    return (
        <div 
        className="container-fluid vh-100 d-flex align-items-center justify-content-center position-relative" 
        style={{
            backgroundImage: "url('../public/bus3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative"
        }}
    >
        {/* Dark Overlay */}
        <div 
            className="position-absolute top-0 start-0 w-100 h-100" 
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // Adjust opacity here (0.5 = 50% darkness)
        ></div>
    
            <div className="row w-100 h-100 justify-content-center align-items-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow-lg p-4 bg-white rounded" style={{ maxWidth: "400px", width: "100%" }}>
                        <h2 className="text-center mb-3">Register</h2>
                        <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input
                                    type="text"
                                    name="name"
                                    className={`form-control ${formData.name ? (isValid.name ? "is-valid" : "is-invalid") : ""}`}
                                    placeholder="Enter your username"
                                    onChange={handleChange}
                                    required
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className={`form-control ${formData.email ? (isValid.email ? "is-valid" : "is-invalid") : ""}`}
                                    placeholder="Enter your email"
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className={`form-control ${formData.password ? (isValid.password ? "is-valid" : "is-invalid") : ""}`}
                                    placeholder="Enter your password"
                                    onChange={handleChange}
                                    required
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className={`form-control ${formData.confirmPassword ? (isValid.confirmPassword ? "is-valid" : "is-invalid") : ""}`}
                                    placeholder="Confirm your password"
                                    onChange={handleChange}
                                    required
                                />
                                {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
