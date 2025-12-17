import { useEffect, useState } from "react";

export default function FoodItem() {
  const data = [
    {
      product: "Pizza",
      price: "200",
      discountprice: "10",
      category: "Fast Food",
      brand: "Domino's",
      stock: "20",
      productcode: "D123",
      product_image: "Pizza Image",
      description: "Delicious cheese pizza",
    },
    {
      product: "Pizza",
      price: "300",
      discountprice: "13",
      category: "Fast Food",
      brand: "KFC",
      stock: "10",
      productcode: "D1234",
      product_image: "Pizza Image",
      description: "Delicious cheese pizza",
    },
  ];

  const [foodItem, setFoodItem] = useState([]);

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
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="fw-semibold">Product</th>
            <th className="fw-semibold">Price</th>
            <th className="fw-semibold">Discount Price</th>
            <th className="fw-semibold">Category</th>
            <th className="fw-semibold">Brand</th>
            <th className="fw-semibold">Stock</th>
            <th className="fw-semibold">Product Code</th>
            <th className="fw-semibold">Product Image</th>
            <th className="fw-semibold">Description</th>
            <th className="fw-semibold">Action</th>
            <th className="fw-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {foodItem &&
            foodItem.map((item, index) => (
              <tr key={index}>
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
                    alt="Product Image"
                    style={{ width: "20%", height: "20%" }}
                  />
                </td>
                <td>{item.description}</td>
                <td>
                  <button className="w-100 common__btn">Edit</button>
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
    </div>
  );
}
