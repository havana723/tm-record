import axios from "axios";
import { useEffect, useState } from "react";
import LogoImg from "../components/ranking/LogoImg";
import RankingList from "../components/ranking/RankingList";
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

const Ranking = () => {
  const [state, setState] = useState<Seasons | null>(null);
  const [ids, setIdx] = useState<number>(0);

  useEffect(() => {
    axios
      .get<Seasons>("/ranking", { baseURL })
      .then((res) => {
        setState(res.data);
        setIdx(res.data.seasons.length);
      })
      .catch((err) => {
        setState(null);
      });
  }, []);

  return state ? (
    <div style={{ background: "#ebf0f0", overflow: "hidden" }}>
      <div>
        <LogoImg src={logo}></LogoImg>
        <div>
          <h1 style={{ textAlign: "center" }}>개척기록</h1>
        </div>
        {state.seasons.map((s) => (
          <RankingList ranking={s.ranking}></RankingList>
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Ranking;
