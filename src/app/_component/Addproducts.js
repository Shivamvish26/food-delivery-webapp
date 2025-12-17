import React, { useState } from "react";

export default function Addproduct(props) {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [discountprice, setDiscountprice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState("");
  const [productcode, setProductcode] = useState("");
  const [productimage, setProductimage] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleformsubmit = async (e) => {
    e.preventDefault();
    // console.log(product, price, discountprice, category, brand, stock, productcode, productimage, description);
    if (
      !product ||
      !price ||
      !discountprice ||
      !category ||
      !brand ||
      !stock ||
      !productcode ||
      !productimage ||
      !description
    ) {
      setError(true);
      return false;
    } else {
      setError(false);
    }

    let resto_id;
    const restaurantData = JSON.parse(localStorage.getItem("Restaurant Data"));
    if (restaurantData) {
      resto_id = restaurantData._id;
    }

    let response = await fetch("http://localhost:3000/api/restaurant/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product,
        price,
        discountprice,
        category,
        brand,
        stock,
        productcode,
        product_image: productimage,
        description,
        resto_id,
      }),
    });
    response = await response.json();
    console.log(response);
    if (response.success) {
      alert("Form submitted");
      setProduct("");
      setPrice("");
      setDiscountprice("");
      setCategory("");
      setBrand("");
      setStock("");
      setProductcode("");
      setProductimage("");
      setDescription("");
      props.setShow(false);
    } else {
      alert("Error occured while submitting the form");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="shadow rounded-3 p-4">
          <h2 className="text-start mb-3">Add Product List</h2>
          <form onSubmit={handleformsubmit}>
            <div className="row ">
              <div className="col-md-4">
                <div className="mb-2">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Product Name"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                  />
                  {error && !product && (
                    <span className="text-danger">
                      Please enter proper product name
                    </span>
                  )}
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-2">
                  <label className="form-label">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  {error && !price && (
                    <span className="text-danger">
                      Please enter valid price
                    </span>
                  )}
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-2">
                  <label className="form-label">
                    Discount Price (Optional)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Discount Price"
                    value={discountprice}
                    onChange={(e) => setDiscountprice(e.target.value)}
                  />
                  {error && !discountprice && (
                    <span className="text-danger">
                      Please enter valid discount price
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-4">
                <div className="mb-2">
                  <label className="form-label">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  {error && !category && (
                    <span className="text-danger">
                      Please enter proper category
                    </span>
                  )}
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-2">
                  <label className="form-label">Brand</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                  {error && !brand && (
                    <span className="text-danger">
                      Please enter proper brand
                    </span>
                  )}
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-2">
                  <label className="form-label">Stock / Quantity</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Stock / Quantity"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                  {error && !stock && (
                    <span className="text-danger">
                      Please enter valid /quantity
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-4">
                <div className="mb-2">
                  <label className="form-label">Product Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Product Code"
                    value={productcode}
                    onChange={(e) => setProductcode(e.target.value)}
                  />
                  {error && !productcode && (
                    <span className="text-danger">
                      Please enter proper product code
                    </span>
                  )}
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-2">
                  <label className="form-label">Product Image</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Image Url"
                    value={productimage}
                    onChange={(e) => setProductimage(e.target.value)}
                  />
                  {error && !productimage && (
                    <span className="text-danger">
                      Please enter proper product image url
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="mb-2">
                  <label className="form-label">Description (Optional)</label>
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <button className="common__btn text-decoration-none w-25">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
