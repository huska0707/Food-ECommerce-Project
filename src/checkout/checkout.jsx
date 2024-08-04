import React, { useContext, useState } from "react";
import { context } from "../context/context";

const Checkout = () => {
  const contextConsumer = useContext(context);
  const { Token, cart, refreshCart, setToken } = contextConsumer;
  const steps = ["Shipping Address", "Payment Details"];
  const [currentStep, setCurrentStep] = useState(1);

  const [AddressFormData, setAddressFormData] = useState({
    fname: "",
    lname: "",
    address: "",
    email: "",
    city: "",
    postalCode: "",
    country: "",
    subdivisions: "",
    shippingOption: "",
  });

  const [complete, setComplete] = useState(false);

  return (
    <div className="flex justify-center items-center py-10 ">
      <div className="xl:w-1/2 lg:w-2/3 w-full rounded-sm shadow-lg bg-gray-50">
        {/* -------------------------- */}
        <h1 className="font-mono text-5xl mb-5 mt-10 text-center">Checkout</h1>
        <div className="flex justify-center pt-4 pb-10">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              } `}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? (
                  <i className="fa-solid fa-check"></i>
                ) : (
                  i + 1
                )}
              </div>
              <p className="text-gray-800 font-mono">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
