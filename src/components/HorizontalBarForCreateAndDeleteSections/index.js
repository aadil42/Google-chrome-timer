import AppContext from "../../store/context";
import HorizontalBar from "../HorizontalBar";
import PrimaryBtn from "../PrimaryBtn";
import CONST from "../../CONST";
import { useContext } from "react";

const HorizontalBarForCreateDeleteSections = () => {

    const {dispatch} = useContext(AppContext);
    
    const onCreateClick = () => {
        dispatch({
          type: CONST.REDUCER_ACTION_TYPES.SHOW_CREATE_TIMER_SECTION_INPUT_POPUP
        });
    }

    const onResetClick = () => {
        dispatch({
          type: CONST.REDUCER_ACTION_TYPES.SHOW_POPUP_FOR_DELETING_ALL_SECTIONS
        });
    }

   return <HorizontalBar 
    components={[
      <PrimaryBtn 
      title={CONST.PRIMARY_BTN_CREATE_TIMER}
      clickHandler={onCreateClick}
      />,
      <PrimaryBtn
      title={CONST.PRIMARY_BTN_RESET_TIMER}
      clickHandler={onResetClick}
      />
    ]}
    styles={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  />;
  
}


export default HorizontalBarForCreateDeleteSections;