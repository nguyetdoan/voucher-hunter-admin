import "@dotlottie/player-component";
import React from "react";

const NotFound = () => {
  return (
    <dotlottie-player
      src="images/network-error.lottie"
      autoplay
      loop
      style={{ width: "90%", maxWidth: "500px", margin: "0 auto" }}
    />
  );
};

export default NotFound;
