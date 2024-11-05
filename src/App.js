import CONST from "./CONST";
import Model from "./components/Model";
import GradientDiv from "./components/GradientDiv";
import MainTitle from "./components/MainTitle";
import PrimaryBtn from "./components/PrimaryBtn";

import "./App.css";

function App() {

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
          <PrimaryBtn 
          title={CONST.PRIMARY_BTN_TITLE}
          />
        </Model>
       </GradientDiv>
    </div>
  );
}

export default App;
