import React, { useContext, useState } from "react";
import { context } from "../context/context";
import { Link } from "react-router-dom";
import AddressForm from "./address-form/AddressForm";

const Checkout = () => {
  const contextConsumer = useContext(context);
  const { Token, cart, refreshCart, setToken } = contextConsumer;
  const steps = ["Shipping Address", "Payment Details"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

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

  const { fname, lname, address, email, city, postalCode, country } =
    AddressFormData;

  let enableButton =
    fname && lname && address && email && city && postalCode && country;

  const NextBtnHandle = () => {
    setCurrentStep((prev) => prev + 1);
  };

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

        <AddressForm
          Token={Token}
          AddressFormData={AddressFormData}
          setAddressFormData={setAddressFormData}
        />
        
        {!complete && currentStep !== steps.length && (
          <div className="w-full md:flex-row flex-col-reverse flex md:justify-between justify-center items-center px-5 md:h-[100px] h-[150px]">
            <Link
              to={"/cart"}
              className="px-12 py-2 text-gray-50 bg-blue-900 hover:bg-blue-800  text-xl border border-yel rounded-md font-mono md:mt-0 mt-5"
            >
              Go Back To Cart
            </Link>
            <button
              className="px-12 py-2 text-gray-50 bg-blue-900 hover:bg-blue-800  text-xl border border-yel rounded-md font-mono disabled:bg-blue-800 disabled:cursor-not-allowed "
              onClick={NextBtnHandle}
              disabled={!enableButton}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
