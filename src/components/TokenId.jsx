import React, { useState } from "react";
import buk from "../assets/updated/buk.png";
import axios from "axios";

const TokenId = ({ onNavigate }) => {
  const [nftId, setNftId] = useState("");
  const [error, setError] = useState(null);

  // Function to handle the submission
  // TokenId Component
  const handleSubmit = async () => {
    if (nftId.trim() === "") {
      setError("Please enter a valid NFT ID.");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.polygon.dassets.xyz/v2/hotel/getNFTBooking?tokenId=${nftId}`
      );

      const data = response.data;
      if (data && data.status === true) {
        // Pass the nftId data
        onNavigate("launch", nftId);
      } else {
        setError("NFT booking details not found");
      }
    } catch (err) {
      setError("NFT booking details not found");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative md:w-[500px] md:h-[500px] sm:h-[350px] sm:w-[350px] bg-[#161616] shadow-lg p-2 flex flex-col items-center justify-center">
        <div className="relative w-full flex flex-col items-center justify-between">
          <div>
            <img src={buk} alt="buk" className="md:w-[90px] w-[60px]" />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center justify-center w-full">
            {/* Form */}
            <div className="flex flex-col items-center justify-center md:mt-10 sm:mt-6 border border-[#FFC4BB] shadow-lg md:py-20 sm:py-4 rounded-lg w-[90%]">
              <label className="text-[#FFC4BB] md:text-md sm:text-xs md:mb-3 sm:mb-2">
                Enter NFT ID
              </label>
              <input
                type="text"
                value={nftId}
                onChange={(e) => {
                  setNftId(e.target.value);
                  setError(null); // Clear error on change
                }}
                placeholder="Enter NFT ID"
                className="border border-[#373737] bg-[#222222] sm:text-xs md:text-md rounded-md md:p-2 sm:py-1 mb-4 w-[80%] max-w-[400px] focus:outline-none focus:ring-[0.5px] focus:ring-[#FFCACA] text-white text-center"
              />
              <div className="flex w-full justify-center">
                <button
                  className="bg-[#CA3F2A] sm:text-xs text-white md:px-[145px] sm:px-[60px] md:py-1 sm:py-1 rounded-md md:text-lg border-[#FFE3E3] border border-opacity-50"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>

              {/* Display error message if any */}
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenId;
