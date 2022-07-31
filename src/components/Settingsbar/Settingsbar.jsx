import React from 'react';
import toolState from '../../store/toolState';
import './Settingsbar.scss';

export const Settingsbar = () => {
  return (
    <div className='settings-bar'>
      <label htmlFor='line-width' style={{marginLeft: "10px"}}>Толщина линии</label>
      <input
        id='line-width'
        style={{margin: "0 10px"}} 
        type={"number"}
        min={1}
        max={50}
        defaultValue={1}
        onChange={e => toolState.setLineWidth(e.target.value)}
      />
      <label htmlFor="stroke-color" style={{marginLeft: "10px"}}>Толщина линии</label>
      <input
        id="stroke-color" 
        type={"color"}
        style={{margin: "0 10px"}} 
        onChange={e => toolState.setStrokeColor(e.target.value)} 
      />
    </div>
  );
};
