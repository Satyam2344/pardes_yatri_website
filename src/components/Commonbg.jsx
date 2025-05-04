import React from "react";

export default function Commonbg({ imageUrl }) {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  return (
    <section className="relative w-screen overflow-hidden">
      {/* Dark top gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-transparent z-10"></div>

      {/* Background Image */}
      <div
        className="w-full h-72 sm:h-96 md:h-[600px] lg:h-[500px] xl:h-[400px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${baseUrl}${imageUrl})`,
        }}
      ></div>
    </section>
  );
}
