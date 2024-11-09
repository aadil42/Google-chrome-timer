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
            currentTimerDetials: {
                ...state.currentTimerDetials,
                enteredMinutes: action.payload.minutes
            }
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
                    section.timers.push(state.currentTimerDetials.enteredMinutes);
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
                sections: [...state.sections, action.payload.data]
            }
        }
        return {
            ...state,
            sections: [action.payload.data]
        }
    }

    if(action.type  === REDUCER_ACTION_TYPES.DELETE_SECTION) {
        return {
            ...state,
            sections: state.sections.filter((section, idx) => {
                if(idx !== action.payload.targetIdx) return section;
            })
        }
    }

    if(action.type === REDUCER_ACTION_TYPES.SET_IS_TIMER_RUNNING_FALSE) {
        return {
            ...state,
            isTimerRunning: false
        }
    }

    if(action.type === REDUCER_ACTION_TYPES.REMOVE_CLOCK_FROM_SECTION) {
        console.log('trying to delete...');
        return {
            ...state,
            sections: state.sections.map((section, idx) => {
                if(idx === action.payload.sectionIdx) {
                    const filteredTimers = section.timers.filter((clock, clockIdx) => {
                        if(clockIdx === action.payload.clockIdx) return false;
                        return true;
                    });

                    return {
                        title: section.title,
                        timers: filteredTimers
                    };
                }
                return section;
            })
        }
    }

    if(action.type === REDUCER_ACTION_TYPES.SHOW_CLOCK_ICON_DELETE_CONFIRMATION) {
        return {
            ...state,
            shouldShowClockIconDeleteConfirmaiton: true
        }
    }
    
    if(action.type === REDUCER_ACTION_TYPES.HIDE_CLOCK_ICON_DELETE_CONFIRMATION) {
        return {
            ...state,
            shouldShowClockIconDeleteConfirmaiton: false
        }
    }
    
    if(action.type === REDUCER_ACTION_TYPES.UPDATE_SELECTED_CLOCK_IDX) {
        console.log("are we updating clock idx?", action.payload.targetIdx);
        return {
            ...state,
            toBeDeletedClockIdx: action.payload.targetIdx
        }
    }

    if(action.type === REDUCER_ACTION_TYPES.UPDATE_TITLE_FOR_CURRENT_TIMER) {
        return {
            ...state,
            currentRunningTimerTitle: action.payload.title
        }
    }
    // if(action.type === REDUCER_ACTION_TYPES.DELETE_CLOCK_ICON) {
    //     return {
    //         ...state,
    //         sections: sections.map((section, idx) => {
    //             if(idx === state.selectedSectionIdx) {
    //                 const filteredTimers = section.timers.filter((timer, timerIdx) => {
    //                     if(timerIdx === state.toBeDeletedClockIdx) return false;
    //                     return true;
    //                 });

    //                 return {
    //                     title: section.title,
    //                     timers: filteredTimers
    //                 }
    //             }
    //             return section;
    //         })
    //     }
    // }
}

export default AppContextReducer;