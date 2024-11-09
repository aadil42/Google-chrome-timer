
import { useContext } from "react";
import Countdown from "react-countdown"
import AppContext from "../../store/context";
import CONST from "../../CONST";
import MainTimerClock from "../MainTimerClock";

const CurrentRunningTimer = () => {
    const {myAppState, dispatch} = useContext(AppContext);

    const completeTimerHandler = () => {

    // console.log('yey timer complete', myAppState.selectedSectionIdx);
    // dispatch({
    //     type: CONST.REDUCER_ACTION_TYPES.ADD_SECTION,
    //     payload: {
    //         targetIdx: myAppState.selectedSectionIdx
    //     }
    // });

    console.log(myAppState, "this run on complete time");
    dispatch({
        type: CONST.REDUCER_ACTION_TYPES.ADD_TIMER_IN_SECTION,
        payload: {
          targetIdx: myAppState.selectedSectionIdx
        }
    });

    dispatch({
        type: CONST.REDUCER_ACTION_TYPES.SET_IS_TIMER_RUNNING_FALSE
    });


    }

    
    return <Countdown 
                date={myAppState.currentTimerEndTime} 
                onComplete={completeTimerHandler}
                renderer={(obj) => {
                    console.log(myAppState, "this is from countdown");
                    return MainTimerClock({...obj, title: myAppState.currentRunningTimerTitle})
                }}
                props={{title: "this is title"}}
            />;
}

export default CurrentRunningTimer