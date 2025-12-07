"use client";
import React, { useState } from "react";
import RestaurantLogin from "../_component/RestaurantLogin";
import RestaurantSignUp from "../_component/RestaurantSignUp";
import Footer from "../_component/Footer";
import Header from "../_component/Header";

export default function Restaurant() {
  const [login, setLogin] = useState(true);

  return (
    <>
      <Header />
      <div className="container-fluid text-center mt-2 mb-4 pb-5">
        <h1 className="mt-3">Food Delivery Web App</h1>

        {login ? <RestaurantLogin /> : <RestaurantSignUp />}

        <button
          className="border-0 bg-transparent text-primary mt-3"
          onClick={() => setLogin(!login)}
        >
          {login
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </button>
      </div>
      <Footer />
    </>
  );
}
