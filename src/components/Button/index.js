
const Button = ({styles, title, clickHandler}) => {
    return (
        <button
        style={styles}
        onClick={clickHandler}
        >
            {title}
        </button>
    );
}

export default Button;