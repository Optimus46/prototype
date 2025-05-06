import React from "react";
import TeamSection from "./TeamSection";
import about from "../assets/machine.jpg"

const AboutPage = () => {
  return (
    <div className="bg-whitw min-h-screen max-w-7xl mx-auto py-16 px-6 md:px-12">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 py-5">
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center">
          <h4 className="text-blue-600 font-semibold text-lg py-2">Our Vision</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
          At Design Planet, our mission is to revolutionize the digital printing landscape by delivering high-quality, customized print solutions that empower businesses and individuals alike. We aim to blend innovation with precision, offering everything from vibrant marketing materials to bespoke personal prints. Our focus is on sustainable practices, fast turnaround times, and exceptional customer service. By leveraging cutting-edge technology and a passionate team, we strive to make premium printing accessible, affordable, and impactful for everyone.
          </p>
        </div>

        {/* Right: Image */}
        <div className="p-10 w-full overflow-hidden border-yellow-300 flex items-center ">
          <img
            src={about} // make sure this image exists in your public folder
            alt="About us"
            className="min-w-full h-90 md:h-100 object-cover overflow-hidden rounded-xl mx-auto   shadow-lg "
          />
        </div>
      </div>
      <TeamSection/>
    </div>
  );
};

export default AboutPage;



