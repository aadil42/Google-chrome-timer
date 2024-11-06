import HorizontalBar from "../HorizontalBar/index";
import CONST from "../../CONST";
import PrimaryBtn from "../PrimaryBtn";
import SecondaryBtn from "../SecondaryBtn";

import "./style.css";

const AlertPopup = ({width, height, message, onYes, onNo, color }) => {


    return (
        <div className="overlay">
            <div 
            className="alert-popup" 
            style={{  
                backgroundColor: color, 
                width: width, 
                height: height 
            }}
            >

            <h3>{message}</h3>

            <HorizontalBar 
                components={[
                <SecondaryBtn 
                title={CONST.RESET_CONFIRMATION_YES}
                clickHandler={onYes}
                />,
                <SecondaryBtn
                title={CONST.RESET_CONFIRMATION_NO}
                clickHandler={onNo}
                />
                ]}
            />

            </div>
        </div>
    );
};

export default AlertPopup;