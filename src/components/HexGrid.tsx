import React from "react";
import styled from "styled-components";

const gridsvg = "";

const Grid = styled.div`
  position: absolute;
  width: 50%;
  height: 400%;
  left: -35%;
  top: 0;
  background: linear-gradient(to right, #ffffff00, #ffffff80, #ffffff00);
  transform-origin: right top;
  transform: rotate(45deg);
`;

const GridContainer = styled.div`
  width: 100%;
  height: 100%;

  animation: sweep 6s infinite;

  @keyframes sweep {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(800%, 0);
    }
  }
`;

const GridClip = styled.div`
  width: 100%;
  height: 100%;
`;

const HexGrid: React.FC = () => {
  return (
    <>
      <GridClip>
        <GridContainer>
          <Grid></Grid>
        </GridContainer>
      </GridClip>
    </>
  );
};

export default HexGrid;
