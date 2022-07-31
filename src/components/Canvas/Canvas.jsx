import React, { useRef } from 'react';
import './Canvas.scss';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import canvasState from '../../store/canvasState';
import toolState from '../../store/toolState';
import Brush from '../../tools/Brush';

export const Canvas = observer( () => {
  const canvasRef = useRef();

  useEffect(()=> {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  const mouseDownHandler = () => {
    canvasState.pushToUndo(canvasRef.current.toDataURL());
  };

  return (
    <div className='canvas'>
      <canvas
      ref={canvasRef} width={600} height={400}
      onMouseDown={() => {mouseDownHandler()}}
      ></canvas>
    </div>
  );
}
)
