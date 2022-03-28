import React from "react";
import useShadowLightCoordinates from "../../hooks/ShadowLightCoordinates";
import tfm from "../../img/Terraforming-Mars_1.png";

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
