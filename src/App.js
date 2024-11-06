import { useState } from "react";

import CONST from "./CONST";
import Model from "./components/Model";
import GradientDiv from "./components/GradientDiv";
import MainTitle from "./components/MainTitle";
import PrimaryBtn from "./components/PrimaryBtn";
import HorizontalBar from "./components/HorizontalBar";
import AlertPopup from "./components/AlertPopup";

import "./App.css";

function App() {
  
  const [shouldShowPopup, setShouldShowPopup] = useState(false);

  const onResetClick = () => {
    // alert("Are you sure you wanna reset?");
    setShouldShowPopup(true);
  }

  const onCreateClick = () => {
    alert("Lets create!!");
  }

  const onNoClick = () => {
    setShouldShowPopup(false);
  }

  const onYesClick = () =>  {
    // delete everything that is added 
    // hide the alertPopup
    setShouldShowPopup(false);
  }

  return (
    <div className="App">
       <GradientDiv 
       gradientColors={[CONST.POP_UP_WINDOW_PRIMARY_BG, CONST.POP_UP_WINDOW_SECONDARY_BG]}
       >
       <Model 
        width={CONST.POP_UP_WINDOW_WIDTH} 
        height={CONST.POP_UP_WINDOW_HEIGHT}
        >
          <MainTitle 
          title={CONST.MAIN_TITLE} 
          styles={{
            color: 'white',          // Text color
            textAlign: 'center',     // Center the text
            paddingTop: '20px', 
          }}
          />

          <HorizontalBar 
            components={[
              <PrimaryBtn 
              title={CONST.PRIMARY_BTN_CREATE_TIMER}
              clickHandler={onCreateClick}
              />,
              <PrimaryBtn
              title={CONST.PRIMARY_BTN_RESET_TIMER}
              clickHandler={onResetClick}
              />
            ]}
          />

          {shouldShowPopup && <AlertPopup 
            width={CONST.RESET_CONFIRMATION_WIDTH}
            height={CONST.RESET_CONFIRMATION_HEIGHT}
            color="#ffffff"
            message={CONST.RESET_CONFIRMATION_MESSAGE}
            onYes={() => { onYesClick() }}
            onNo={() => { onNoClick() }}
          />}

        </Model>
       </GradientDiv>
    </div>
  );
}

export default App;
