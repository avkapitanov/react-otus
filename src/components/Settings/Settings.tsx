import React, { ChangeEvent } from 'react';
import './Settings.scss';

export type SettingsType = {
  width: number;
  height: number;
  onChangeWidth: (width: number) => void;
  onChangeHeight: (height: number) => void;
};

export const Settings = (props: SettingsType) => {
  const { width, height, onChangeWidth, onChangeHeight } = props;

  const onChangeWidthHandler = (e: ChangeEvent<HTMLInputElement>) =>
    onChangeWidth(parseInt(e.target.value));

  const onChangeHeightHandler = (e: ChangeEvent<HTMLInputElement>) =>
    onChangeHeight(parseInt(e.target.value));

  return (
    <div className="gol__settings-block settings-block">
      <div className="settings-block__param" data-testid="settings-width">
        <label htmlFor="settings-width">Ширина</label>
        <input
          id="settings-width"
          type="number"
          value={width}
          onChange={onChangeWidthHandler}
        />
      </div>
      <div className="settings-block__param" data-testid="settings-height">
        <label htmlFor="settings-height">Высота</label>
        <input
          id="settings-height"
          type="number"
          value={height}
          onChange={onChangeHeightHandler}
        />
      </div>
    </div>
  );
};
