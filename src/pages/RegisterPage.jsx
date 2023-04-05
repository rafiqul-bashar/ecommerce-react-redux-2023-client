import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/features/auth/authApi";
export default function RegisterPage() {
  const [fullName, setFullName] = React.useState("Guest Bhai");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("guest@mail.com");
  const [password, setPassword] = React.useState("damasit");
  const [confirmPassword, setConfirmPassword] = React.useState("damasit");
  const [showPassword, setShowPassword] = React.useState(false);
  const [agreed, setAgreed] = React.useState(false);
  const [register, { data, isLoading, error: responseError }] =
    useRegisterMutation();
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (responseError?.data) {
      toast.error(responseError.data);
    }
    if (data?.accessToken && data?.user) {
      toast.success("Register Successful. Redirecting You.");
      setTimeout(() => {
        navigate("/products");
      }, "2000");
    }
  }, [data, responseError, redirect]);
  // registerBtn
  const handleLogin = (e) => {
    e.preventDefault();
    let emailData = email.toLocaleLowerCase();
    if (fullName | emailData | (password === "")) {
      return;
    }
    if (confirmPassword !== password)
      return toast.error("Password Did Not Matched");
    // console.log({ fullName, emailData, password, address });
    register({
      name: fullName,
      email: emailData,
      password,
      address,
    });
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAddress("");
    setError(null);
  };
  // console.log({ fullName, email, password, confirmPassword });
  return (
    <div>
      <div className="container md:max-w-3xl mx-auto md:p-24 py-10">
        <form
          onSubmit={handleLogin}
          className="bg-zinc-100 w-full flex flex-col space-y-4 md:p-8 p-6 "
        >
          <h2 className="text-center font-bold tracking-wide text-emerald-500 text-3xl ">
            Register
          </h2>
          <p className="text-gray-700 text-sm">
            {" "}
            * Fill all the information to complete the register.
          </p>
          <label>Your Name</label>
          <input
            required
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            placeholder="Enter Full Name"
            className="bg-slate-200 focus:outline-none py-2 px-4"
          />
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
            <label> Enter Password</label>
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
          <div className="flex flex-col relative">
            <label>Confirm Password</label>
            <input
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
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
          <label>Your Address (optional)</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            type="text"
            placeholder="example: house-12,32 street,Bojra State "
            className="bg-slate-200 focus:outline-none py-2 px-4"
          />
          {error && <p className="py-1 text-red-600">{error}</p>}
          <button
            disabled={isLoading}
            type="submit"
            className="w-full bg-slate-900 text-white py-2 font-semibold "
          >
            Register
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                className="h-4 w-4 text-emerald-600 focus:text-emerald-600border-gray-300 rounded"
                checked={agreed}
                required
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label
                htmlFor="accept-terms"
                className="ml-2 block text-sm text-gray-900"
              >
                Agreed with the terms and condition
              </label>
            </div>
          </div>
          <Link to="/login">
            Already Registered??{" "}
            <span className="underline font-semibold">Login Here</span>
          </Link>
        </form>
        <Toaster position="top-center" />
      </div>
    </div>
  );
}
