import React, { useState } from 'react';
import { Grid } from '@/components/Grid';
import { Settings } from '@/components/Settings';
import './App.scss';

const App = () => {
  const [width, setFieldWidth] = useState(5);
  const [height, setFieldHeight] = useState(5);

  const onChangeWidth = (width: number) => {
    setFieldWidth(width);
  };

  const onChangeHeight = (height: number) => {
    setFieldHeight(height);
  };

  return (
    <>
      <div className="gol">
        <Settings
          width={width}
          height={height}
          onChangeWidth={onChangeWidth}
          onChangeHeight={onChangeHeight}
        ></Settings>
        <Grid width={width} height={height}></Grid>
      </div>
    </>
  );
};

export default App;
