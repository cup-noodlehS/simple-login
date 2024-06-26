"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) {
      setErrorMsg("Invalid email or password");
      return;
    } else {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      router.push("/dashboard");
    }
  };

  return (
    <div className="w-screen min-h-lvh overflow-x-hidden flex justify-center items-center p-3">
      <form
        onSubmit={handleLogin}
        className="max-w-[400px] rounded-md shadow-md border p-5 flex flex-col gap-3 items-center"
      >
        {/* <Image src="next.svg" alt="logo" width={100} height={100} /> */}
        <h1 className="text-2xl font-bold mt-3">Welcome back to Dashboard!</h1>
        <div className="w-full flex flex-col gap-3">
          <label
            className={`input input-bordered flex items-center gap-2 ${
              errorMsg ? "input-error" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              onChange={(e) => setEmail(e.target.value.trim().toLowerCase())}
              type="text"
              className="grow"
              placeholder="Email"
            />
          </label>
          <label
            className={`input input-bordered flex items-center gap-2 ${
              errorMsg ? "input-error" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="grow"
              placeholder="password"
            />
          </label>
          {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
        </div>
        <button type="submit" className="w-full btn btn-neutral">
          Login
        </button>
        <div className="flex items-center justify-end">
          <p className="text-sm">Don't have an account?</p>
          <Link href={"/register"} className="text-sm text-primary ml-1">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
