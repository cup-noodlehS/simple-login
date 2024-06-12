"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const user = JSON.parse(localStorage.getItem("loggedInUser")) || null;
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    console.log(user, "here");
    if (!user) {
      router.push("/");
      return;
    }
    setEmail(user.email);
    setUserName(user.userName);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setCountry(user.country);
  }, []);
  return (
    <div className="w-screen min-h-[calc(100vh-75px)] flex justify-center items-center">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Your Dashboard</h2>
          <div className="flex flex-col gap-3">
            <p>
              <span className="font-bold">Name: </span>
              {lastName + ", " + firstName}
            </p>
            <p>
              <span className="font-bold">Username: </span>
              {userName}
            </p>
            <p>
              <span className="font-bold">Email: </span>
              {email}
            </p>
            <p>
              <span className="font-bold">Country: </span>
              {country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
