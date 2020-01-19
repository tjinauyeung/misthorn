import styled from "styled-components";

export const Controls = styled.div`
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 100ms ease;
`;

export const Card = styled.div<{ active: boolean }>`
  font-family: ${props => props.theme.typography.fontFamily};
  color: ${props => props.theme.colors.text};
  padding: 30px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 100ms ease;

  &:hover {
    color: #fff;
  }

  &:hover ${Controls} {
    opacity: 1;
  }
`;

export const NowPlaying = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
`;

export const Artist = styled.h1`
  font-size: 14px;
  color: ${props => props.theme.colors.textDark};
  font-weight: 400;
`;

export const Name = styled.h2`
  font-weight: 300;
  font-size: 22px;
  letter-spacing: 1px;
  margin: 0;
`;

export const ThumbWrapper = styled.div`
  position: relative;
`;

export const Thumb = styled.div<{ size?: number; src: string }>`
  width: ${props => (props.size ? props.size + "px" : "150px")};
  height: ${props => (props.size ? props.size + "px" : "150px")};
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

export const Body = styled.div`
  padding-left: 30px;
`;

export const Duration = styled.p`
  font-family: monospace;
  color: ${props => props.theme.colors.textDark};
`;

export const TimePlaying = styled.span`
  font-weight: 400;
`;
