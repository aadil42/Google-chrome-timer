import Button from "../Button";

const SecondaryBtn = ({title, clickHandler}) => {
    return (
        <Button 
        clickHandler={clickHandler}
        title={title} 
        styles={{
            display: 'block',
            margin: '20px auto',
            color: '#ffffff',
            backgroundColor: '#F24B6A',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            textAlign: 'center',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s',
            fontWeight: 'bold',
        }}
        />
    );
}

export default SecondaryBtn;