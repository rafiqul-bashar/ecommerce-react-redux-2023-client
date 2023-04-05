import React from "react";
const user = {
  name: "Rafiqul Bashar",
  img: "",
  email: "demo@mail.com",
  address: "22nd bts, Mjadee.",
};
export default function ProfilePage() {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 text-gray-800">
      <div className="max-w-xl mx-auto bg-slate-100 p-12 space-y-4">
        <h2 className="font-semibold text-2xl text-center ">Your Profile</h2>
        <img
          alt={user?.name}
          className="w-16 h-16 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-offset-gray-800 mx-auto"
          src="https://source.unsplash.com/40x40/?portrait?1"
        />
        <div className="flex flex-col gap-2 ">
          <h2 className="font-semibold text-base  capitalize">
            {" "}
            name: {user?.name}
          </h2>
          <h2 className="font-semibold text-base"> Email: {user?.email}</h2>
          <h2 className="font-semibold text-base"> Address: {user?.address}</h2>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-2">
          <button className="w-full py-1 bg-slate-700 text-white">
            Change Password
          </button>
          <button className="w-full py-1 border-2 border-slate-700 text-slate-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
