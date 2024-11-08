import CONST from "../CONST";

const AppContextReducer = (state, action) => {
    const {REDUCER_ACTION_TYPES} = CONST;
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

    if(action.type === REDUCER_ACTION_TYPES.UPDATE_SELECTED_SECTION_IDX) {
        return {
            ...state,
            selectedSectionIdx: action.payload.targetIdx
        }
    }

    if(action.type === REDUCER_ACTION_TYPES.UPDATE_TO_BE_DELETED_SECTION_IDX) {
        return {
            ...state,
            toBeDeleteSectionIdx: action.payload.targetIdx
        }
    }

    if(action.type === REDUCER_ACTION_TYPES.UPDATE_ENTERED_MINUTES) {
        return {
            ...state, 
            enteredMinutes: action.payload.minutes
        }
    };

    if(action.type === REDUCER_ACTION_TYPES.SHOW_POPUP_FOR_ENTERING_MINUTES) {
        return {
            ...state,
            shouldShowPopUpForEnteringMinutes: true
        }
    }; 

    if(action.type === REDUCER_ACTION_TYPES.HIDE_POPUP_FOR_ENTERING_MINUTES) {
        return {
            ...state,
            shouldShowPopUpForEnteringMinutes: false
        }
    }; 

    if(action.type === REDUCER_ACTION_TYPES.UPDATE_CURRENT_TIMER_END_TIME) {
        return {
            ...state,
            isTimerRunning: action.payload.currentTimerEndTime > Date.now(),
            currentTimerEndTime: action.payload.currentTimerEndTime
        }
    }

    if(action.type === REDUCER_ACTION_TYPES.ADD_TIMER_IN_SECTION) {
        return {
            ...state,
            sections: state.sections.map((section, idx) => {
                if(idx === action.payload.targetIdx) {
                    section.timers.push(state.enteredMinutes);
                }
                return section;
            })
        }
    }

    if(action.type === REDUCER_ACTION_TYPES.DELETE_ALL_SECTIONS) {
        return {
            ...state,
            sections: []
        };
    }

    if(action.type === REDUCER_ACTION_TYPES.ADD_SECTION) {
        if(state.sections) {
            return {
                ...state,
                sections: state.sections.push(action.payload.data)
            }
        }
        return {
            ...state,
            sections: [action.payload.data]
        }
    }

}

export default AppContextReducer;