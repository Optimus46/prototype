import React from "react";

const Topbar = () => {
  return (
    <div className="w-full bg-[#0b1736] text-white text-xs font-light">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-2">
        <div>📞 +91-1234567890</div>
        <div>
          <a href="mailto:support@designplanet.com" className="hover:underline">
            ✉️ support@designplanet.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
