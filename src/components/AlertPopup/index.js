import HorizontalBar from "../HorizontalBar/index";
import CONST from "../../CONST";
import PrimaryBtn from "../PrimaryBtn";
import SecondaryBtn from "../SecondaryBtn";

import "./style.css";

const AlertPopup = ({ message, onYes, onNo, color }) => {

    return (
        <div className="overlay">
            <div className="alert-popup" style={{ backgroundColor: color }}>
            <p>{message}</p>

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