import styled from "styled-components";

const getDotSize = props => {
  return `
    width: ${props.size ? `${props.size}px` : "10px"};
    height: ${props.size ? `${props.size}px` : "10px"};
    border-radius: ${props.size ? `${props.size}px` : "10px"};
  `;
};

const Loader = styled.div<{ size: number }>`
  ${props => getDotSize(props)}
  position: relative;
  background-color: #222;
  animation: flashing 1s infinite ease-in-out alternate;
  animation-delay: 0.5s;

  &:before,
  &:after {
    ${props => getDotSize(props)}
    animation: flashing 1s infinite ease-in-out alternate;
    background-color: #222;

    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &:before {
    left: -15px;
  }

  &:after {
    left: 15px;
    animation-delay: 1s;
  }

  @keyframes flashing {
    0% {
      background-color: #ddd;
    }
    50%,
    100% {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

export default Loader;
