import CONST from "./CONST";
import Model from "./components/Model";
import GradientDiv from "./components/GradientDiv";

function App() {

  return (
    <div className="App">
      <Model 
      width={CONST.POP_UP_WINDOW_WIDTH} 
      height={CONST.POP_UP_WINDOW_HEIGHT}
      >
       <GradientDiv 
       gradientColors={[CONST.POP_UP_WINDOW_PRIMARY_BG, CONST.POP_UP_WINDOW_SECONDARY_BG]}
       >
        
       </GradientDiv>
      </Model>
    </div>
  );
}

export default App;
