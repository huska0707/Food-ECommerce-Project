import React, { useState } from "react";
import Nav from "../components/header/Nav";
import styled from "styled-components";
import AddToCartAlert from "../components/alert/AddToCartAlert";

const Menu = () => {

    const [Modal, setModal] = useState(false)

    return (
    <>
      <Nav />
      { Modal && <AddToCartAlert />}
    </>
  );
};

export default Menu;

const TextStyling = styled.h1`
  font-family: "Cormorant Upright", serif;
`;
