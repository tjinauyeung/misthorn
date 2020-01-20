import styled from "styled-components";

export const Bar = styled.div<{ active: boolean }>`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  transform: ${props => (props.active ? "none" : "translateY(100%)")};
  transition: all 150ms ease;
`;

export const Wrapper = styled.div<{ collapsed: boolean }>`
  position: relative;
  max-width: 768px;
  border-top: 1px solid #222;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.collapsed ? "row" : "column")};
  transition: padding 100ms ease-in-out;
  padding-top: ${props => (props.collapsed ? 0 : "25px")};
  padding-bottom: ${props => (props.collapsed ? 0 : "25px")};
  padding-left: 75px;
  padding-right: 75px;
`;

export const Controls = styled.div`
  width: 280px;
  flex: 1 0 50px;
  margin: auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  transition: all 150ms ease;

  &:focus {
    color: #fff;
    outline: none;
  }

  &:hover {
    color: #fff;
  }
`;

export const Minimize = styled.button<{ collapsed: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  color: #666;
  background: none;
  border: none;
  padding: 22px;
  transition: all 100ms ease;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:focus,
  &:active {
    color: #fff;
    outline: none;
  }

  svg {
    transition: all 200ms ease;
    transform: ${props => (props.collapsed ? "rotate(180deg)" : "none")};
  }
`;

export const WaveformWrapper = styled.div<{ collapsed: boolean }>`
  height: 50px;
  /* max-height: ${props => (props.collapsed ? "100px" : "100px")}; */
  width: 320px;
  flex: 1 0 50px;
  margin: auto;
  transition: max-height 200ms ease;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
