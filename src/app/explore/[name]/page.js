"use client";
import CustomerHeading from "@/app/_component/CustomerHeader";
import Footer from "@/app/_component/Footer";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Explore() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [restaurantdata, setRestaurantdata] = useState("");
  const [fooddata, setFooddata] = useState([]);
  const [cartdata, Setcartdata] = useState();

  const name = params.name;
  const id = searchParams.get("id");

  const handledatarestaurant = async () => {
    let response = await fetch(`http://localhost:3000/api/customer/${id}`);
    response = await response.json();
    console.log(response);
    if (response.success) {
      setRestaurantdata(response.deatils);
      setFooddata(response.fooddetails);
    }
  };

  const handlecartdata = (item) => {
    Setcartdata(item);
  };

  useEffect(() => {
    console.log("name:", name);
    console.log("id:", id);
    handledatarestaurant();
  }, []);

  return (
    <div>
      <CustomerHeading Cartdata={cartdata} />
      <div className="hero-banner">
        <div className="input-background d-flex align-items-center justify-content-center">
          <h1 className="text-white">{decodeURI(name)}</h1>
        </div>
      </div>

      <section className="py-3 py-md-5 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="shadow-sm rounded-3 p-3 gap-5 d-flex align-items-center justify-content-center bg-warning flex-wrap">
                <h6 className="mb-0">
                  <b>Contact</b> : {restaurantdata?.contact}
                </h6>
                <h6 className="mb-0">
                  <b>City</b> : {restaurantdata?.city}
                </h6>
                <h6 className="mb-0">
                  <b>Restaurant</b> : {restaurantdata?.restaurant}
                </h6>
                <h6 className="mb-0">
                  <b>Email</b> : {restaurantdata?.email}
                </h6>
              </div>
            </div>

            <div className="col-md-12 mt-4">
              <div className="shadow rounded-3 p-3">
                <table className="table">
                  <thead className="bg-dark text-white">
                    <tr>
                      <th>Product Image</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Discount Price</th>
                      <th>Brand</th>
                      <th>Product Code</th>
                      <th>Description</th>
                      <th>Add to Cart</th>
                    </tr>
                  </thead>

                  <tbody>
                    {fooddata?.length > 0 ? (
                      fooddata.map((item) => (
                        <tr key={item._id}>
                          <td>
                            <img
                              src={item.product_image || "/no-image.png"}
                              alt={item.product_name}
                              style={{
                                width: "80px",
                                height: "60px",
                                objectFit: "cover",
                              }}
                            />
                          </td>
                          <td>{item.product}</td>
                          <td>₹{item.price}</td>
                          <td>₹{item.discountprice}</td>
                          <td>{item.brand}</td>
                          <td>{item.productcode}</td>
                          <td>{item.description}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-primary"
                              onClick={() => handlecartdata(item)}
                            >
                              Add to Cart
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="text-center">
                          No Food Result Found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
