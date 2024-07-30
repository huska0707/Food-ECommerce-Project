import React, { useContext } from "react";

import Nav from "../components/header/Nav";
import CartButtons from "../components/cart/CartButtons";
import { context } from "../context/context";
import Admin from "../administrator/administrator";
import EmptyCart from "../components/cart/EmptyCart";

const Cart = () => {
  const contextConsumer = useContext(context);
  const { cart, EmptyCartHandle } = contextConsumer;

  let { line_items } = cart;

  return (
    <>
      <Nav />
      {line_items && line_items.length <= 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex justify-center flex-col my-14 items-center">
          <div className="flex justify-center items-center flex-wrap">
            <CartButtons EmptyCartHandle={EmptyCartHandle} cart={cart} />
          </div>
          <div className="mt-10 -mb-10">
            <Admin />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
