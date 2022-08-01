import React from 'react';
import canvasState from '../../store/canvasState';
import toolState from '../../store/toolState';
import { SvgBrush } from '../../svg/SvgBrush';
import { SvgCircle } from '../../svg/SvgCircle';
import { SvgEraser } from '../../svg/SvgEraser';
import { SvgLine } from '../../svg/SvgLine';
import { SvgRectangle } from '../../svg/SvgRectangle';
import { SvgSave } from '../../svg/SvgSave';
import { SvgUndo } from '../../svg/SvgUndo';
import Brush from '../../tools/Brush';
import Circle from '../../tools/Circle';
import Eraser from '../../tools/Eraser';
import Line from '../../tools/Line.js';
import Rect from '../../tools/Rect';
import './Toolbar.scss';

export const Toolbar = () => {
  const changeColor = (e) => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
  };

  const download = () => {
    const dataUrl = canvasState.canvas.toDataURL();
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = Date.now() + '.jpg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className="toolbar">
      <div className="margin-right">
        <button className="toolbar__btn brush" onClick={() => {toolState.setTool(new Brush(canvasState.canvas))}}>
          <SvgBrush />
        </button>
        <button className="toolbar__btn rect" onClick={() => {toolState.setTool(new Rect(canvasState.canvas))}}>
          <SvgRectangle />
        </button>
        <button className="toolbar__btn circle" onClick={() => {toolState.setTool(new Circle(canvasState.canvas))}}>
          <SvgCircle />
        </button>
        <button className="toolbar__btn eraser" onClick={() => {toolState.setTool(new Eraser(canvasState.canvas))}}>
          <SvgEraser />
        </button>
        <button className="toolbar__btn line" onClick={() => {toolState.setTool(new Line(canvasState.canvas))}}>
          <SvgLine />
        </button>

        <input type="color" onChange={e => changeColor(e)}/>
      </div>
      <div className="margin-left">
        <button className="toolbar__btn undo" onClick={() => {canvasState.undo()}}>
          <SvgUndo />
        </button>
        <button className="toolbar__btn redo" onClick={() => {canvasState.redo()}}>
          <SvgUndo />
        </button>
        <button className="toolbar__btn save" onClick={download}>
          <SvgSave />
        </button>
      </div>
    </div>
  );
};
