"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Building, House, PersonFill, Phone, Key } from "react-bootstrap-icons";

export default function RestaurantSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_password] = useState("");
  const [city, setCity] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleregister = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        city,
        restaurant,
        contact,
      }),
    });
    response = await response.json();
    console.log(response);
    if (response.success) {
      alert("Registration Successfully");
      const { result } = response;
      delete result.password;
      localStorage.setItem("Restaurant Data", JSON.stringify(result));
      router.push("/restaurant/dashboard");
      setName("");
      setEmail("");
      setPassword("");
      setC_password("");
      setCity("");
      setRestaurant("");
      setContact("");
    } else {
      alert("Failed to Register");
    }
  };

  return (
    <div className="d-flex justify-content-center mt-2">
      <div className="p-4 shadow-sm rounded col-md-5">
        <h3 className="text-center mb-4">Sign Up</h3>

        <form onSubmit={handleregister}>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <PersonFill />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <Key />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={c_password}
              onChange={(e) => setC_password(e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <House />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <Building />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Restaurant Name"
              value={restaurant}
              onChange={(e) => setRestaurant(e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <Phone />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Contact No."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div className="text-center mt-3">
            <button type="submit" className="common__btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
