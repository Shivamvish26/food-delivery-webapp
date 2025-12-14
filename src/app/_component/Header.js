"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [deatils, setDetails] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("Restaurant Data");
    router.push("/restaurant");
  };

  useEffect(() => {
    let data = localStorage.getItem("Restaurant Data");
    if (!data && pathname == "/restaurant/dashboard") {
      router.push("/restaurant");
    } else if (data && pathname == "/restaurant") {
      router.push("/restaurant/dashboard");
    } else {
      setDetails(JSON.parse(data));
    }
  },[]);

  return (
    <div className="shadow-sm py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <img
            style={{ width: 100 }}
            src="https://s.tmimgcdn.com/scr/1200x627/242400/food-delivery-custom-design-logo-template_242462-original.png"
            alt="logo"
          />
        </div>

        <ul className="d-flex gap-4 list-unstyled m-0">
          <li>
            <Link className="text-decoration-none text-dark" href="/">
              Home
            </Link>
          </li>
          {deatils && deatils.name ? (
            <>
              <li>
                <Link className="text-decoration-none text-dark" href="/login">
                  Profile
                </Link>
              </li>
              <li>
                <button className="border-0 bg-white" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link className="text-decoration-none text-dark" href="/restaurant">
                Login / Signup
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
