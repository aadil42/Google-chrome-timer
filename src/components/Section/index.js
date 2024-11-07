
import HorizontalBar from "../HorizontalBar";
import PrimaryHeader from "../PrimaryHeader";
import CONST from "../../CONST";
import SecondaryBtn from "../SecondaryBtn";
import Tertiary from "../TertiaryBtn";

const Section = ({timerData}) => {
    return (
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
                            return <p>🕒</p>;
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
                        clickHandler={() => {console.log("adding...")}}
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
    );
}

export default Section;