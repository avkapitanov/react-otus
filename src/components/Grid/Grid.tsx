import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Cell, CellType, Coords } from '@/components/Cell';

export interface GridProps {
  width: number;
  height: number;
  template?: number[][];
}

const aliveCell = {
  isAlive: true,
  isContentVisible: false,
};

const deadCell = {
  isAlive: false,
  isContentVisible: false,
};

export type GridCells = CellType[][];

const generateNewGrid = (
  width: number,
  height: number,
  template?: number[][]
): GridCells => {
  const elements = [];
  let ind = 0;
  for (let i = 0; i < width; i++) {
    const row = [];
    for (let j = 0; j < height; j++) {
      const cell = Object.assign(
        {},
        template && template[i][j] === 0 ? deadCell : aliveCell,
        {
          cellNumber: ++ind,
        }
      ) as CellType;
      row.push(cell);
    }
    elements.push(row);
  }
  return elements;
};

export const Grid: FC<GridProps> = (props) => {
  const { width, height, template } = props;
  const [elements, setElements] = useState(
    generateNewGrid(width, height, template)
  );

  useEffect(() => {
    setElements(generateNewGrid(width, height, template));
  }, [width, height]);

  const onClickHandler = (coords: Coords) => {
    setElements((prevElements) => {
      const newElements = JSON.parse(JSON.stringify(prevElements));
      newElements[coords[0]][coords[1]].isContentVisible =
        !newElements[coords[0]][coords[1]].isContentVisible;
      return newElements;
    });
  };

  return (
    <GridSection size={elements.length} data-testid="grid-section">
      {elements.map((row, y) =>
        row.map((cell, x) => (
          <Cell
            key={`${cell.cellNumber}`}
            {...cell}
            coords={[y, x]}
            onClick={onClickHandler}
          ></Cell>
        ))
      )}
    </GridSection>
  );
};

interface WrapperProps {
  size: number;
}

const GridSection = styled.div<WrapperProps>`
  border: 1px solid #000000;
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, auto);
  width: max-content;
  padding: 1vw;
`;
