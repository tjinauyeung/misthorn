import styled from "styled-components";

export const Title = styled.h1<{ opacity: number }>`
  font-size: 18px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 30px;
  margin-top: 70px;
  text-align: center;
  margin-bottom: 50px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  right: 0;
  opacity: ${props => props.opacity};
`;

export const Container = styled.div`
  max-width: 900px;
  padding: 20px;
  margin: auto;
`;

export const Shadow = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40vh;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent 0%, #000 100%);
`;

export const List = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const Loader = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
`;

export const Background = styled.div<{ image: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 150px;
  z-index: -1;
  opacity: 0.8;
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  background-image: ${props => (props.image ? `url(${props.image})` : "none")};
  transition: background-image 800ms ease;
`;
