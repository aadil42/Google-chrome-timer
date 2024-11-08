import { useState } from "react";

import HorizontalBar from "../HorizontalBar";
import PrimaryHeader from "../PrimaryHeader";
import CONST from "../../CONST";
import SecondaryBtn from "../SecondaryBtn";
import Tertiary from "../TertiaryBtn";
import ContainerWithCloseBtn from "../ContainerWithCloseBtn";
import InputPopup from "../InputPopup";

const Section = ({timerData, onCloseClick, sectionId, showEnterTimerPopUp}) => {

    const styles = {
        clockIconContainer: {
          position: 'relative',
          display: 'inline-block', // Keeps container size to icon
        },
        clockIcon: {
          fontSize: '3rem', // Adjust icon size
        },
        clockTimer: {
          position: 'absolute',
          top: 0,
          right: 0,
          fontSize: '1.5rem', // Adjust timer size
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional background
          color: 'white', // Optional text color
          padding: '0.2rem', // Optional padding around timer
          borderRadius: '50%', // Optional circular background
        },
      };
      
    return (
        <ContainerWithCloseBtn
        onClose={onCloseClick}
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
                        components={timerData.timers.map((timer) => {
                            return <p className={styles.clockIconContainer}>
                                    <span className={styles.clockIcon}>🕒</span>
                                    <span className={styles.clockTimer}>{timer}</span>
                                   </p>;
                        })}
                        styles={{
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'center',
                            maxWidth: '80%'
                        }}
                    />,
                    <Tertiary
                        title="+"
                        clickHandler={() => {showEnterTimerPopUp(sectionId)}}
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