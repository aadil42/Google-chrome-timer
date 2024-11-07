import React, { useState } from 'react';
import QuaternaryBtn from "../QuaternaryBtn";

function ContainerWithCloseBtn({children, onClose}) {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    position: 'relative'
  };

  const buttonStyle = {
    width: '30px',
    height: '30px',
    position: 'absolute',
    top: '-10px',
    right: '20px',
    background: '#f24b6a',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    display: isHovered ? 'flex' : 'none',
    justifyContent: 'center',
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <QuaternaryBtn 
      title="X"
      clickHandler={() => onClose()} 
      styles={buttonStyle}
      />

      {children}
    </div>
  );
}

export default ContainerWithCloseBtn;
