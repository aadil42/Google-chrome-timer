
import InputPopup from "../InputPopup";
import CONST from "../../CONST";
import AppContext from "../../store/context";
import { useContext } from "react";

const EnterMinutesPopup = () => {

    const {dispatch} = useContext(AppContext);
    
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