import { useContext } from "react";
import AlertPopup from "../../components/AlertPopup";
import CONST from "../../CONST";
import AppContext from "../../store/context";

const DeleteClockIconPopup = () => {

    const {myAppState ,dispatch} = useContext(AppContext);
    
    const onYesClick = () =>  {
        console.log('haha on yes');
        dispatch({
            type: CONST.REDUCER_ACTION_TYPES.HIDE_CLOCK_ICON_DELETE_CONFIRMATION
        });
        
        console.log(myAppState.selectedSectionIdx, "sectionIdx");
        console.log(myAppState.toBeDeletedClockId, "deleteClockIdx");
        dispatch({
            type: CONST.REDUCER_ACTION_TYPES.REMOVE_CLOCK_FROM_SECTION,
            payload: {
              sectionIdx: myAppState.selectedSectionIdx,
              clockIdx: myAppState.toBeDeletedClockIdx
            }
        });
    }

    const onNoClick = () => {
        dispatch({
            type: CONST.REDUCER_ACTION_TYPES.HIDE_CLOCK_ICON_DELETE_CONFIRMATION
        });
    }
      
    return <AlertPopup 
        width={CONST.RESET_CONFIRMATION_WIDTH}
        height={CONST.RESET_CONFIRMATION_HEIGHT}
        color="#ffffff"
        titleColor="#F24B6A"
        message={CONST.CLOCK_ICON_DELETE_CONFIRMATION_MESSAGE}
        onYes={() => { onYesClick() }}
        onNo={() => { onNoClick() }}
      />
}

export default DeleteClockIconPopup;