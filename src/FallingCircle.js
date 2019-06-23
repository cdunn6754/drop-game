import React, { useState } from 'react';

function FallingCircle(props) {

  const [color, setColor] = useState('black');

  const handleMouseDown = () => {
    setColor('blue');
  }

  const handleMouseUp = () => setColor('black');

  const handleMouseMove = () => setColor('green');

  return (
    <div
      className="falling-circle"
      style={{
        top: '30%',//`${props.top}%`,
        backgroundColor: color
      }}
      touch-action="none"
      onPointerDown={ handleMouseDown }
      onPointerUp={ handleMouseUp }
      //onPointerMove={ color==='blue' ? handleMouseMove : null }
    />

  )
}


export default FallingCircle;