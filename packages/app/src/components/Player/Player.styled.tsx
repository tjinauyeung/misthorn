import styled from "styled-components";

export const Bar = styled.div<{ active: boolean }>`
  background: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  border-top: ${props => `1px solid ${props.theme.colors.border}`};
  z-index: 4;
  display: flex;
  align-items: stretch;
  transform: ${props => (props.active ? "none" : "translateY(100%)")};
  transition: all 150ms ease;
`;

export const Controls = styled.div`
  box-sizing: content-box;
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #222;
  cursor: pointer;
  transition: all 150ms ease;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #fff;
  }
`;
