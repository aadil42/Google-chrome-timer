import { useContext } from "react";
import CONST from "../../CONST";
import AppContext from "../../store/context";

import InputPopup from "../InputPopup";

const SectionCreateInputPopup = () => {

    const {dispatch} = useContext(AppContext);

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
        
        dispatch({
          type: CONST.REDUCER_ACTION_TYPES.HIDE_CREATE_TIMER_SECTION_INPUT_POPUP
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

    return <InputPopup 
    message={CONST.CREATE_TIMER_TITLE}
    color="#ffffff"
    titleColor="#F24B6A"
    width={CONST.CREATE_TIMER_TITLE_WIDTH}
    height={CONST.CREATE_TIMER_TITLE_HEIGHT}
    addTimerClickHandler={onCreateTimerAddClick}
    hideInputPopup={onCreateTimerClickOutsidePopup}
    placeholder="Title"
  />;
}

export default SectionCreateInputPopup;