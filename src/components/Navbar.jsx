"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("loggedInUser")));
    console.log("rerendered");
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    router.push("/");
  };

  return (
    <nav className="h-[75px] w-screen flex justify-between items-center py-5 px-8 shadow-md">
      <h1 className="text-2xl font-bold">Dashboard App</h1>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <div className="flex gap-3 items-center">
          <Link href="/">Login</Link>
          <Link href="/register">Sign up</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
