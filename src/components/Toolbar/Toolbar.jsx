import React from 'react';
import { SvgBrush } from '../../svg/SvgBrush';
import { SvgCircle } from '../../svg/SvgCircle';
import { SvgEraser } from '../../svg/SvgEraser';
import { SvgLine } from '../../svg/SvgLine';
import { SvgRectangle } from '../../svg/SvgRectangle';
import { SvgSave } from '../../svg/SvgSave';
import { SvgUndo } from '../../svg/SvgUndo';
import './Toolbar.scss';

export const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="margin-right">
        <button className="toolbar__btn brush">
          <SvgBrush />
        </button>
        <button className="toolbar__btn rect">
          <SvgRectangle />
        </button>
        <button className="toolbar__btn circle">
          <SvgCircle />
        </button>
        <button className="toolbar__btn eraser">
          <SvgEraser />
        </button>
        <button className="toolbar__btn line">
          <SvgLine />
        </button>

        <input type="color" />
      </div>
      <div className="margin-left">
        <button className="toolbar__btn undo">
          <SvgUndo />
        </button>
        <button className="toolbar__btn redo">
          <SvgUndo />
        </button>
        <button className="toolbar__btn save">
          <SvgSave />
        </button>
      </div>
    </div>
  );
};
