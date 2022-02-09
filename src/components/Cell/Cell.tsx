import React, { FC } from 'react';
import styled from '@emotion/styled';

export type Coords = [number, number];

export type CellType = {
  coords: Coords;
  cellNumber?: number;
  isAlive: boolean;
  isContentVisible?: boolean;
};

export interface CellProps extends CellType {
  onClick: (coords: Coords) => void;
}

export const Cell: FC<CellProps> = (props: CellProps) => {
  const { onClick, isAlive, cellNumber, isContentVisible, coords } = props;

  const onClickHandler = () => onClick(coords);

  return (
    <>
      {isAlive ? (
        <Alive data-testid="cell-alive" onClick={onClickHandler}>
          {isContentVisible ? cellNumber : ''}
        </Alive>
      ) : (
        <Dead data-testid="cell-dead"></Dead>
      )}
    </>
  );
};

const Alive = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #000000;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 128, 0, 0.3);
  cursor: pointer;
`;

const Dead = styled(Alive)`
  background: rgba(255, 0, 0, 0.3);
`;
