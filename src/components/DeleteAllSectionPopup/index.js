import { useContext } from "react";
import AlertPopup from "../../components/AlertPopup";
import CONST from "../../CONST";
import AppContext from "../../store/context";

const DeleteAllSectionPopup = () => {

    const {dispatch} = useContext(AppContext);
    
    const onYesClick = () =>  {
        // delete everything that is added 
        // hide the alertPopup
        dispatch({
          type: CONST.REDUCER_ACTION_TYPES.DELETE_ALL_SECTIONS
        });
    
        dispatch({
          type: CONST.REDUCER_ACTION_TYPES.HIDE_POPUP_FOR_DELETING_ALL_SECTIONS
        });
    }

    const onNoClick = () => {
        dispatch({
          type: CONST.REDUCER_ACTION_TYPES.HIDE_POPUP_FOR_DELETING_ALL_SECTIONS
        });
    }
      
    return <AlertPopup 
        width={CONST.RESET_CONFIRMATION_WIDTH}
        height={CONST.RESET_CONFIRMATION_HEIGHT}
        color="#ffffff"
        titleColor="#F24B6A"
        message={CONST.RESET_CONFIRMATION_MESSAGE}
        onYes={() => { onYesClick() }}
        onNo={() => { onNoClick() }}
      />
}

export default DeleteAllSectionPopup;