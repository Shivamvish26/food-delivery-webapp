"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Key, PersonFill } from "react-bootstrap-icons";

export default function RestaurantLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleloginsubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    console.log(email, password);

    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, login: true }),
    });
    response = await response.json();
    console.log(response);
    if (response.success) {
      const { result } = response;
      delete result.password;
      localStorage.setItem("Restaurant Data", JSON.stringify(result));
      alert("Login Successfully");
      router.push("/restaurant/dashboard");
      setEmail("");
      setPassword("");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center mt-2">
      <div className="p-4 shadow-sm rounded col-md-5">
        <h3 className="text-center mb-4">Login Page</h3>

        <form onSubmit={handleloginsubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <PersonFill />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && !email && (
              <span className="text-danger">Enter valid email address</span>
            )}
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <Key />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && !password && (
              <span className="text-danger">Enter valid password</span>
            )}
          </div>

          <div className="text-center mt-3">
            <button className="common__btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
