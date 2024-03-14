
import styled from "styled-components";


export const Text = styled.p`
  color: ${({ theme, color }) => color || theme.text};
  font-size: ${({ size }) => size || "16px"};
  font-weight: ${({ weight }) => weight || "regular"};
  width: ${({ width }) => width || "auto"};
  text-align: ${({ align }) => align || "left"};
  line-height: ${({ lineHeight }) => lineHeight || "1.5em"};
  margin: ${({ margin }) => margin || "0"};
  
`;

export const HorizontalDivisor = styled.div`
  width: ${({ width }) => width || "100%"};
  height: 1px;
  background-color: ${({ theme, color }) => color || theme.divisor};
`;

export const VerticalDivisor = styled.div`
  height: ${({ height }) => height || "100%"};
  width: 1px;
  background-color: ${({ theme, color }) => color || theme.divisor};
`;

export const CustomView = styled.div`
  display: ${({ display }) => display || "flex"};
  width: ${({ width }) => width || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "auto"};
  height: ${({ height }) => height || "auto"};
  flex-direction: ${({ direction }) => direction || "column"};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  gap: ${({ gap }) => gap || "0px"};
  padding: ${({ padding, pl = 0, pt = 0, pb = 0, pr = 0 }) =>
    padding || `${pt} ${pr} ${pb} ${pl}`};
  margin-bottom: ${({ mb }) => mb || "0px"};
  margin-top: ${({ mt }) => mt || "0px"};
  flex-wrap: ${({ wrap }) => wrap || "initial"};
  background-color: ${({ bg }) => bg || "transparent"};
  border-radius: ${({ radius }) => radius || "0px"};
  box-sizing: border-box;
`;

export const IconButton = styled.button`
  font-family: inherit;
  border-radius: 100%;
  height: 32px;
  width: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--neutral);
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-400);
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--gray-300);
  }
`;
