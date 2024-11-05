
const HorizontalBar = ({components}) => {
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}
        >
            {components.map((Component) => Component)}
        </div>
    );
}

export default HorizontalBar;