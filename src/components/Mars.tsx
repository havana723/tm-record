import React, { useEffect, useState } from "react";

import tfm from "../img/Terraforming-Mars_1.png";
import useShadowLightCoordinates from "../hooks/ShadowLightCoordinates";

const Mars: React.FC = () => {
    const [shadowX, shadowY] = useShadowLightCoordinates();

    return (
      <>
      <img
          style={{
            position: "absolute",
            bottom: "-15vh",
            right: "-20vw",
            width: "calc(200px + 70vw)",
            transform: `translate(${shadowX * 2}em, ${shadowY * 2}em)`,
          }}
          src={tfm}
          alt="image of mars"
        />
      </>
    );
  };
  
  export default Mars;