import Button from "../Button";

const PrimaryBtn = ({title}) => {
    return (
        <Button 
        title={title} 
        styles={{
            display: 'block',
            margin: '20px auto',
            color: '#F24B6A',
            backgroundColor: '#ffffff',
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

return PrimaryBtn;