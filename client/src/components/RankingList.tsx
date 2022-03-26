import styled from "styled-components";
import { rankingColor } from "../utils/RankColor";
import { ratingColor } from "../utils/RatingColor";

interface UserContainerProps {
  color?: string;
}

const UserContainer = styled.div<UserContainerProps>`
  border-radius: 5px;
  background: white;
  width: min(80vw, 800px);
  height: 64px;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  margin: 12px auto;
  box-shadow: 3px 3px 5px lightgray;
  &:hover {
    ${({ color }) =>
      color != "inherit"
        ? `border: solid 2px ${color}`
        : "border: solid 2px lightgray"};
    ${({ color }) =>
      color != "inherit"
        ? `box-shadow: 3px 3px 10px -3px ${color}`
        : "box-shadow: 3px 3px 5px lightgray"};
  }
`;

interface UserDivProps {
  flexgrow?: number;
}

const UserDiv = styled.div<UserDivProps>`
  ${({ flexgrow }) => (flexgrow ? `flex: ${flexgrow} 0 0` : "flex: 1 0 0")}
`;

interface RankingItem {
  rank: number;
  rating: number;
  game: number;
  name: string;
}

interface Props {
  user: RankingItem;
}

const RankingList: React.FC<Props> = (props) => {
  const user = props.user;
  return (
    <>
      <UserContainer color={rankingColor(user.rank)}>
        <UserDiv flexgrow={0.5} />
        <UserDiv flexgrow={0.5} style={{ color: rankingColor(user.rank) }}>
          <b>{user.rank}</b>
        </UserDiv>
        <UserDiv flexgrow={2.5}>{user.name}</UserDiv>
        <UserDiv>{user.game}</UserDiv>
        <UserDiv style={{ color: ratingColor(user.rating) }}>
          <b>{user.rating}</b>
        </UserDiv>
      </UserContainer>
    </>
  );
};

export default RankingList;
