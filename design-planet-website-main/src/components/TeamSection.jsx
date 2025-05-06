// src/components/TeamSection.jsx
import React from "react";

const teamMembers = [
  {
    name: "Sandeep Kumar",
    title: "Co-Founder",
    image: "/dlogo.png", // Use actual paths
  },
  {
    name: "Ashutosh K Akhouri",
    title: "Co-Founder",
    image: "/about-bg.jpg",
  },
  {
    name: "Mitesh Jain",
    title: "CTO",
    image: "/vite.svg",
  },
  {
    name: "Mitesh Jain",
    title: "CTO",
    image: "/vite.svg",
  },
  {
    name: "Mitesh Jain",
    title: "CTO",
    image: "/vite.svg",
  },
  {
    name: "Mitesh Jain",
    title: "CTO",
    image: "/vite.svg",
  },
];

const TeamSection = () => {
  return (
    <div className="bg-white py-12 max-w-7xl mx-auto mt-10">
      <h2 className="text-4xl font-bold text-center text-gray-800">Meet Our Team</h2>
      <p className="text-center text-gray-600 mt-2 mb-8 px-4">
        Discover our dynamic team – a blend of passion, diverse skills, and innovation.
      </p>
      <div className="flex overflow-x-auto space-x-6 px-6 scrollbar-hide">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex-shrink-0 w-64 text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-48 mx-auto rounded-lg object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
