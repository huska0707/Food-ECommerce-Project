import React, { useEffect, useState } from "react";
import { commerce } from "../lib/commerce";

const context = React.createContext();

const ContextProvider = (props) => {
  const [cart, setCart] = useState({});

  const [Token, setToken] = useState();

  useEffect(() => {
    fetchCart();
  }, []);

  let fetchCart = async () => {
    let response = await commerce.cart.retrieve();
    setCart(response);
  };

  let AddToCart = async (id, quan) => {
    let response = await commerce.cart.add(id, quan);
    setCart(response);
  };

  let UpdateCartQuantity = async (id, quantity) => {
    let response = await commerce.cart.update(id, { quantity });
    setCart(response);
  };

  let refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  return (
    <>
      <context.Provider
        value={{
          cart,
          AddToCart,
          UpdateCartQuantity,
          refreshCart,
        }}
      >
        {props.children}
      </context.Provider>
    </>
  );
};

export { context, ContextProvider };
