
import InputPopup from "../InputPopup";
import CONST from "../../CONST";
import AppContext from "../../store/context";
import { useContext } from "react";
import localStorageSetData from "../../libs/localStorage/localStorageSetData";
import setListenerForBackgroundScript from "../../libs/backgroundUtils/setListenerForBackgroundScript";

const EnterMinutesPopup = () => {

    const {myAppState ,dispatch} = useContext(AppContext);
    
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

        // store data locally so it persists.
        localStorageSetData(CONST.SELECTED_SECTION_IDX_KEY, myAppState.selectedSectionIdx);


        setListenerForBackgroundScript();
      }
    
      const onCreateTimerClickOutsideAddMinutePopup = () => {
        console.log("coming here");
        dispatch({
          type: CONST.REDUCER_ACTION_TYPES.HIDE_POPUP_FOR_ENTERING_MINUTES
        })
      }
      
    return <InputPopup 
        message={CONST.CREATE_TIMER_MINUTES_MESSAGE}
        color="#ffffff"
        titleColor="#F24B6A"
        width={CONST.CREATE_TIMER_MINUTES_MESSAGE_WIDTH}
        height={CONST.CREATE_TIMER_MINUTES_MESSAGE_HEIGHT}
        addTimerClickHandler={onCreateTimerAddMinutes}
        hideInputPopup={onCreateTimerClickOutsideAddMinutePopup}
        placeholder="Minutes"
      />
};


export default EnterMinutesPopup;