import React from "react";

const PrivacyPolicySection = () => {
  return (
    <>
      <section className="relative w-screen overflow-hidden">
        <div
          className="w-full h-[500px] sm:h-96 md:h-[500px] lg:h-[500px] xl:h-[600px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/privacy-policy.png')",
          }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/10"></div>
      </section>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex justify-between w-4/5 bg-white shadow-md">
          {/* Left Section (Empty) */}
          <div className="w-[5%]"></div>

          {/* Center Content */}
          <div className="w-[95%] px-8 py-6">
            <h1 className="text-4xl font-bold mb-6 text-center">
              Privacy
            </h1>

            <p className="text-lg mb-4">
              At Paradise Yatra, we are committed to protecting your
              privacy. This Privacy Policy outlines the types of personal
              information we collect and how we use, store, and safeguard that
              information.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              1. Information We Collect
            </h2>
            <p className="text-lg mb-4">
              We collect personal information from you when you visit our
              website, fill out a form, or engage in other activities such as
              subscribing to our newsletter or contacting us for support. The
              information may include:
            </p>
            <ul className="list-disc ml-8 text-lg mb-4">
              <li>
                Personal identification information (name, email address, phone
                number, etc.)
              </li>
              <li>
                Technical information (IP address, browser type, device type,
                etc.)
              </li>
              <li>Payment and transaction details for services purchased</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-lg mb-4">
              We may use the information we collect to:
            </p>
            <ul className="list-disc ml-8 text-lg mb-4">
              <li>Provide and personalize our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Improve the user experience on our website</li>
              <li>Send promotional content or updates (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              3. Data Security
            </h2>
            <p className="text-lg mb-4">
              We use a variety of security measures to maintain the safety of
              your personal information. These measures include encryption,
              secure servers, and regular security audits.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              4. Third-Party Disclosure
            </h2>
            <p className="text-lg mb-4">
              We do not sell, trade, or transfer your personally identifiable
              information to outside parties. We may share information with
              trusted third parties who assist us in operating our website or
              conducting business, but they must agree to keep this information
              confidential.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              5. Changes to the Privacy Policy
            </h2>
            <p className="text-lg mb-4">
              We reserve the right to modify this Privacy Policy at any time.
              Any changes will be posted on this page, and the date of the last
              update will be noted at the top of the policy.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              6. Contact Information
            </h2>
            <p className="text-lg mb-4">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p className="text-lg mb-4">
              Email: sales@paradiseyatra.com
              <br />
              Phone: +91-8979396413
            </p>
          </div>

          {/* Right Section (Empty) */}
          <div className="w-[5%]"></div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicySection;
