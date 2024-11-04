import React, { useState } from "react";
import { BrowserProvider } from "ethers";

const WalletConnect = () => {
    const [signature, setSignature] = useState("");
    const [error, setError] = useState("");
    const [isConnecting, setIsConnecting] = useState(false);
    const [loginToken, setLoginToken] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const getLoginMessage = (timestamp) => {
        return `Signature for login authentication: ${timestamp}`;
    };

    const handleAuth = async (address, signature, timestamp) => {
      try {
        const response = await fetch(
          "https://api.polygon.dassets.xyz/auth/user/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: address,
              loginToken: timestamp,
              signature: signature,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Authentication failed");
        }

        const data = await response.json();
        const jwt = data.data.accessToken;
        console.log('====================================');
        console.log("signer res", data);
        console.log('====================================');

        if (!jwt) {
          throw new Error("JWT not found in the response");
        }

        // Store token in localStorage under "accessToken"
        localStorage.setItem("accessToken", jwt);
        setIsAuthenticated(true);

        return data;
      } catch (err) {
        console.error("Authentication error:", err);
        throw new Error(err.message || "Authentication failed");
      }
    };


    const connectAndSign = async () => {
        setIsConnecting(true);
        setError("");
        setSignature("");
        setLoginToken("");

        try {
            if (!window.ethereum) {
                throw new Error("MetaMask is not installed!");
            }

            // Create provider and request accounts
            const provider = new BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts", []);

            // Get signer and address
            const signer = await provider.getSigner();
            const address = await signer.getAddress();
            setWalletAddress(address);

            // Create unix timestamp for login token
            const timestamp = Date.now();
            setLoginToken(timestamp.toString());

            // Sign message with timestamp
            const message = getLoginMessage(timestamp);
            const signedMessage = await signer.signMessage(message);
            setSignature(signedMessage);

            // Authenticate with the server
            await handleAuth(address, signedMessage, timestamp);
        } catch (err) {
            console.error("Error:", err);
            setError(err instanceof Error ? err.message : "Unknown error occurred");
            setIsAuthenticated(false);
        } finally {
            setIsConnecting(false);
        }
    };

    const shortenAddress = (address) => {
        if (!address) return "";
        return `${address.substring(0, 6)}...${address.substring(
            address.length - 4
        )}`;
    };

    return (

        <div className="w-[70%] max-w-[400px]"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <button className=" mb-2 p-1"
                onClick={connectAndSign}
                disabled={isConnecting}
                style={{
                    // padding: "10px 20px",
                    // fontSize: "16px",
                    borderRadius: "6px",
                    border: "none",
                    backgroundColor: isAuthenticated ? "#ddd" : "#CA3F2A",
                    color: isAuthenticated ? "#000000" : "#fff",
                    cursor: isConnecting ? "not-allowed" : "pointer",
                    // marginBottom: "15px",
                    width: "100%",
                }}
            >
                {isConnecting
                    ? "Connecting..."
                    : isAuthenticated
                        ? "Connected"
                        : walletAddress
                            ? "Sign Again"
                            : "Connect Wallet"}
            </button>

        </div>
    );
};

export default WalletConnect;