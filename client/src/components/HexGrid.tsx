import React from "react";
import styled from "styled-components";

const gridsvg = "";

const Grid = styled.div`
  position: absolute;
  width: 50%;
  height: 400%;
  left: -35%;
  top: 0;
  background: linear-gradient(to right, #ffffff00, #ffffff60, #ffffff00);
  transform-origin: right top;
  transform: rotate(45deg);
`;

const GridContainer = styled.div`
  width: 100%;
  height: 100%;

  animation: sweep 6s infinite linear, hue 0.72s infinite linear;

  @keyframes sweep {
    0% {
      transform: translate(0, 0);
      filter: sepia(1) saturate(400%);
    }
    100% {
      transform: translate(800%, 0);
      filter: sepia(1) saturate(400%);
    }
  }

  @keyframes hue {
    0% {
      filter: sepia(1) saturate(400%) hue-rotate(180deg);
    }
    100% {
      filter: sepia(1) saturate(400%) hue-rotate(-180deg);
    }
  }
`;

const GridClip = styled.div`
  width: 100%;
  height: 100%;
  mask: url(/hex-grid.svg#path) 0 0/161.33px 109.67px repeat;
  mix-blend-mode: hard-light;
`;

const HexGrid: React.FC = () => {
  return (
    <>
      <GridClip>
        <GridContainer>
          <Grid />
        </GridContainer>
      </GridClip>
    </>
  );
};

export default HexGrid;
