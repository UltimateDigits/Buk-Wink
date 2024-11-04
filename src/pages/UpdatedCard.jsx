import React, { useState } from "react";
import LaunchScreen from "../components/LaunchScreen";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import SucessConfirmation from "../components/SucessConfirmation";
import TokenId from "../components/TokenId";

const UpdatedCard = () => {
  const [currentPage, setCurrentPage] = useState("tokenid");
  const [nftData, setNftData] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [Data, setData] = useState(null)
  const [totalPrice, setTotalPrice] = useState(null);
  const [tokenID, setTokenID] = useState(null);
  const [Image, setImage] = useState(null)
 
  

  const handleNavigation = (nextPage, data = null) => {
    if (nextPage === "launch" && data) {
      setNftData(data); // Set the nftData for LaunchScreen
    } else if (data) {
      setBookingData(data); // Pass bookingData for StepOne
    }
    setCurrentPage(nextPage);
  };


  return (
    <div>
      {currentPage === "tokenid" && (
        <TokenId
          onNavigate={(nextPage, data) => handleNavigation(nextPage, data)}
        />
      )}
      {currentPage === "launch" && (
        <LaunchScreen
          onNavigate={(nextPage, data) => handleNavigation(nextPage, data)}
          nftData={nftData}
          setTokenID={setTokenID}
        />
      )}
      {currentPage === "stepone" && (
        <StepOne
          nftData={nftData}
          bookingData={bookingData}
          onNavigate={() => handleNavigation("steptwo")}
          onBack={() => handleNavigation("launch")}
          setData={setData}
        />
      )}
      {currentPage === "steptwo" && (
        <StepTwo
          nftData={nftData}
          bookingData={Data}
          onNavigate={() => handleNavigation("stepthree")}
          onBack={() => handleNavigation("stepone")}
          setTotalPrice={setTotalPrice}
        />
      )}
      {currentPage === "stepthree" && (
        <StepThree
          nftData={nftData}
          bookingData={bookingData}
          onNavigate={() => handleNavigation("success")}
          onBack={() => handleNavigation("steptwo")}
          totalPrice={totalPrice}
          tokenID={tokenID}
        />
      )}
      {currentPage === "success" && (
        <SucessConfirmation
          onNavigate={() => handleNavigation("launch")}
          tokenID={tokenID}
        />
      )}
    </div>
  );
};

export default UpdatedCard;
