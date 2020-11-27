import React from "react";
import "./Subtotal.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) :<strong>{value}</strong>{" "}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              Tis Order Contains Gift />
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proced to Checkout</button>
    </div>
  );
}
