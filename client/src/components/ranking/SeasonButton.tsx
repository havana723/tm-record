import styled from "styled-components";

export const SeasonButton = styled.button`
  color: gray;
  background: none;
  border: 1px solid gray;
  border-radius: 9999px;
  padding: 10px 20px;
  font-weight: bold;
  font: inherit;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 3px 3px 5px lightgray;
  }
`;

export const SeasonButtonSel = styled(SeasonButton)`
  color: white;
  background: gray;
`;
