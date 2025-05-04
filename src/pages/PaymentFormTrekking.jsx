import React from "react";
import { useLocation } from "react-router-dom";
import PaymentFormTrekkingSection from "../components/PaymentFormTrekkingSection";

const PaymentFormTrekking = () => {
  const location = useLocation();
  const packageData = location.state?.packageData;

  return (
    <div>
      <PaymentFormTrekkingSection packageData={packageData} />
    </div>
  );
};

export default PaymentFormTrekking;
