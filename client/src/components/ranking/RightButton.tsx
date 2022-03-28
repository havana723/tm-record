import styled from "styled-components";

const RightButton = styled.button`
  position: fixed;
  color: #c1c1c2;
  background: none;
  font-size: 120px;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  padding-right: 4vw;
  right: 0;
  border: none;
  border-radius: 9999px;
  text-shadow: 3px 3px 5px lightgray;
  z-index: 1000000;
`;

export default RightButton;
