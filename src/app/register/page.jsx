"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useDebouncedCallback } from "use-debounce";

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(null);

  const checkPasswordMatch = useDebouncedCallback(() => {
    setPasswordMatch(password === confirmPassword);
  }, 500);

  const disableNext = !email || !password || !confirmPassword || !passwordMatch;

  useEffect(() => {
    if (!password || !confirmPassword) return;
    if (confirmPassword) {
      checkPasswordMatch();
    }
  }, [password, confirmPassword]);

  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");

  const [state, setState] = useState(1);

  return (
    <div className="w-screen min-h-lvh overflow-x-hidden flex justify-center items-center p-3">
      <div className="grow max-w-[400px] rounded-md shadow-md border p-5 flex flex-col gap-3 items-center">
        <h1 className="text-2xl font-bold mt-3">
          {state == 0 ? "Register" : "Set up your account"}
        </h1>
        {state == 0 ? (
          <div className="w-full flex flex-col gap-3">
            <label className={`input input-bordered flex items-center gap-2`}>
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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className="grow"
                placeholder="Email"
              />
            </label>
            <label className={`input input-bordered flex items-center gap-2`}>
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="grow"
                placeholder="password"
              />
            </label>
            <label
              className={`input input-bordered flex items-center gap-2 ${
                passwordMatch == false ? "input-error" : ""
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
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type="password"
                className="grow"
                placeholder="confirm password"
              />
            </label>
            {passwordMatch == false && (
              <p className="text-red-500 text-sm">Passwords do not match</p>
            )}
          </div>
        ) : (
          <div className="w-full flex flex-col gap-3">
            <label className="input input-bordered flex items-center gap-2">
              Username
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="grow"
                placeholder="Daisy20"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              First Name
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="grow"
                placeholder="Daisy"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Last Name
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="grow"
                placeholder="Ms"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Country
              <input
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                className="grow"
                placeholder="US"
              />
            </label>
          </div>
        )}
        {state == 0 ? (
          <button
            onClick={() => {
              setState(1);
            }}
            disabled={disableNext}
            className="w-full grow btn btn-neutral"
          >
            Next
          </button>
        ) : (
          <div className="w-full flex items-stretch justify-end gap-3">
            <button
              onClick={() => {
                setState(0);
              }}
              className="grow btn"
            >
              back
            </button>
            <button className="grow btn btn-neutral">Register</button>
          </div>
        )}
        <div className="flex items-center justify-end">
          <p className="text-sm">Already have an account?</p>
          <Link href={"/"} className="text-sm text-primary ml-1">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
