"use client";
import React from "react";
import { Key, PersonFill } from "react-bootstrap-icons";

export default function RestaurantLogin() {
  return (
    <div className="d-flex justify-content-center mt-2">
      <div className="p-4 shadow-sm rounded col-md-5">
        <h3 className="text-center mb-4">Login Page</h3>

        <form>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <PersonFill />
            </span>
            <input
              type="text"
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

          <div className="text-center mt-3">
            <button className="common__btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
