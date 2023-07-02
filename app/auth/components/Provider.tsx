"use client";
import { signIn } from "next-auth/react";

const Provider = () => {
  const handleSubmit = (action: string) => {
    signIn(action, { redirect: false }).then((callback) => {
      if (callback?.error) {
        console.log(callback);
      }
      if (callback?.ok && !callback.error) {
        console.log("success!");
      }
    });
  };
  return (
    <button
      onClick={() => handleSubmit("github")}
      className="bg-black w-full text-white font-semibold p-3 rounded-xl"
    >
      Login with github
    </button>
  );
};

export default Provider;
