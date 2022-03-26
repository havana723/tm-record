import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import RankingList from "../components/RankingList";
import ScrollAnimation from "react-animate-on-scroll";
import logo from "../img/logo.png";

interface RankingItem {
  rank: number;
  rating: number;
  game: number;
  name: string;
}

interface Rankings {
  ranking: RankingItem[];
}

const baseURL = process.env.REACT_APP_API_ENDPOINT;

const TitleContainer = styled.div`
  width: min(80vw, 800px);
  height: 64px;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

interface TitleDivProps {
  flexgrow?: number;
}

const TitleDiv = styled.div<TitleDivProps>`
  ${({ flexgrow }) => (flexgrow ? `flex: ${flexgrow} 0 0` : "flex: 1 0 0")}
`;

const Ranking = () => {
  const [state, setState] = useState<Rankings | null>(null);

  useEffect(() => {
    axios
      .get<Rankings>("/ranking", { baseURL })
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        setState(null);
      });
  }, []);

  return state ? (
    <div style={{ background: "#ebf0f0", overflow: "hidden" }}>
      <div>
        <a href="https://github.com/PngWnA/TFM.log">
          <img
            src={logo}
            style={{
              width: "200px",
              margin: "50px auto",
              display: "block",
              borderRadius: "50%",
            }}
          />
        </a>
        <div>
          <h1 style={{ textAlign: "center" }}>개척기록</h1>
        </div>
        <TitleContainer>
          <TitleDiv flexgrow={0.5} />
          <TitleDiv flexgrow={0.5}>
            <b>#</b>
          </TitleDiv>
          <TitleDiv flexgrow={2.5}>
            <b>이름</b>
          </TitleDiv>
          <TitleDiv>
            <b>개척</b>
          </TitleDiv>
          <TitleDiv>
            <b>레이팅</b>
          </TitleDiv>
        </TitleContainer>
        {state.ranking.map((user) => (
          <ScrollAnimation
            offset={50}
            animateIn="fadeInDown"
            animateOut="fadeOut"
          >
            <RankingList user={user} />
          </ScrollAnimation>
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Ranking;
