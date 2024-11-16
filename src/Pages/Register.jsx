import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createNewUser, updateUserProfile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // Validate name
    if (name.length < 5) {
      setError({ name: "Name must be more than 5 characters" });
      return;
    }

    // Validate photo URL
    if (!photo.startsWith("http")) {
      setError({ photo: "Photo URL must start with http or https" });
      return;
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError({ email: "Invalid email format" });
      return;
    }

    // Validate password
    if (password.length < 6) {
      setError({ password: "Password must be at least 6 characters long" });
      return;
    }

    console.log({ name, email, photo, password });

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ dispayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .cetch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        setError({ global: error.message });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          {/* Name input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
            {error.name && (
              <label className="label text-xs text-red-500">{error.name}</label>
            )}
          </div>

          {/* Photo URL input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
            {error.photo && (
              <label className="label text-xs text-red-500">
                {error.photo}
              </label>
            )}
          </div>

          {/* Email input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
            {error.email && (
              <label className="label text-xs text-red-500">
                {error.email}
              </label>
            )}
          </div>

          {/* Password input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {error.password && (
              <label className="label text-xs text-red-500">
                {error.password}
              </label>
            )}
          </div>

          {/* Global error */}
          {error.global && (
            <label className="label text-xs text-red-500">{error.global}</label>
          )}

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already Have An Account?{" "}
          <Link className="text-blue-700" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
