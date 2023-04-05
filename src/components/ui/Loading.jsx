import React from "react";
import { TailSpin } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="h-[60vh] flex flex-col gap-8 mx-auto max-w-lg justify-center items-center">
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <h2 className="text-2xl animate-pulse tracking-widest">Loading ...</h2>
    </div>
  );
}
