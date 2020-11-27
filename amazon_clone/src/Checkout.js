import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="Home__image.jpg" alt="" />
        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout__title">Your shopping Basket is empty</h2>
            <p>
              {" "}
              You have no items in your basket. To buy one or more items, Click
              "Add to basket" next to the items
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title"> Your shopping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
