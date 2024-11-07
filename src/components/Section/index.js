
const Section = ({timerData}) => {
    return (
        <div>
            <h1>{timerData.title}haha I'm</h1>
            <ul>
                {timerData.timers.map((timer) => {
                    return <p>this is timer for now</p>
                })}
            </ul>
        </div>
    );
}

export default Section;