"use client";
import CustomerHeading from "@/app/_component/CustomerHeader";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Explore() {
  const params = useParams();
  const name = params.name;
  const id = params.id;
  const [restaurantlist, setRestaurantList] = useState("");
  const [fooddeatils, setFoodDetails] = useState("")

  const handlefetchdata = async ()=>{
    console.log(id)

    
    // let response = fetch('http://localhost:3000/api/customer/6945373afe80f35825a0c01e')
  }

  useEffect(() => {
    handlefetchdata();
  }, []);

  return (
    <div>
      <CustomerHeading />
      {/* Hero Section */}
      <div className="hero-banner">
        <div className="input-background d-flex flex-column align-items-center justify-content-center text-center py-5">
          <h1 className=" text-white">{decodeURI(name)}</h1>
        </div>
      </div>
    </div>
  );
}
