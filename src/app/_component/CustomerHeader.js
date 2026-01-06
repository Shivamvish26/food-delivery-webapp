import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function CustomerHeading(props) {
  const [cartvalue, setCartvalue] = useState(0);
  const [cartitem, setCartItem] = useState([]);

  useEffect(() => {
    const cartStorage = JSON.parse(localStorage.getItem("Cart")) || [];
    setCartItem(cartStorage);
    setCartvalue(cartStorage.length);
  }, []);

  useEffect(() => {
    if (!props.Cartdata) return;

    let localCart = JSON.parse(localStorage.getItem("Cart")) || [];

    if (localCart.length > 0) {
      if (localCart[0].resto_id !== props.Cartdata.resto_id) {
        const newCart = [props.Cartdata];
        setCartItem(newCart);
        setCartvalue(1);
        localStorage.setItem("Cart", JSON.stringify(newCart));
      } else {
        const updatedCart = [...localCart, props.Cartdata];
        setCartItem(updatedCart);
        setCartvalue(updatedCart.length);
        localStorage.setItem("Cart", JSON.stringify(updatedCart));
      }
    } else {
      const newCart = [props.Cartdata];
      setCartItem(newCart);
      setCartvalue(1);
      localStorage.setItem("Cart", JSON.stringify(newCart));
    }
  }, [props.Cartdata]);

  useEffect(() => {
    if (!props.removeCartData) return;

    const localCartItem = cartitem.filter(
      (item) => item._id !== props.removeCartData
    );

    setCartItem(localCartItem);
    setCartvalue(localCartItem.length);
    localStorage.setItem("Cart", JSON.stringify(localCartItem));

    if (localCartItem.length === 0) {
      localStorage.removeItem("Cart");
    }
  }, [props.removeCartData]);

  return (
    <div className="shadow-sm py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <img
            style={{ width: 100 }}
            src="https://s.tmimgcdn.com/scr/1200x627/242400/food-delivery-custom-design-logo-template_242462-original.png"
            alt="logo"
          />
        </div>

        <ul className="d-flex gap-4 list-unstyled m-0">
          <li>
            <Link className="text-decoration-none text-dark" href="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="text-decoration-none text-dark" href="#">
              Login
            </Link>
          </li>

          <li>
            <Link className="text-decoration-none text-dark" href="#">
              Restaurant Login
            </Link>
          </li>

          <li className="position-relative">
            <Link
              className="text-decoration-none text-dark position-relative"
              href="#"
            >
              <i className="bi bi-cart fs-5"></i>

              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartvalue}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
