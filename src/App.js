import { useState, useEffect, useContext } from "react";
import AppContext from "./store/context";

import CONST from "./CONST";
import Model from "./components/Model";
import GradientDiv from "./components/GradientDiv";
import MainTitle from "./components/MainTitle";
import PrimaryBtn from "./components/PrimaryBtn";
import HorizontalBar from "./components/HorizontalBar";
import AlertPopup from "./components/AlertPopup";
import InputPopup from "./components/InputPopup";
import {localStorageGetData, localStorageSetData} from "./libs/localStorage";
import Section from "./components/Section";
import CurrentRunningTimer from "./components/CurrentRunningTimer";

import "./App.css";

function App() {
  
  const {myAppState, dispatch} = useContext(AppContext);
  const [sections, setSections] = useState(myAppState.sections);
  
  const showEnterTimerPopUp = (targetIdx) => {
    console.log("added adding timer here so its id is", targetIdx);
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.UPDATE_SELECTED_SECTION_IDX,
      payload: {
        targetIdx
      }
    });
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.SHOW_POPUP_FOR_ENTERING_MINUTES
    });
  }
  
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

    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.ADD_TIMER_IN_SECTION,
      payload: {
        targetIdx: myAppState.selectedSectionIdx
      }
    });

    // setSections((sections) => {
    //   return sections.map((section, idx) => {
    //     if(idx === myAppState.selectedSectionIdx) {
    //       section.timers.push(myAppState.enteredMinutes);
    //     }
    //     return section;
    //   });
    // });

  }

  const onResetClick = () => {
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.SHOW_POPUP_FOR_DELETING_ALL_SECTIONS
    });
  }

  const onSecionCloseBtnClick = (targetIdx) => {

    setSections((sections) => {
      return sections.filter((section, idx) => {
        if(idx !== targetIdx) return section;
      });
    });
    
  }

  const onCreateClick = () => {
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.SHOW_CREATE_TIMER_SECTION_INPUT_POPUP
    });
  }

  const onCreateTimerAddMinutes = (minutes) => {
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.UPDATE_ENTERED_MINUTES,
      payload: {
        minutes
      }
    });

    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.HIDE_POPUP_FOR_ENTERING_MINUTES
    });
  }

  const onCreateTimerAddClick = (title) => {

    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.ADD_SECTION,
      payload: {
        data: {
          title,
          timers: []
        }
      }
    });

    // setSections((preSections) => {

    //   if(preSections) {
    //     return [...preSections, {
    //       title: title,
    //       timers: []
    //     }];
    //   }

    //   return [{
    //     title: title,
    //     timers: []
    //   }];

    // });
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.HIDE_CREATE_TIMER_SECTION_INPUT_POPUP
    });
  }

  const showSectionCloseBtnClickWarning = (targetIdx) => {
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.UPDATE_TO_BE_DELETED_SECTION_IDX,
      payload: {
        targetIdx
      }
    });
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.SHOW_CONFIRM_POPUP_FOR_DELETE_SECTION
    });
  }
  
  const onCreateTimerClickOutsidePopup = () => {
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.HIDE_CREATE_TIMER_SECTION_INPUT_POPUP
    });
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.HIDE_POPUP_FOR_ENTERING_MINUTES
    });
  }

  const onCreateTimerClickOutsideAddMinutePopup = () => {
    console.log("coming here");
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.HIDE_POPUP_FOR_ENTERING_MINUTES
    })
  }
  
  const onYesDeleteSectionClick = () => {

    onSecionCloseBtnClick(myAppState.toBeDeleteSectionIdx);
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.UPDATE_TO_BE_DELETED_SECTION_IDX,
      payload: {
        targetIdx: null
      }
    });

    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.HIDE_CONFIRM_POPUP_FOR_DELETE_SECTION
    });
  }

  const onNoDeleteSectionClick = () => {
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.HIDE_CONFIRM_POPUP_FOR_DELETE_SECTION
    });
  }

  const onNoClick = () => {
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.HIDE_POPUP_FOR_DELETING_ALL_SECTIONS
    });
  }

  const onYesClick = () =>  {
    // delete everything that is added 
    // hide the alertPopup
    // setSections(() => {
    //   return [];
    // });
    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.DELETE_ALL_SECTIONS
    });

    dispatch({
      type: CONST.REDUCER_ACTION_TYPES.HIDE_POPUP_FOR_DELETING_ALL_SECTIONS
    });
  }

  // stores the latest data for section in localstorage 
  useEffect(() => {
    localStorageSetData(CONST.LOCAL_STORAGE_SECTIONS_KEY, myAppState.sections);
  }, [myAppState.sections]); 

  // // adds minutes timer
  useEffect(() => {
    onAddTimerInSection(myAppState.enteredMinutes);
  }, [myAppState.enteredMinutes]);

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
            color: 'white',          // Text color
            textAlign: 'center',     // Center the text
            paddingTop: '20px', 
          }}
          />

          {myAppState.isTimerRunning &&           
            <CurrentRunningTimer />
          }

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
            styles={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />

          {myAppState.shouldShowPopupForDeletingAllSections && <AlertPopup 
            width={CONST.RESET_CONFIRMATION_WIDTH}
            height={CONST.RESET_CONFIRMATION_HEIGHT}
            color="#ffffff"
            titleColor="#F24B6A"
            message={CONST.RESET_CONFIRMATION_MESSAGE}
            onYes={() => { onYesClick() }}
            onNo={() => { onNoClick() }}
          />}

          {myAppState.shouldShowCreateTimerSectionInputPopup && <InputPopup 
            message={CONST.CREATE_TIMER_TITLE}
            color="#ffffff"
            titleColor="#F24B6A"
            width={CONST.CREATE_TIMER_TITLE_WIDTH}
            height={CONST.CREATE_TIMER_TITLE_HEIGHT}
            addTimerClickHandler={onCreateTimerAddClick}
            hideInputPopup={onCreateTimerClickOutsidePopup}
            placeholder="Title"
          />}
          

          {myAppState.shouldShowConfirmPopupForDeleteSection && <AlertPopup 
            width={CONST.RESET_CONFIRMATION_WIDTH}
            height={CONST.RESET_CONFIRMATION_HEIGHT}
            color="#ffffff"
            titleColor="#F24B6A"
            message={CONST.RESET_CONFIRMATION_MESSAGE}
            onYes={() => { onYesDeleteSectionClick() }}
            onNo={() => { onNoDeleteSectionClick() }}
          />}

          {myAppState.shouldShowPopUpForEnteringMinutes && <InputPopup 
            message={CONST.CREATE_TIMER_MINUTES_MESSAGE}
            color="#ffffff"
            titleColor="#F24B6A"
            width={CONST.CREATE_TIMER_MINUTES_MESSAGE_WIDTH}
            height={CONST.CREATE_TIMER_MINUTES_MESSAGE_HEIGHT}
            addTimerClickHandler={onCreateTimerAddMinutes}
            hideInputPopup={onCreateTimerClickOutsideAddMinutePopup}
            placeholder="Minutes"
          />}

          {myAppState.sections && myAppState.sections.map((timerData, idx) => {
              return <Section  
                      timerData={timerData} 
                      onCloseClick={() => {showSectionCloseBtnClickWarning(idx)}}
                      sectionId={idx}
                      onAddTimerClick={() => {}}
                      showEnterTimerPopUp={(sectionId) => {showEnterTimerPopUp(sectionId)}}
                    />
            })
          }

        </Model>
       </GradientDiv>
    </div>
  );
}

export default App;
