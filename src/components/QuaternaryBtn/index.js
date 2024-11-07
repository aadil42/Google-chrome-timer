import Button from "../Button";

const QuaternaryBtn = ({title, clickHandler, styles}) => {
    return <Button 
    clickHandler={clickHandler}
    title={title} 
    styles={styles}
    />
}

export default QuaternaryBtn;