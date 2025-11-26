"use client";
import React from "react";
import { Building, House, PersonFill, Phone, Key } from "react-bootstrap-icons";

export default function RestaurantSignUp() {
  return (
    <div className="d-flex justify-content-center mt-2">
      <div className="p-4 shadow-sm rounded col-md-5">
        <h3 className="text-center mb-4">Sign Up</h3>

        <form>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <PersonFill />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
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
            />
          </div>

          <div className="text-center mt-3">
            <button className="common__btn">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
