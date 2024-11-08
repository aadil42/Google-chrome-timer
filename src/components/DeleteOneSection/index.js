import AlertPopup from "../AlertPopup"
import AppContext from "../../store/context"
import { useContext } from "react"
import CONST from "../../CONST";

const DeleteOneSection = () => {
    const {myAppState, dispatch} = useContext(AppContext);

    const onSecionCloseBtnClick = (targetIdx) => {
        dispatch({
          type: CONST.REDUCER_ACTION_TYPES.DELETE_SECTION,
          payload: {
            targetIdx
          }
        });
    }

    const onYesDeleteSectionClick = () => {

    onSecionCloseBtnClick(myAppState.toBeDeleteSectionIdx);
        // dispatch({
        //   type: CONST.REDUCER_ACTION_TYPES.UPDATE_TO_BE_DELETED_SECTION_IDX,
        //   payload: {
        //     targetIdx: null
        //   }
        // });
    
        dispatch({
          type: CONST.REDUCER_ACTION_TYPES.HIDE_CONFIRM_POPUP_FOR_DELETE_SECTION
        });
    }

    const onNoDeleteSectionClick = () => {
        dispatch({
          type: CONST.REDUCER_ACTION_TYPES.HIDE_CONFIRM_POPUP_FOR_DELETE_SECTION
        });
    }

    return <AlertPopup 
            width={CONST.RESET_CONFIRMATION_WIDTH}
            height={CONST.RESET_CONFIRMATION_HEIGHT}
            color="#ffffff"
            titleColor="#F24B6A"
            message={CONST.RESET_CONFIRMATION_MESSAGE}
            onYes={() => { onYesDeleteSectionClick() }}
            onNo={() => { onNoDeleteSectionClick() }}
    />
}

export default DeleteOneSection;