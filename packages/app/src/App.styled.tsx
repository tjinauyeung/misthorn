import styled from "styled-components";

type TitleProps = { transparency: number; blur: number };
export const Title = styled.h1.attrs((props: TitleProps) => ({
  style: {
    filter: `blur(${props.blur}px)`,
    opacity: props.transparency
  }
}))`
  font-size: 20px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 32px;
  margin-top: 70px;
  text-align: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  right: 0;

  @media screen and (max-width: 425px) {
    margin-top: 60px;
    font-size: 14px;
    letter-spacing: 20px;
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  padding: 0 20px;
  margin: auto;

  @media screen and (min-width: 768px) {
    padding: 0 60px;
  }
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
  margin-top: 120px;
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

  @media screen and (max-width: 425px) {
    display: none;
  }
`;
