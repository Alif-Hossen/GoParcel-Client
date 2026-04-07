import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { NavLink, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegistration = (data) => {
    const profileImg = data.photo[0];
    const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

    // ১. Firebase-এ ইউজার ক্রিয়েট করা
    registerUser(data.email, data.password)
      .then((result) => {
        console.log("Firebase User Created:", result.user);

        // ২. ImgBB-তে ইমেজ আপলোড করা
        const formData = new FormData();
        formData.append("image", profileImg);

        axios
          .post(image_API_URL, formData)
          .then((res) => {
            const photoURL = res.data.data.url;

            // ৩. ডাটাবেসে ইউজার ইনফো সেভ করা (axiosSecure ব্যবহার করে)
            const userInfo = {
              name: data.name,
              email: data.email,
              photoURL: photoURL,
              role: "user", // Default role
            };

            axiosSecure.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("User added to database");
              }
            });

            // ৪. Firebase প্রোফাইল আপডেট করা (Display Name & Photo)
            const userProfile = {
              displayName: data.name,
              photoURL: photoURL,
            };

            updateUserProfile(userProfile)
              .then(() => {
                console.log("User Profile Updated Done!");
                const destination =
                  location.state?.from?.pathname || location.state || "/";
                navigate(destination, { replace: true });
              })
              .catch((error) => console.log("Profile Update Error:", error));
          })
          .catch((error) => console.log("Image Upload Error:", error));
      })
      .catch((error) => {
        console.log("Registration Error:", error);
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-10">
      <h3 className="text-3xl text-center font-bold mt-4">
        Welcome To Go Parcel
      </h3>
      <p className="text-center">Please Register</p>

      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* NAME FIELD */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">Name is required.</p>
          )}

          {/* PHOTO FIELD */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input file-input-bordered w-full"
          />
          {errors.photo && (
            <p className="text-red-500 text-xs">Photo is required.</p>
          )}

          {/* EMAIL FIELD */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">Email is required.</p>
          )}

          {/* PASSWORD FIELD */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 text-xs">Password is required.</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-xs">
              Must be at least 6 characters.
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 text-xs">
              Must have Uppercase, Lowercase, Number & Special Character.
            </p>
          )}

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>

        <p className="text-center mt-2">
          Already Have An Account?{" "}
          <NavLink
            state={location.state}
            to="/login"
            className="text-blue-500 font-bold underline"
          >
            Login
          </NavLink>
        </p>
      </form>
      <div className="divider px-8">OR</div>
      <div className="pb-6">
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
