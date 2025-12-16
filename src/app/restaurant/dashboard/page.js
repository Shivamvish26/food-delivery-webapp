"use client";
import Addproduct from "@/app/_component/Addproducts";
import Footer from "@/app/_component/Footer";
import Header from "@/app/_component/Header";
import { useState } from "react";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Header />

      <div className="py-5 mb-5">
        <div className="container">
          <div className="mb-3 d-flex gap-3">
            <button className="common__btn w-25" onClick={() => setShow(true)}>
              Add Product
            </button>
            <button className="common__btn w-25" onClick={() => setShow(false)}>
              Dashboard
            </button>
          </div>

          {show ? <Addproduct /> : <h1>Welcome to dashboard</h1>}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
