import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    amount: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayNow = async () => {
    const { name, phone, email, amount } = formData;

    if (!name || !phone || !email || !amount) {
      alert("Please fill all the fields.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(`${baseUrl}/api/create-order/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: parseInt(amount) * 100,
          name,
          phone,
          email,
        }),
      });

      const orderData = await res.json();

      const options = {
        key: "rzp_test_2FS6Jm7237DXfM",
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Paradise Yatra",
        description: "Payment for Tour Package",
        order_id: orderData.id,
        handler: async function (response) {
          await fetch(`${baseUrl}/api/verify-and-save-payment/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              amount: orderData.amount,
              name,
              phone,
              email,
              timestamp: new Date().toISOString(),
            }),
          });

          setLoading(false);
          setSuccess(true);
        },
        prefill: {
          name: name,
          email: email,
          contact: phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-indigo-600 font-semibold cursor-pointer"
        >
          ← Back
        </button>
        {loading && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10 rounded-2xl">
            <div className="text-indigo-700 font-medium animate-pulse">
              Processing Payment...
            </div>
          </div>
        )}

        {success ? (
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/Check animation.gif" // Replace with your actual image path or URL
              alt="Payment Success"
              className="w-[400px] h-[300px] md:w-[400px] md:h-[300px]"
            />
            <div className="text-center text-green-600 font-semibold text-2xl">
              Payment Successful!
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
              Payment Details
            </h2>

            <div className="space-y-4">
              {["name", "phone", "email", "amount"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                    {field === "amount"
                      ? "Amount (₹)"
                      : field.replace("_", " ")}
                  </label>
                  <input
                    type={
                      field === "amount"
                        ? "number"
                        : field === "email"
                        ? "email"
                        : "text"
                    }
                    name={field}
                    placeholder={
                      field === "name"
                        ? "John Doe"
                        : field === "phone"
                        ? "9876543210"
                        : field === "email"
                        ? "you@example.com"
                        : "Enter amount"
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    value={formData[field]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}

              <button
                onClick={handlePayNow}
                className="w-full mt-4 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-200"
              >
                Pay Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
