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
  return <div>dashboard</div>;
}

export default page;
