
import Countdown from "react-countdown"

const CurrentRunningTimer = ({endTime, onTimerComplete}) => {
    return <Countdown 
            date={endTime} 
            onComplete={onTimerComplete}
           />;
}

export default CurrentRunningTimer