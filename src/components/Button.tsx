import styled from "styled-components";

interface ButtonProps {
  animate?: boolean;
}

const Button = styled.button<ButtonProps>`
  position: relative;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  background: none;
  min-height: 48px;
  font-weight: bold;
  padding: 8px 16px;

  ${({ animate }) => (animate ? "animation: sliding 4s ease-in-out;" : "")}
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

export default Button;
