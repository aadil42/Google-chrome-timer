import CONST from "./CONST";
import Model from "./components/Model";
import GradientDiv from "./components/GradientDiv";
import MainTitle from "./components/MainTitle";
import Button from "./components/Button";

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

          <Button 
            title="btn" 
            styles={{
              display: 'block',
              margin: '20px auto',
              color: '#F24B6A',
              backgroundColor: '#ffffff',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 20px',
              textAlign: 'center',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background-color 0.3s',
              fontWeight: 'bold',            
            }}
          />
        </Model>
       </GradientDiv>
    </div>
  );
}

export default App;
