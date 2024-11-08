
import { useContext } from "react";
import Countdown from "react-countdown"
import AppContext from "../../store/context";

const CurrentRunningTimer = ({onTimerComplete}) => {
    const myContext = useContext(AppContext);

    return <Countdown 
            date={myContext.currentTimerEndTime} 
            onComplete={onTimerComplete}
           />;
}

export default CurrentRunningTimer