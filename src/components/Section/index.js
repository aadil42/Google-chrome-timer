
import { useContext } from "react";
import AppContext from "../../store/context";


import HorizontalBar from "../HorizontalBar";
import PrimaryHeader from "../PrimaryHeader";
import CONST from "../../CONST";
import Tertiary from "../TertiaryBtn";
import ContainerWithCloseBtn from "../ContainerWithCloseBtn";
import App from "../../App";

const Section = ({timerData, sectionId}) => {

    const {myAppState, dispatch} = useContext(AppContext);

    const plusBtnClickHandler = (targetIdx) => {
      console.log(targetIdx, 'this should be set as selected idx');
      if(myAppState.isTimerRunning) return;
      
        dispatch({
            type: CONST.REDUCER_ACTION_TYPES.UPDATE_SELECTED_SECTION_IDX,
            payload: {
              targetIdx
            }
          });
        dispatch({
            type: CONST.REDUCER_ACTION_TYPES.SHOW_POPUP_FOR_ENTERING_MINUTES
        });

        dispatch({
          type: CONST.REDUCER_ACTION_TYPES.UPDATE_TITLE_FOR_CURRENT_TIMER,
          payload: {
            title: timerData.title
          }
        });
    }
    
    const closeBtnClickHandler = (targetIdx) => {
        dispatch({
            type: CONST.REDUCER_ACTION_TYPES.UPDATE_TO_BE_DELETED_SECTION_IDX,
            payload: {
              targetIdx
            }
          });
          dispatch({
            type: CONST.REDUCER_ACTION_TYPES.SHOW_CONFIRM_POPUP_FOR_DELETE_SECTION
        });
    }

    const clockIconCloseBtnHandler = (sectionIdx, clockIdx) => {
      console.log("haha we happend", clockIdx);

      dispatch({
        type: CONST.REDUCER_ACTION_TYPES.SHOW_CLOCK_ICON_DELETE_CONFIRMATION
      });

      dispatch({
        type: CONST.REDUCER_ACTION_TYPES.UPDATE_SELECTED_CLOCK_IDX,
        payload: {
          targetIdx: clockIdx
        }
      });

      // dispatch({
      //   type: CONST.REDUCER_ACTION_TYPES.UPDATE_TO_BE_DELETED_SECTION_IDX,
      //   payload: {
      //     targetIdx: sectionIdx
      //   }
      // });

      dispatch({
        type: CONST.REDUCER_ACTION_TYPES.UPDATE_SELECTED_SECTION_IDX,
        payload: {
          targetIdx: sectionIdx
        }
      });
    }

    const styles = {
        clockIconContainer: {
          position: 'relative',
          display: 'inline-block', // Keeps container size to icon
          cursor: 'pointer',
        },
        clockIcon: {
          fontSize: '1.5rem', // Adjust icon size
        },
        clockTimer: {
          position: 'absolute',
          top: '-4px',
          right: '-6px',
          fontSize: '.75rem', // Adjust timer size
          backgroundColor: CONST.POP_UP_WINDOW_PRIMARY_BG,
          color: 'white', // Optional text color
          padding: '0.2rem', // Optional padding around timer
          borderRadius: '50%', // Optional circular background
          minHeight: '20px',
          minWidth: '20px',
          },
      };
      
    return (
        <ContainerWithCloseBtn
        onClose={() => {closeBtnClickHandler(sectionId)}}
        width="30px"
        height="30px"
        >
            <HorizontalBar 
                components={[
                    <PrimaryHeader 
                    title={timerData.title}
                    styles={{
                        maxWidth: '20%'
                    }}
                    />,
                    <HorizontalBar 
                        components={timerData.timers.map((timer, clockIdx) => {
                            console.log(timer);
                            return   <p  
                                        onClick={() => clockIconCloseBtnHandler(sectionId, clockIdx)}
                                        style={styles.clockIconContainer}>
                                        <span style={styles.clockIcon}>🕒</span>
                                        <span style={styles.clockTimer}>{timer}</span>
                                      </p>
                        })}
                        styles={{
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'center',
                            maxWidth: '80%',
                            columnGap: '7px' 
                        }}
                    />,
                    <Tertiary
                        title="+"
                        clickHandler={() => {plusBtnClickHandler(sectionId)}}
                    />
                ]}

                styles={{
                    width: '90%',
                    minHeight: CONST.TIMER_SECTION_HEIGHT,
                    display: 'flex',
                    justifyContent: 'space-between  ',
                    alignItems: 'center',
                    backgroudColor: "#ffffff",
                    borderRadius: "10px",
                    margin: '20px auto',
                    color: '#F24B6A',
                    backgroundColor: '#ffffff',
                    border: 'none',
                    padding: '10px 20px',
                    textAlign: 'center',
                    fontSize: '16px',
                    transition: 'background-color 0.3s',
                    fontWeight: 'bold',  
                }}
            />
        </ContainerWithCloseBtn>
    );
}

export default Section;