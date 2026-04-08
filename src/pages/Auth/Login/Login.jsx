import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { NavLink, useLocation, useNavigate } from "react-router-dom"; // "react-router-dom" ব্যবহার করা ভালো
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then(async (result) => {
        const user = result.user;

        // ১. লগইন সফল হওয়া মাত্রই ইউজারকে ড্যাশবোর্ডে পাঠিয়ে দিন (Fast UX)
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });

        // ২. এখন ব্যাকগ্রাউন্ডে বাকি কাজগুলো হবে
        const userInfo = {
          name: user?.displayName || "Anonymous",
          email: user?.email,
          role: "user",
        };

        try {
          // টোকেন জেনারেট এবং লোকাল স্টোরেজে সেভ
          const tokenRes = await axios.post("http://localhost:3000/jwt", {
            email: user?.email,
          });
          if (tokenRes.data.token) {
            localStorage.setItem("access-token", tokenRes.data.token);
          }

          // ডাটাবেসে ইউজার ইনফো সিঙ্ক করা
          await axios.post("http://localhost:3000/users", userInfo);
          console.log("Background processes completed.");
        } catch (err) {
          console.error("Background processing error:", err);
        }
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password!",
        });
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl p-6">
      <h3 className="text-3xl text-center font-bold">Welcome Back</h3>
      <p className="text-center text-gray-500">Please Login</p>

      <form className="card-body p-0 mt-4" onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input input-bordered"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">Email is required</p>
          )}
        </div>

        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 characters required" },
            })}
            className="input input-bordered"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mt-2 text-right">
          <a className="link link-hover text-sm">Forgot password?</a>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-neutral w-full">Login</button>
        </div>

        <p className="text-center mt-4 text-sm">
          New To Go Parcel?{" "}
          <NavLink
            to="/register"
            state={{ from }}
            className="text-blue-500 font-bold underline"
          >
            Register
          </NavLink>
        </p>
      </form>

      <div className="divider">OR</div>
      <SocialLogin />
    </div>
  );
};

export default Login;
