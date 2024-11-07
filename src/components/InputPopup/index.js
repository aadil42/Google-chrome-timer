import React, { useRef } from 'react';
import './style.css';

import SecondaryBtn from '../SecondaryBtn';

const InputPopup = ({width, height, message, color, addTimerClickHandler, titleColor, hideInputPopup }) => {

  const popupRef = useRef(null);
  
  const keepOrHideInputPopup = (e) => {
    if(popupRef.current && !popupRef.current.contains(e.target)) {
        hideInputPopup();
    }
  }

  return (
    <div 
        className="overlay" 
        onClick={(e) => {keepOrHideInputPopup(e)}}    
    >
      <div
       ref={popupRef}
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
            clickHandler={addTimerClickHandler}
        />
      </div>
    </div>
  );
};

export default InputPopup;
