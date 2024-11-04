import React, { useState, useEffect } from "react";
import axios from "axios";
import first from "../assets/updated/bg.png";
import buk from "../assets/updated/buk.png";
import step from "../assets/updated/step.png";
import step1 from "../assets/updated/step1.png";
import arrow from "../assets/updated/arrow.png";
import { id } from "ethers";

const StepOne = ({ bookingData, onNavigate, onBack, setData, nftData }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
   const [propertyId, setPropertyId] = useState("");
   const [userInfo, setUserInfo] = useState("");
   const [checkIn, setCheckIn] = useState("");
   const [checkOut, setCheckOut] = useState("");
  const [roomImage, setRoomImage] = useState(null)

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
           

           if (data && data.status === true) {
            

             // Find the image with mainImage set to true and set roomImage
             const mainImage = data.data.booking.property.images.find(
               (image) => image.mainImage === true
             );
             if (mainImage) {
               setRoomImage(mainImage.hdUrl); // Set the roomImage to the hdUrl
               console.log(roomImage)
             }
           }
         } catch (error) {
           console.error("Error fetching NFT booking details:", error);
         }
       }
     };

     fetchBookingData();
   }, [nftData]);

   useEffect(() => {
     // Set initial values from bookingData
     if (bookingData) {
       setPropertyId(bookingData?.data.booking.property?._id || "");
       setUserInfo(bookingData?.data.userInfo || "");
       setCheckIn(formatDate(bookingData?.data.checkIn)); // Format check-in date
       setCheckOut(formatDate(bookingData?.data.checkOut)); // Format check-out date
     }
   }, [bookingData]);
  console.log(bookingData);
  const formatDate = (dateString) => {
    if (!dateString) return ""; // Return empty if no date is provided
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Get YYYY-MM-DD format
  };

   const fetchHotelData = async () => {
     const occupancyDetails = encodeURIComponent(
       JSON.stringify([{ paxes: [{ age: 21 }, { age: 20 }] }])
     );
     const url = `https://api.polygon.dassets.xyz/v2/hotel/getHotel?id=${propertyId}&occupancyDetails=${occupancyDetails}&checkIn=${checkIn}&checkOut=${checkOut}`;

     try {
       const response = await axios.get(url);
       console.log("Hotel data:", response.data);
       setData(response.data)
      //console.log(Data)
       
       // Handle or set the hotel data in state if needed
     } catch (error) {
       console.error("Error fetching hotel data:", error);
     }
   };

   useEffect(() => {
    console.log(checkIn,checkOut, propertyId, userInfo)
     if (propertyId && checkIn && checkOut) {
       fetchHotelData();
     }
   }, [propertyId, checkIn, checkOut]);

  // Function to validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to validate phone number (10-digit)
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  // Function to handle the Next button click
  const handleNext = () => {
    let isValid = true;

    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate phone number
    if (!validatePhone(phone)) {
      setPhoneError("Invalid phone number (10 digits required)");
      isValid = false;
    } else {
      setPhoneError("");
    }

    // Proceed if all inputs are valid
    if (isValid) {
      fetchHotelData();
      onNavigate();
    }
  };

  // Handle key press for phone number input
  const handlePhoneKeyPress = (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative md:w-[500px] md:h-[500px] sm:h-[350px] sm:w-[350px] bg-[#161616] shadow-lg p-2 flex flex-col items-center">
        <div
          className="relative shadow-lg md:w-[485px] md:h-[230px] sm:h-[160px] sm:w-[335px] p-6 flex flex-col justify-between"
          style={{
            backgroundImage: `url(${roomImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="md:ml-[330px] sm:ml-[200px]">
            <img
              src={buk}
              alt="buk"
              className="md:w-[70px] w-[50px] md:ml-12 sm:ml-[35px]"
            />
          </div>

          {/* Content */}
          <div className="md:mt-48 sm:mt-32">
            <div className="flex">
              <div className="flex ml-[-15px]">
                <div className="text-white flex">
                  <img
                    src={step}
                    alt="step 1"
                    className="md:w-7 md:h-7 sm:w-5 sm:h-5"
                  />
                  <p className="md:text-xs sm:text-[10px] md:mt-2 sm:mt-1 md:ml-3 sm:ml-2">
                    Step 1
                  </p>
                </div>
                <div className="bg-[#CA3F2A] h-[0.5px] md:w-[90px] sm:w-[50px] md:mt-4 sm:mt-3 md:ml-3 sm:ml-2"></div>
              </div>

              {/* Progress indicators */}
              <div className="flex ml-2">
                <div className="text-white flex">
                  <img
                    src={step1}
                    alt="step 2"
                    className="md:w-7 md:h-7 sm:w-5 sm:h-5"
                  />
                  <p className="md:text-xs sm:text-[10px] md:mt-2 sm:mt-1 md:ml-3 sm:ml-2 text-[#B1B1B1]">
                    Step 2
                  </p>
                </div>
                <div className="bg-[#CA3F2A] h-[0.5px] md:w-[90px] sm:w-[50px] md:mt-4 sm:mt-3 md:ml-3 sm:ml-2"></div>
              </div>

              <div className="flex ml-2">
                <div className="text-white flex">
                  <img
                    src={step1}
                    alt="step 3"
                    className="md:w-7 md:h-7 sm:w-5 sm:h-5"
                  />
                  <p className="md:text-xs sm:text-[10px] md:mt-2 sm:mt-1 md:ml-3 sm:ml-2 text-[#B1B1B1]">
                    Step 3
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex flex-col items-center md:mt-10 sm:mt-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="border border-[#373737] bg-[#222222] sm:text-xs md:text-md rounded-md md:p-2 md:py-2 sm:py-1 mb-2 w-[70%] max-w-[400px] focus:outline-none focus:ring-[0.5px] focus:ring-[#FFCACA] text-white text-center"
              />
              {emailError && <p className="text-red-500">{emailError}</p>}

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onKeyDown={handlePhoneKeyPress}
                placeholder="Mobile number"
                className="border border-[#373737] bg-[#222222] sm:text-xs md:text-md rounded-md md:p-2 md:py-2 sm:py-1 mb-2 w-[70%] max-w-[400px] focus:outline-none focus:ring-[0.5px] focus:ring-[#FFCACA] text-white text-center"
              />
              {phoneError && <p className="text-red-500">{phoneError}</p>}

              <div className="flex w-full sm:mt-2 md:mt-2 items-center justify-center">
                <img
                  src={arrow}
                  alt="arrow"
                  className="md:w-9 md:h-9 sm:w-6 sm:h-6 mr-4 cursor-pointer"
                  onClick={onBack}
                />
                <button
                  className="bg-[#CA3F2A] sm:text-xs text-white md:px-[110px] sm:px-[68px] md:py-1 sm:py-1 rounded-md md:text-lg border-[#FFE3E3] border border-opacity-50"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
