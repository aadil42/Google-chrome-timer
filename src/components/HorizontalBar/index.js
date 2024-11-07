
const HorizontalBar = ({components, styles}) => {
    return (
        <div
        style={styles}
        >
            {components.map((Component) => Component)}
        </div>
    );
}

export default HorizontalBar;