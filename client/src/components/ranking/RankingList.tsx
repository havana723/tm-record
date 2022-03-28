import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
import RankingElement from "./RankingElement";

interface RankingItem {
  rank: number;
  rating: number;
  game: number;
  name: string;
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

interface Props {
  ranking: RankingItem[];
}

const RankingList: React.FC<Props> = (props) => {
  const ranking = props.ranking;
  return (
    <>
      <div style={{ background: "#ebf0f0", overflow: "hidden" }}>
        <div>
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
          {ranking.map((user) => (
            <ScrollAnimation
              offset={50}
              animateIn="fadeInDown"
              animateOut="fadeOut"
            >
              <RankingElement user={user} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
      ;
    </>
  );
};

export default RankingList;
