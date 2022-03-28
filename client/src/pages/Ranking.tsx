import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import LeftButton from "../components/ranking/LeftButton";
import LogoImg from "../components/ranking/LogoImg";
import RankingList from "../components/ranking/RankingList";
import RightButton from "../components/ranking/RightButton";
import {
  SeasonButton,
  SeasonButtonSel,
} from "../components/ranking/SeasonButton";
import logo from "../img/logo2.png";

const baseURL = process.env.REACT_APP_API_ENDPOINT;

interface RankingItem {
  rank: number;
  rating: number;
  game: number;
  name: string;
}

interface Season {
  ranking: RankingItem[];
}

interface Seasons {
  seasons: Season[];
}

const SeasonHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
`;

const Ranking = () => {
  const [state, setState] = useState<Seasons | null>(null);
  const [idx, setIdx] = useState<number>(1);

  useEffect(() => {
    axios
      .get<Seasons>("/ranking", { baseURL })
      .then((res) => {
        setState(res.data);
        setIdx(res.data.seasons.length - 1);
      })
      .catch((err) => {
        setState(null);
      });
  }, []);

  return state ? (
    <div style={{ background: "#ebf0f0", overflow: "hidden" }}>
      <div>
        {idx ? (
          <LeftButton onClick={() => setIdx((prevIdx) => prevIdx - 1)}>
            ‹
          </LeftButton>
        ) : null}
        {idx != state.seasons.length - 1 ? (
          <RightButton onClick={() => setIdx((prevIdx) => prevIdx + 1)}>
            ›
          </RightButton>
        ) : null}
        <LogoImg src={logo}></LogoImg>
        <div>
          <h1 style={{ textAlign: "center" }}>개척기록</h1>
        </div>
        <div style={{ height: "30px" }} />
        <SeasonHeader>
          <div style={{ width: "10px" }} />
          {new Array(state.seasons.length)
            .fill(undefined)
            .map((_, i) =>
              idx != i ? (
                <SeasonButton onClick={() => setIdx(() => i)}>
                  Season {i + 1}
                </SeasonButton>
              ) : (
                <SeasonButtonSel onClick={() => setIdx(() => i)}>
                  Season {i + 1}
                </SeasonButtonSel>
              )
            )}
          <div style={{ width: "10px" }} />
        </SeasonHeader>
        <div style={{ height: "30px" }} />
        <div
          style={{
            display: "flex",
            transform: `translateX(calc(${-80 * idx}% - ${20 * idx}px))`,
            transition: "transform 0.5s ease",
          }}
        >
          <div style={{ flex: "0 0 10%" }} />
          {state.seasons.map((s) => (
            <>
              <div style={{ flex: "0 0 10px" }} />
              <RankingList ranking={s.ranking}></RankingList>
              <div style={{ flex: "0 0 10px" }} />
            </>
          ))}
          <div style={{ flex: "0 0 10%" }} />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Ranking;
