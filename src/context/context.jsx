import React from "react";

const context = React.createContext();

const ContextProvider = (props) => {
  return (
    <>
      <context.Provider>{props.children}</context.Provider>
    </>
  );
};

export default ContextProvider;
