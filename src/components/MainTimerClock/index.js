import PrimaryHeader from "../PrimaryHeader";
import AppContext from "../../store/context";
import { useContext } from "react";

const MainTimerClock = ({ title, minutes, seconds }) => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px auto',
        padding: '10px 20px',
        width: 'fit-content',
        borderRadius: '15px',
        backgroundColor: '#f0f0f0',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#333',
    };

    return (
        <div style={style}>
            <h1 style={{ marginRight: '10px', fontSize: '1.2rem', color: '#333' }}>{title}</h1>
            <span>
                {minutes} : {seconds}
            </span>
        </div>
    );
};


export default MainTimerClock;