import React, { useState, useEffect } from "react";
import axios from "axios";
import first from "../assets/updated/bg.png"; // Ensure your assets are imported correctly
import buk from "../assets/updated/buk.png";
import icon1 from "../assets/updated/icon1.png";
import icon2 from "../assets/updated/icon2.png";
import icon3 from "../assets/updated/icon3.png";
import hline from "../assets/updated/Line 60.png";
import vline from "../assets/updated/Line 62.png";

const LaunchScreen = ({ onNavigate, nftData, setTokenID, }) => {
  const [bookingData, setBookingData] = useState(null);
  const [roomImage, setRoomImage] = useState(null);

  useEffect(() => {
    const fetchBookingData = async () => {
      if (nftData) {
        try {
          const response = await axios.get(
            `https://api.polygon.dassets.xyz/v2/hotel/getNFTBooking?tokenId=${nftData}`
          );
          const data = response.data;
          console.log(data);

          const tokenID = nftData;
          setTokenID(tokenID);


          if (data && data.status === true) {
            setBookingData(data); // Store booking data

            // Find the image with mainImage set to true and set roomImage
            const mainImage = data.data.booking.property.images.find(
              (image) => image.mainImage === true
            );
            if (mainImage) {
              setRoomImage(mainImage.hdUrl); // Set the roomImage to the hdUrl
              
            }
          }
        } catch (error) {
          console.error("Error fetching NFT booking details:", error);
        }
      }
    };

    fetchBookingData();
  }, [nftData]);

  // Add checks to ensure bookingData is not null
  const checkInDate = bookingData?.data?.checkIn
    ? new Date(bookingData.data.checkIn)
    : null;
  const formattedDateCheckIn = checkInDate
    ? `${checkInDate.getDate().toString().padStart(2, "0")}-${(
        checkInDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${checkInDate.getFullYear()}`
    : "";

  const checkOutDate = bookingData?.data?.checkOut
    ? new Date(bookingData.data.checkOut)
    : null;
  const formattedDateCheckOut = checkOutDate
    ? checkOutDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  if (!bookingData) {
    return <div>Loading...</div>; // Show a loading state if data is not yet fetched
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative md:w-[500px] md:h-[500px] sm:h-[350px] sm:w-[350px] bg-[#161616] shadow-lg p-2 flex flex-col items-center">
        <div
          className="relative shadow-lg md:w-[485px] md:h-[230px] sm:h-[160px] sm:w-[335px] p-6 flex flex-col justify-between"
          style={{
            backgroundImage: `url(${roomImage})`, // Use the roomImage state
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="md:ml-[330px] sm:ml-[200px]">
            <img
              src={buk}
              alt=""
              className="md:w-[70px] w-[50px] md:ml-12 sm:ml-[35px]"
            />
            <div className="flex items-center md:mt-[140px] sm:mt-[85px]">
              <span className="text-white md:text-sm sm:text-xs mr-2">
                {bookingData.data.booking.property.stars}
              </span>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`md:text-lg sm:text-md md:mr-1 ${
                      index < bookingData.data.booking.property.stars
                        ? "text-red-600"
                        : "text-gray-500"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:mt-5 sm:mt-3">
            <ul className="list-disc list-inside text-[#FFC4BB] md:text-xs sm:text-[9px]">
              <li>
                <span className="ml-[-6px]">{bookingData.data.bedType}</span>
              </li>
            </ul>
            <h1 className="text-white md:text-lg sm:text-sm mt-1">
              {bookingData.data.booking.property.name}
            </h1>

            <div>
              {/* Adjusted line */}
              <img src={hline} alt="" className="md:mt-4 sm:mt-2" />
              <div className="grid grid-cols-3 mt-3">
                <div className="flex md:w-[60%]">
                  <div className="flex-col flex">
                    <img
                      src={icon1}
                      alt=""
                      className="md:w-8 md:h-8 sm:w-6 sm:h-6"
                    />
                    <p className="md:text-[9px] sm:text-[7px] text-white mt-2">
                      Check In Date
                    </p>
                    <p className="md:text-xs sm:text-[8px] text-[#FFC4BB] md:mt-1">
                      {formattedDateCheckIn}
                    </p>
                  </div>

                  <img
                    src={vline}
                    alt=""
                    className="w-[1.5px] md:h-[73px] sm:h-[50px] ml-7 md:mt-1"
                  />
                </div>

                <div className="flex md:ml-[-35px] sm:ml-[-12px]">
                  <div className="flex-col flex">
                    <img
                      src={icon2}
                      alt=""
                      className="md:w-8 md:h-8 sm:w-6 sm:h-6"
                    />
                    <p className="md:text-[9px] sm:text-[7px] text-white mt-2">
                      Check Out
                    </p>
                    <p className="md:text-xs sm:text-[8px] text-[#FFC4BB] md:mt-1">
                      {formattedDateCheckOut}
                    </p>
                  </div>

                  <img
                    src={vline}
                    alt=""
                    className="w-[1.5px] md:h-[73px] sm:h-[50px] ml-5 md:mt-1"
                  />
                </div>

                <div className="flex md:ml-[-50px] sm:ml-[-10px]">
                  <div className="flex-col flex">
                    <img
                      src={icon3}
                      alt=""
                      className="md:w-8 md:h-8 sm:w-6 sm:h-6"
                    />
                    <p className="md:text-[9px] sm:text-[7px] text-white mt-2">
                      Location
                    </p>
                    <p className="md:text-xs sm:text-[8px] text-[#FFC4BB] md:mt-1">
                      {bookingData.data.booking.property.address.address},{" "}
                      {bookingData.data.booking.property.address.city},{" "}
                      {bookingData.data.booking.property.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center items-center gap-4 md:mt-6 sm:mt-2">
              <button className="text-white bg-[#331D19] border border-[#7B3F26] md:px-9 md:py-2 sm:text-xs sm:px-4 sm:py-1 md:text-[16px] rounded-lg ">
                Hotel Details
              </button>
              <button
                className="text-white bg-[#CA3F2A] border border-[#FFE3E3] md:px-9 md:py-2 sm:text-xs sm:px-4 sm:py-1 md:text-[16px] rounded-lg border-opacity-50"
                onClick={() => onNavigate("stepone", bookingData)}
              >
                Buy Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchScreen;
