import { useEffect, useContext } from "react";
import AppContext from "./store/context";

import CONST from "./CONST";
import Model from "./components/Model";
import GradientDiv from "./components/GradientDiv";
import MainTitle from "./components/MainTitle";
import {localStorageGetData, localStorageSetData} from "./libs/localStorage";
import Section from "./components/Section";
import SectionCreateInputPopup from "./components/SectionCreateInputPopup";
import EnterMinutesPopup from "./components/EnterMinutesPopup";
import DeleteAllSectionPopup from "./components/DeleteAllSectionPopup";
import DeleteOneSection from "./components/DeleteOneSection";
import HorizontalBarForCreateDeleteSections from "./components/HorizontalBarForCreateAndDeleteSections";
import DeleteClockIconPopup from "./components/DeleteClockIconPopup";

import CurrentRunningTimer from "./components/CurrentRunningTimer";

import "./App.css";

function App() {
  
  const {myAppState, dispatch} = useContext(AppContext);
  
  const onAddTimerInSection = (timer) => {
    if(myAppState.isTimerRunning) return;
    
    localStorageSetData(CONST.CURRENT_TIMER_KEY, Date.now() + (1000 * 60 * timer));
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.UPDATE_CURRENT_TIMER_END_TIME,
      payload: {
        currentTimerEndTime: Date.now() + (1000 * 60 * timer)
      }
    })
  }

  const onTimerComplete = () => {


  }

  // stores the latest data for section in localstorage 
  useEffect(() => {
    localStorageSetData(CONST.LOCAL_STORAGE_SECTIONS_KEY, myAppState.sections);
  }, [myAppState.sections]); 

  // // adds minutes timer
  useEffect(() => {
    onAddTimerInSection(myAppState.currentTimerDetials.enteredMinutes);
  }, [myAppState.currentTimerDetials]);

  return (
    
    <div className="App">
       <GradientDiv 
       gradientColors={[CONST.POP_UP_WINDOW_PRIMARY_BG, CONST.POP_UP_WINDOW_SECONDARY_BG]}
       >
       <Model 
        width={CONST.POP_UP_WINDOW_WIDTH} 
        minHeight={CONST.POP_UP_WINDOW_HEIGHT}
        padding="10px"
        >
          
          <MainTitle 
          title={CONST.MAIN_TITLE} 
          styles={{
            color: 'white',
            textAlign: 'center',
            paddingTop: '20px', 
          }}
          />

          {myAppState.isTimerRunning &&           
            <CurrentRunningTimer />
          }

          <HorizontalBarForCreateDeleteSections />
          
          {myAppState.shouldShowClockIconDeleteConfirmaiton && <DeleteClockIconPopup />}
          {myAppState.shouldShowPopupForDeletingAllSections && <DeleteAllSectionPopup />}
          {myAppState.shouldShowConfirmPopupForDeleteSection && <DeleteOneSection />}
          {myAppState.shouldShowCreateTimerSectionInputPopup && <SectionCreateInputPopup />}
          {myAppState.shouldShowPopUpForEnteringMinutes && <EnterMinutesPopup />}

          {myAppState.sections && myAppState.sections.map((timerData, idx) => {
              return <Section  
                      timerData={timerData} 
                      sectionId={idx}
                    />
            })
          }

        </Model>
       </GradientDiv>
    </div>
  );
}

export default App;
