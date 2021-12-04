import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Contents } from "./components/Contents";
import Sparkles from "react-sparkle";
import logo from "./logo.svg";
import tfm from "./img/Terraforming-Mars_1.png";
import useShadowLightCoordinates from "./hooks/ShadowLightCoordinates";

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

const Button = styled.button`
  position: relative;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  background: none;
  min-height: 48px;
  font-weight: bold;
  padding: 8px 16px;

  animation: sliding 4s ease-in-out;
  transition: transform 0.3s ease-in-out;

  &::after {
    transition: all 0.3s;
  }

  &::before,
  &::after {
    background: #fff;
    content: "";
    position: absolute;
    z-index: -1;
  }

  &:hover {
    color: #121d3d;
    transform: translate(0, -8px);
  }

  &::after {
    height: 0;
    left: 0;
    top: 0;
    width: 100%;
  }

  &:hover::after {
    height: 100%;
  }

  @keyframes sliding {
    0% {
      transform: translate(0, 200px);
      opacity: 0;
    }
    30% {
      transform: translate(0, 200px);
      opacity: 0;
    }
    70% {
      transform: translate(0, -8px);
      opacity: 1;
    }
    100% {
      transform: translate(0, 0px);
    }
  }
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

const words = "테라포밍 마스 전적 기록";
const wordsub = "화성을 개척하는 쿠안들을 위한 안내서";

function App() {
  const [index, setIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  const [shadowX, shadowY] = useShadowLightCoordinates();

  // typeWriter
  useEffect(() => {
    if (index === words.length + 1) {
      return;
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 50 + Math.floor(Math.random() * 150));

    return () => clearTimeout(timeout);
  }, [index]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

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
      </div>

      <Page>
        <div
          style={{
            border: "2px solid white",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Contents>
            <Main>
              <p>화성을 개척하는 쿠안들을 위한 안내서</p>
              <h1>
                {words.substring(0, index)}
                <span style={{ display: "inline-block", width: 0 }}>
                  {blink ? "|" : ""}
                </span>
              </h1>
              <Button>관측하기</Button>
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
          <RecIcon> ● </RecIcon> CAM 1
        </h3>
      </Page>
    </>
  );
}

export default App;
