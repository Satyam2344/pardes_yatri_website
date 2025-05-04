import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PaymentFormTrekkingSection = () => {
  const [searchParams] = useSearchParams();
  const packageData = {
    id: searchParams.get("id"),
    sub_menu: searchParams.get("sub_menu"),
    heading: searchParams.get("heading"),
    price: searchParams.get("price"),
  };
  const navigate = useNavigate();
  //   const location = useLocation();
  //   const packageData = location.state?.packageData;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    amount: "",
    menu: "", // Hidden field
    sub_menu: "",
    package: "",
    preferred_booking_date: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      amount: packageData.price || "0", // Set amount for Razorpay
      sub_menu: packageData.sub_menu || "",
      package: packageData.heading || "",
    }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayNow = async () => {
    const { name, phone, amount, preferred_booking_date } = formData;
    const { sub_menu, heading, price, id } = packageData;

    // Validate required fields
    if (!name || !phone || !preferred_booking_date) {
      alert(
        "Please fill in all required fields like Name, Phone and Preffered Booking Date"
      );
      return;
    }

    // Validate package details
    if (!id || !sub_menu || !heading) {
      alert("Package details are missing. Please go back and try again.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(`${baseUrl}/api/create-order-trekking/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: parseInt(amount) * 100,
          name,
          phone,
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
          await fetch(`${baseUrl}/api/verify-and-save-payment-trekking/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              amount: orderData.amount,
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              id: packageData.id,
              sub_menu: packageData.sub_menu,
              heading: packageData.heading,
              preferred_booking_date: formData.preferred_booking_date,
              timestamp: new Date().toISOString(),
            }),
          });

          setLoading(false);
          setSuccess(true);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
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
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 relative">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-indigo-600 font-semibold cursor-pointer"
        >
          ← Go to Home
        </button>

        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10 rounded-2xl">
            <div className="text-indigo-700 font-medium animate-pulse">
              Processing Payment...
            </div>
          </div>
        )}

        {/* Success Message */}
        {success ? (
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/Check animation.gif"
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
              {/* Hidden Menu Field */}
              <input
                type="hidden"
                name="menu"
                value={packageData.id}
                onChange={handleChange}
              />

              {/* Sub Menu */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sub Menu
                </label>
                <input
                  type="text"
                  name="sub_menu"
                  placeholder="e.g. Honeymoon"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  value={packageData.sub_menu}
                  onChange={handleChange}
                  disabled
                  required
                />
              </div>

              {/* Package */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Package
                </label>
                <input
                  type="text"
                  name="package"
                  placeholder="e.g. Kashmir Delight"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  value={packageData.heading}
                  onChange={handleChange}
                  disabled
                  required
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="9876543210"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount (₹)
                </label>
                <input
                  type="number"
                  name="amount"
                  placeholder={packageData.price}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  value={formData.price}
                  onChange={handleChange}
                  disabled
                  required
                />
              </div>

              {/* Preferred Booking Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Booking Date
                </label>
                <input
                  type="date"
                  name="preferred_booking_date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Pay Button */}
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

export default PaymentFormTrekkingSection;
