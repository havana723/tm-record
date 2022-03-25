import styled from "styled-components";

interface ButtonProps {
  animate?: boolean;
}

const Button = styled.button<ButtonProps>`
  position: relative;
  color: white;
  border: 1px solid white;
  background: none;
  min-height: 48px;
  font-weight: bold;
  padding: 8px 16px;
  overflow: visible;

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
    inset: -1px;
    z-index: -1;
    transform: scaleY(0);
  }

  &:hover {
    color: #121d3d;
    transform: translate(0, -8px);
  }

  &::after {
    transform-origin: top;
  }

  &:hover::after {
    transform: scaleY(1);
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
