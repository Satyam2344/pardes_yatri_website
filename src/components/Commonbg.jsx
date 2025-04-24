import React from "react";

export default function Commonbg({ imageUrl }) {
  return (
    <section className="relative w-screen overflow-hidden mt-6">
      <div
        className="w-full h-72 mt-12 sm:h-96 md:h-[600px] lg:h-[500px] xl:h-[400px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
    </section>
  );
}
