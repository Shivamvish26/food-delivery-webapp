import Link from "next/link";
import React from "react";

export default function Header() {
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
          <li>
            <Link className="text-decoration-none text-dark" href="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none text-dark" href="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
