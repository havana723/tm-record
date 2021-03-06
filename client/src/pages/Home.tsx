import React from "react";
import { Link } from "react-router-dom";
import Sparkles from "react-sparkle";
import styled from "styled-components";
import Button from "../components/Button";
import { Contents } from "../components/Contents";
import HexGrid from "../components/home/HexGrid";
import Mars from "../components/home/Mars";
import TypewriterWord from "../components/home/TypewriterWord";
import useShadowLightCoordinates from "../hooks/ShadowLightCoordinates";

const Page = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 5vh;
`;

const Main = styled.div`
  color: white;
  padding-right: 32px;
`;

const RecIcon = styled.span`
  display: inline-block;
  margin-right: 8px;

  color: red;
  animation: blink 0.8s alternate infinite;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

function Home() {
  const [shadowX, shadowY] = useShadowLightCoordinates();

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          background: "linear-gradient(to bottom, black, #131933 80%)",
          backgroundSize: "cover",
        }}
      >
        <div
          className="Sparkle"
          style={{
            width: "100%",
            height: "100%",
            transform: `translate(${shadowX * 0.7}em, ${shadowY * 0.7}em)`,
          }}
        >
          <Sparkles
            color={"#a0e0ff"}
            count={70}
            minSize={3}
            maxSize={5}
            fadeOutSpeed={3}
            flicker={false}
            flickerSpeed={"slowest"}
          />
        </div>
        <Mars />
      </div>

      <Page>
        <div
          style={{
            position: "relative",
            border: "2px solid white",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              left: 0,
              top: 0,
              overflow: "hidden",
            }}
          >
            <HexGrid />
          </div>
          <Contents style={{ position: "relative" }}>
            <Main>
              <p>????????? ???????????? ???????????? ?????? ?????????</p>
              <h1>
                <TypewriterWord word="???????????? ?????? ?????? ??????" />
              </h1>
              <Link to="/ranking">
                <a>
                  <Button animate>????????????</Button>
                </a>
              </Link>
            </Main>
          </Contents>
          <small
            style={{
              position: "absolute",
              bottom: 32,
              right: 32,
              color: "white",
              opacity: 0.2,
            }}
          >
            Image by Tumisu on Pixabay.
          </small>
        </div>
        <h3
          style={{
            color: "white",
            position: "absolute",
            right: "9vh",
            top: "7vh",
          }}
        >
          <RecIcon> ??? </RecIcon> CAM 1
        </h3>
      </Page>
    </>
  );
}

export default Home;
