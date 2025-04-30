import React from "react";

const AboutPage = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/about-bg.jpg')", // replace with your image path
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">Hi there, Want to know us better?</h2>
          <p className="text-xl text-pink-300">To sum it up…</p>
          <p className="text-xl">We are a group of passionate professionals</p>
          <p className="text-xl">that go miles to provide you the</p>
          <h3 className="text-2xl font-bold">Best Printing Services Possible.</h3>
          <p className="text-lg">Scroll down to know more</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
