import React from 'react';
import './style.css';

import SecondaryBtn from '../SecondaryBtn';

const InputPopup = ({width, height, message, color, clickHandler, titleColor }) => {
  return (
    <div className="overlay">
      <div
       className="input-popup" 
       style={{ 
        backgroundColor: color,
        width: width,
        height: height 
        }}
       >
        <h3 
         style={{
            color: titleColor
         }}
        >
            {message}
        </h3>
        <input
          type="text"
          placeholder="Title"
          className="input-field"
        />
        <SecondaryBtn 
            title="Add"
            clickHandler={clickHandler}
        />
      </div>
    </div>
  );
};

export default InputPopup;
