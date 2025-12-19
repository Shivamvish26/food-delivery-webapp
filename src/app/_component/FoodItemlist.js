"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FoodItem() {
  const [foodItem, setFoodItem] = useState([]);
  const router = useRouter();

  const Itemfoodload = async () => {
    const restaurantData = JSON.parse(localStorage.getItem("Restaurant Data"));
    const resto_id = restaurantData._id;

    let response = await fetch(
      `http://localhost:3000/api/restaurant/food/${resto_id}`
    );
    response = await response.json();

    if (response.success) {
      setFoodItem(response.result);
    } else {
      alert("Error while loading food items");
    }
  };

  const deleteFoodItem = async (id) => {
    let response = await fetch(
      `http://localhost:3000/api/restaurant/food/${id}`,
      {
        method: "DELETE",
      }
    );
    response = await response.json();

    if (response.success) {
      Itemfoodload();
    } else {
      alert("Error while deleting food item");
    }
  };

  useEffect(() => {
    Itemfoodload();
  }, []);

  return (
    <div>
      <h1>Food Item list</h1>

      {foodItem.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Discount Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Stock</th>
              <th>Product Code</th>
              <th>Product Image</th>
              <th>Description</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {foodItem.map((item) => (
              <tr key={item._id}>
                <td>{item.product}</td>
                <td>{item.price}</td>
                <td>{item.discountprice}</td>
                <td>{item.category}</td>
                <td>{item.brand}</td>
                <td>{item.stock}</td>
                <td>{item.productcode}</td>
                <td>
                  <img
                    src={item.product_image}
                    alt="Product"
                    style={{ width: "60px" }}
                  />
                </td>
                <td>{item.description}</td>
                <td>
                  <button
                    className="w-100 common__btn"
                    onClick={() => router.push("dashboard/" + item._id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="w-100 common__btn"
                    onClick={() => deleteFoodItem(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Food Item Found</p>
      )}
    </div>
  );
}
