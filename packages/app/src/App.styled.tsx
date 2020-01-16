import styled from "@emotion/styled";

export const Title = styled.h1`
  font-size: 60px;
  margin-top: 100px;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;

export const Song = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: var(--primary);
  }
`;

export const Shadow = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30vh;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent 0%, #000 100%);
`;

export const Thumb = styled.div<{size?: number; src: string}>`
  width: ${props => props.size ? props.size + 'px' : '200px'};
  height: ${props => props.size ? props.size + 'px' : '200px'};
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

export const Body = styled.div`
  padding-left: 50px;
`;

export const List = styled.div`
  margin-bottom: 150px;
`;

export const Player = styled.div<{ active: boolean }>`
  background: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid var(--grey);
  z-index: 4;
  transition: transform 200ms ease-in-out;
  transform: ${props => (props.active ? "none" : "translateY(100%)")};
  display: flex;
  align-items: stretch;
`;

export const Duration = styled.p`
  font-family: monospace;
`;

export const Controls = styled.div`
  box-sizing: content-box;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #222;
  border-right: 1px solid #222;
  margin-right: -1px; /* TODO - remove */
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #fff;

  &:focus {
    outline: none;
  }
`

export const Progress = styled.div`
  appearance: none;
  width: 100%;
  height: 1px;
  background: #222;
  position: relative;
  margin-right: 50px;
`;

export const ProgressBar = styled.div<{ value: number; max: number }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: ${props => props.max / props.value}%;
  background: #fff;

  &:hover:after {
    content: "";
    display: block;
    width: 9px;
    height: 9px;
    background: #fff;
    border-radius: 100%;
    position: absolute;
    right: 0;
    top: 0px;
    transform: translate(50%, -50%);
  }
`;

export const Show = styled.button`
  font-family: monospace;
  color: #fff;
  background: none;
  border: none;
  position: absolute;
  top: 50%;
  left: calc(100% + 20px);
  padding: 20px;
  transform: translateY(-50%);
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const Aside = styled.aside<{ expand: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  background: #fff;
  font-family: monospace;
  padding: 50px 20px;
  width: 200px;
  z-index: 999;
  transform: ${props => (props.expand ? "none" : "translateX(-100%)")};
  transition: transform 400ms cubic-bezier(0.07, 0.7, 0.36, 0.99);
`;

export const Loader = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
`;
