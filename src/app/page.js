"use client";

import CustomerHeading from "./_component/CustomerHeader";
import Footer from "./_component/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const data = [
    {
      name: "Shubham",
      email: "Shubham@gmail.com",
      contact: "1234567890",
      restaurant: "Hotel shubam",
      description: "Lorem Ispum",
      city: "pune",
    },
    {
      name: "Sourabh",
      email: "Sourabh@gmail.com",
      contact: "1234567890",
      restaurant: "Hotel Sourabh",
      description: "Lorem Ispum",
      city: "pune",
    },
    {
      name: "Ashish",
      email: "Ashish@gmail.com",
      contact: "1234567890",
      restaurant: "Hotel sourabh",
      description: "Lorem Ispum",
      city: "pune",
    },
    {
      name: "Sanjay",
      email: "Sanjay@gmail.com",
      contact: "1234567890",
      restaurant: "Hotel Sanjay",
      description: "Lorem Ispum",
      city: "pune",
    },
  ];

  const [location, setLocation] = useState([]);
  const [restaurentdata, setRestaurentdata] = useState([]);

  const getlocationdata = async () => {
    let response = await fetch("http://localhost:3000/api/customer/location");
    response = await response.json();
    console.log(response);

    if (response.success) {
      setLocation(response.result);
    }
  };

  const getrestaurantDetails = async () => {
    let result = await fetch("http://localhost:3000//api/customer");
    result = await result.json();
    console.log(result);
    if (result.success) {
      setRestaurentdata(result.result);
    }
  };

  useEffect(() => {
    getlocationdata();
    getrestaurantDetails();
  }, []);

  return (
    <div>
      <div>
        <CustomerHeading />

        {/* Hero Section */}
        <div className="hero-banner">
          <div className="input-background d-flex flex-column align-items-center justify-content-center text-center py-5">
            <h1 className=" text-white">Food Delivery Webapp</h1>

            <div className="d-flex flex-column flex-md-row gap-3 w-75 mt-3 bg-white p-2 rounded-3 shadow-sm">
              <select
                className="form-control border-0 border-end rounded-0 border-dark"
                defaultValue=""
              >
                <option value="" disabled>
                  Select place
                </option>

                {location.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <input
                type="text"
                className="form-control border-0"
                placeholder="Enter Food or restaurant name"
              />

              <button className="common__btn">Search</button>
            </div>
          </div>
        </div>

        <section className="py-3 py-md-5 ">
          <div className="container">
            <div className="row">
              {restaurentdata.map((item, index) => (
                <div className="col-md-4">
                  <div className="card h-100 bg-light">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="medium fw-bold">{item.restaurant}</h5>
                        <h6 className="small">{item.name}</h6>
                      </div>
                      <p>{item.description}</p>
                      <p>{item.city}</p>
                      <p>{item.contact}</p>
                      <p>{item.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
