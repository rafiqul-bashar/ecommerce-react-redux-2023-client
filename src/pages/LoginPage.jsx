import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import ShowError from "../components/ui/ShowError";
export default function LoginPage() {
  const [login, { data, isLoading, error: responseError }] = useLoginMutation();
  const [demoLogin, setDemoLogin] = React.useState(false);
  const [email, setEmail] = React.useState("customer@shop.com");
  const [password, setPassword] = React.useState("damasit");
  const [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
    if (responseError?.data) {
      toast.error(responseError.data);
    }
    if (data?.accessToken && data?.user) {
      toast.success("Login Successful.");
    }
  }, [data, responseError, redirect]);

  React.useEffect(() => {
    if (demoLogin) {
      setEmail("admin@shop.com");
      setPassword("adminShop");
    }
  }, [demoLogin]);
  const handleLogin = (e) => {
    e.preventDefault();
    let emailData = email.toLocaleLowerCase();
    login({ email: emailData, password });
    setEmail("customer@shop.com");
    setPassword("damasit");
  };
  // console.log(responseError);
  // if (responseError) return <ShowError />;
  return (
    <div>
      <div className="container md:max-w-3xl mx-auto md:p-24 py-16">
        <form
          onSubmit={handleLogin}
          className="bg-zinc-100 w-full flex flex-col space-y-4 md:p-12 p-6 relative"
        >
          <h2 className="text-center font-bold tracking-wide text-emerald-500 text-3xl ">
            Login
          </h2>{" "}
          <div className="flex flex-col relative"></div>
          <label>Email</label>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="demo@email.com"
            className="bg-slate-200 focus:outline-none py-2 px-4"
          />
          <div className="flex flex-col relative">
            <label>Password</label>
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={showPassword ? "text" : "password"}
              placeholder="*******"
              className="bg-slate-200 focus:outline-none py-2 px-4 z-0"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="z-20 absolute bottom-2  right-2  bg-slate-200 pl-2 "
            >
              {" "}
              {showPassword ? (
                <AiOutlineEyeInvisible className="w-6 h-6 text-slate-800" />
              ) : (
                <AiOutlineEye className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>
          <button
            disabled={isLoading}
            type="submit "
            className="font-semibold w-full bg-slate-900 text-white py-2 "
          >
            Login
          </button>
          <button
            onClick={() => setDemoLogin(true)}
            type="button"
            className="font-semibold w-full border-2 border-slate-900 text-slate-900 py-2 "
          >
            Get Credentials
          </button>
          <Link to="/register">
            New here?{" "}
            <span className="underline font-semibold">Register Now</span>
          </Link>
          {responseError && (
            <p className="text-center text-red-500">
              Oops.. Something Went Wrong!
            </p>
          )}
        </form>
      </div>

      <Toaster />
    </div>
  );
}
