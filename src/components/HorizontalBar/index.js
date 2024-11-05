
const HorizontalBar = ({components}) => {
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            {components.map((Component) => Component)}
        </div>
    );
}

export default HorizontalBar;