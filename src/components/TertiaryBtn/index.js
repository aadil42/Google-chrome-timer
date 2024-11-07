import Button from "../Button";

const Tertiary = ({title, clickHandler}) => {
    return (
        <Button 
        clickHandler={clickHandler}
        title={title} 
        styles={{
            display: 'block',
            color: '#F24B6A',
            backgroundColor: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            padding: '3px 6px',
            textAlign: 'center',
            cursor: 'pointer',
            fontSize: '20px',
            transition: 'background-color 0.3s',
            fontWeight: 'bold',            
          }}
        />
    );
}

export default Tertiary;