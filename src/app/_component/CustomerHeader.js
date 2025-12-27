import Link from "next/link";
import { useEffect, useState } from "react";

export default function CustomerHeading(props) {
  const cartStorage = JSON.parse(localStorage.getItem("Cart"));
  const [cartvalue, setCartvalue] = useState(cartStorage?.length);
  const [cartitem, setCartItem] = useState(cartvalue);
  console.log(props);

  useEffect(() => {
    if (props.Cartdata) {
      console.log(props);
      if (cartvalue) {
        if (cartitem[0].resto_id !== props.Cartdata._id) {
          localStorage.removeItem("Cart");
          setCartvalue(1);
          setCartItem([props.Cartdata]);
          localStorage.setItem("Cart", JSON.stringify([props.Cartdata]));
        } else {
          let localCart = cartitem;
          localCart.push(JSON.parse(JSON.stringify(props.Cartdata)));
          setCartItem(localCart);
          setCartvalue(cartvalue + 1);
          localStorage.setItem("Cart", JSON.stringify(localCart));
        }
      } else {
        setCartvalue(1);
        setCartItem([props.Cartdata]);
        localStorage.setItem("Cart", JSON.stringify([props.Cartdata]));
      }
    }
  }, [props.Cartdata]);

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
                {cartvalue ? cartvalue : 0}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
