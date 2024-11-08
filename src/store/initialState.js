import CONST from "../CONST";

const initialState = {
    shouldShowPopupForDeletingAllSections: CONST.SHOULD_SHOW_POPUP_FOR_DELETING_ALL_SECTIONS,
    shouldShowCreateTimerSectionInputPopup: CONST.SHOULD_SHOW_CREATE_TIMER_SECION_INPUT_POPUP,
    shouldShowConfirmPopupForDeleteSection: CONST.SHOULD_SHOW_CONFIRM_POPUP_FOR_DELETE_SECTION,
    selectedSectionIdx: CONST.SELECTED_SECTION_IDX,
    toBeDeleteSectionIdx: CONST.TO_BE_DELETED_SECTION_IDX,
    enteredMinutes: CONST.ENTERED_MINUTES
};

export default initialState;