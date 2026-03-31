import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { NavLink, useLocation, useNavigate, Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

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

  // Login.jsx এর ভেতর

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;

        // ১. প্রথমে সার্ভার থেকে JWT টোকেন নিয়ে আসা
        const userInfo = {
          name: user?.displayName || "Anonymous",
          email: user?.email,
          role: "user", // ডিফল্ট রোল
        };

        // ২. টোকেন পাওয়ার জন্য /jwt এপিআই কল করা
        axios
          .post("http://localhost:3000/jwt", { email: user?.email })
          .then((res) => {
            if (res.data.token) {
              // **টোকেনটি সেভ করা হচ্ছে**
              localStorage.setItem("access-token", res.data.token);

              // ৩. টোকেন সেভ হওয়ার পর ইউজারকে ডাটাবেসে সেভ করা (যদি না থাকে)
              axios
                .post("http://localhost:3000/users", userInfo)
                .then((dbRes) => {
                  console.log("User process complete", dbRes.data);

                  // ৪. সবশেষে ড্যাশবোর্ডে পাঠানো
                  // এখানে 'from' ভেরিয়েবলটি ব্যবহার করা ভালো
                  navigate(from, { replace: true });
                });
            }
          });
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
        // এখানে ইউজারকে একটি এরর মেসেজ (যেমন: Swal বা Toast) দেখাতে পারেন
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-3xl text-center font-bold">Welcome Back</h3>
      <p className="text-center">Please Login</p>

      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          {/* EMAIL FIELD */}
          <label className="label">Email</label>

          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />

          {errors.email?.type === "required" && (
            <p className="text-red-500"> Email Is Required </p>
          )}

          {/* PASSWORD FIELD  */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />

          {errors.password?.type === "required" && (
            <p className="text red-500"> Password Is Required To Login </p>
          )}

          {errors.password?.type === "minlength" && (
            <p> Password Should At Least 6 Character. </p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>

        <p>
          {" "}
          New To Go Parcel?{" "}
          <NavLink
            state={location.state}
            to="/register"
            className="text-blue-500 font-bold underline"
          >
            register
          </NavLink>{" "}
        </p>
      </form>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
