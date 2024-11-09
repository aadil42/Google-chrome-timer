const MainTimerClock = ({ minutes, seconds, completed }) => {
    
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
            <span>{minutes} : {seconds}</span>
        </div>
    );
};

export default MainTimerClock;
