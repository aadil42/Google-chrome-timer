import { useState, useEffect } from "react";

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
import Scrollable from "./components/Scrollable";
import CurrentRunningTimer from "./components/CurrentRunningTimer";

import "./App.css";

function App() {
  
  const [shouldShowPopup, setShouldShowPopup] = useState(false);
  const [shouldShowCreateTimerInputPopup, setShouldShowCreateTimerInputPopup] = useState(false);
  const [shouldShowConfirmSectionDeletePopup, setShouldShowConfirmSectionDeletePopup] = useState(false);
  const [sectionToBeDeletedId, setSectionToBeDeletedId] = useState(null);
  const previouselyAddedSections = localStorageGetData(CONST.LOCAL_STORAGE_SECTIONS_KEY);
  const [sections, setSections] = useState(previouselyAddedSections);
  const [enteredMinutes, setEnteredMinutes] = useState(0);
  const [ShouldShowEnterTimerMinutesPopup, setShouldShowEnterTimerMinutesPopup] = useState(false);
  const [selectedSectionIdx, setSelectedSectionId] = useState(null);
  const [currentTimerEndTime, setCurrentTimerEndTime] = useState(localStorageGetData(CONST.CURRENT_TIMER_KEY));
  const isTimerRunning = currentTimerEndTime > Date.now();
  
  const showEnterTimerPopUp = (targetIdx) => {
    setSelectedSectionId(targetIdx);
    setShouldShowEnterTimerMinutesPopup(true);
  }
  
  const onAddTimerInSection = (timer) => {
    if(isTimerRunning) return;

    console.log(timer, 'this should add');
    
    localStorageSetData(CONST.CURRENT_TIMER_KEY, Date.now() + (1000 * 60 * timer));
    setCurrentTimerEndTime(Date.now() + (1000 * 60 * timer));
  }

  const onTimerComplete = () => {
    setSections((sections) => {
      return sections.map((section, idx) => {
        if(idx === selectedSectionIdx) {
          section.timers.push(enteredMinutes);
        }
        return section;
      });
    });
  }

  const onResetClick = () => {
    // alert("Are you sure you wanna reset?");
    setShouldShowPopup(true);
  }

  const onSecionCloseBtnClick = (targetIdx) => {

    setSections((sections) => {
      return sections.filter((section, idx) => {
        if(idx !== targetIdx) return section;
      });
    });
    
  }

  const onCreateClick = () => {
    setShouldShowCreateTimerInputPopup(true);
  }

  const onCreateTimerAddMinutes = (minutes) => {
    setEnteredMinutes(minutes);
    setShouldShowEnterTimerMinutesPopup(false);
  }

  const onCreateTimerAddClick = (title) => {
    setSections((preSections) => {

      if(preSections) {
        return [...preSections, {
          title: title,
          timers: []
        }];
      }

      return [{
        title: title,
        timers: []
      }];

    });

    setShouldShowCreateTimerInputPopup(false);
  }

  const showSectionCloseBtnClickWarning = (targetIdx) => {
    setSectionToBeDeletedId(targetIdx);
    setShouldShowConfirmSectionDeletePopup(true);
  }
  
  const onCreateTimerClickOutsidePopup = () => {
    setShouldShowEnterTimerMinutesPopup(false);
  }

  const onCreateTimerClickOutsideAddMinutePopup = () => {
    console.log("coming here");
    setShouldShowEnterTimerMinutesPopup(false);
  }
  
  const onYesDeleteSectionClick = () => {
    onSecionCloseBtnClick(sectionToBeDeletedId);
    setSectionToBeDeletedId(null);
    setShouldShowConfirmSectionDeletePopup(false);
  }

  const onNoDeleteSectionClick = () => {
    setShouldShowConfirmSectionDeletePopup(false);
  }

  const onNoClick = () => {
    setShouldShowPopup(false);
  }

  const onYesClick = () =>  {
    // delete everything that is added 
    // hide the alertPopup
    setSections(() => {
      return [];
    });
    setShouldShowPopup(false);
  }

  // stores the latest data for section in localstorage 
  useEffect(() => {
    localStorageSetData(CONST.LOCAL_STORAGE_SECTIONS_KEY, sections);
  }, [sections]); 

  // // adds minutes timer
  useEffect(() => {
    onAddTimerInSection(enteredMinutes);
  }, [enteredMinutes]);

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

          {isTimerRunning &&           
            <CurrentRunningTimer 
            endTime={currentTimerEndTime}
            onTimerComplete={onTimerComplete}
            />
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

          {shouldShowPopup && <AlertPopup 
            width={CONST.RESET_CONFIRMATION_WIDTH}
            height={CONST.RESET_CONFIRMATION_HEIGHT}
            color="#ffffff"
            titleColor="#F24B6A"
            message={CONST.RESET_CONFIRMATION_MESSAGE}
            onYes={() => { onYesClick() }}
            onNo={() => { onNoClick() }}
          />}

          {shouldShowCreateTimerInputPopup && <InputPopup 
            message={CONST.CREATE_TIMER_TITLE}
            color="#ffffff"
            titleColor="#F24B6A"
            width={CONST.CREATE_TIMER_TITLE_WIDTH}
            height={CONST.CREATE_TIMER_TITLE_HEIGHT}
            addTimerClickHandler={onCreateTimerAddClick}
            hideInputPopup={onCreateTimerClickOutsidePopup}
            placeholder="Title"
          />}
          

          {shouldShowConfirmSectionDeletePopup && <AlertPopup 
            width={CONST.RESET_CONFIRMATION_WIDTH}
            height={CONST.RESET_CONFIRMATION_HEIGHT}
            color="#ffffff"
            titleColor="#F24B6A"
            message={CONST.RESET_CONFIRMATION_MESSAGE}
            onYes={() => { onYesDeleteSectionClick() }}
            onNo={() => { onNoDeleteSectionClick() }}
          />}

          {ShouldShowEnterTimerMinutesPopup && <InputPopup 
            message={CONST.CREATE_TIMER_MINUTES_MESSAGE}
            color="#ffffff"
            titleColor="#F24B6A"
            width={CONST.CREATE_TIMER_MINUTES_MESSAGE_WIDTH}
            height={CONST.CREATE_TIMER_MINUTES_MESSAGE_HEIGHT}
            addTimerClickHandler={onCreateTimerAddMinutes}
            hideInputPopup={onCreateTimerClickOutsideAddMinutePopup}
            placeholder="Minutes"
          />}

          {sections && sections.map((timerData, idx) => {
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
