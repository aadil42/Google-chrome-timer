import CONST from "../CONST";
import { localStorageGetData } from "../libs/localStorage";

const initialState = {
    shouldShowPopupForDeletingAllSections: CONST.SHOULD_SHOW_POPUP_FOR_DELETING_ALL_SECTIONS,
    shouldShowCreateTimerSectionInputPopup: CONST.SHOULD_SHOW_CREATE_TIMER_SECION_INPUT_POPUP,
    shouldShowConfirmPopupForDeleteSection: CONST.SHOULD_SHOW_CONFIRM_POPUP_FOR_DELETE_SECTION,
    shouldShowPopUpForEnteringMinutes: CONST.SHOULD_SHOW_POPUP_FOR_ENTERING_MINUTES,
    selectedSectionIdx: localStorageGetData(CONST.SELECTED_SECTION_IDX_KEY),
    toBeDeleteSectionIdx: CONST.TO_BE_DELETED_SECTION_IDX,
    currentTimerDetials: {
        enteredMinutes: CONST.ENTERED_MINUTES,
    },
    currentTimerEndTime: localStorageGetData(CONST.CURRENT_TIMER_KEY),
    isTimerRunning: localStorageGetData(CONST.CURRENT_TIMER_KEY) > Date.now(),
    sections: localStorageGetData(CONST.LOCAL_STORAGE_SECTIONS_KEY),
    shouldShowClockIconDeleteConfirmaiton: CONST.SHOULD_SHOW_CLOCK_ICON_DELEETE_CONFIRMATION,
    toBeDeletedClockIdx: CONST.TO_BE_DELETED_CLOCK_IDX,
    currentRunningTimerTitle: CONST.CURRENT_RUNNING_TIMER_TITLE
};

export default initialState;