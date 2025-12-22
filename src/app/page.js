"use client";

import CustomerHeading from "./_component/CustomerHeader";
import Footer from "./_component/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [location, setLocation] = useState([]);

  const getlocationdata = async () => {
    let response = await fetch("http://localhost:3000/api/customer/location");
    response = await response.json();
    console.log(response);

    if (response.success) {
      setLocation(response.result);
    }
  };

  useEffect(() => {
    getlocationdata();
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

        <Footer />
      </div>
    </div>
  );
}
