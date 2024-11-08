import CONST from "../CONST";

const AppContextReducer = (state, action) => {
    const {REDUCER_ACTION_TYPES} = CONST;
    console.log("from Reducer", CONST);
    if(action.type === REDUCER_ACTION_TYPES.SHOW_POPUP_FOR_DELETING_ALL_SECTIONS) {
        return {
                ...state, 
                shouldShowPopupForDeletingAllSections: true
            }
    }

    if(action.type === REDUCER_ACTION_TYPES.HIDE_POPUP_FOR_DELETING_ALL_SECTIONS) {
        return {
                ...state, 
                shouldShowPopupForDeletingAllSections: false
            }
    }
    
    if(action.type === REDUCER_ACTION_TYPES.SHOW_CREATE_TIMER_SECTION_INPUT_POPUP) {
        return {
            ...state,
            shouldShowCreateTimerSectionInputPopup: true
        }
    }

    if(action.type === REDUCER_ACTION_TYPES.HIDE_CREATE_TIMER_SECTION_INPUT_POPUP) {
        return {
            ...state,
            shouldShowCreateTimerSectionInputPopup: false
        }
    }

    if(action.type === REDUCER_ACTION_TYPES.SHOW_CONFIRM_POPUP_FOR_DELETE_SECTION) {
        return {
            ...state,
            shouldShowConfirmPopupForDeleteSection: true
        }
    }
    
    if(action.type === REDUCER_ACTION_TYPES.HIDE_CONFIRM_POPUP_FOR_DELETE_SECTION) {
        return {
            ...state,
            shouldShowConfirmPopupForDeleteSection: false
        }
    }
}

export default AppContextReducer;