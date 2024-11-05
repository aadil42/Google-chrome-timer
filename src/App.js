import CONST from "./CONST";
import Model from "./components/Model";
import GradientDiv from "./components/GradientDiv";
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
        ></Model>
       </GradientDiv>
    </div>
  );
}

export default App;
