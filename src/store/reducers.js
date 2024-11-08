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

}

export default AppContextReducer;