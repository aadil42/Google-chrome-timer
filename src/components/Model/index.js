const Model = ({children, width, height}) => {

    return (
        <div style={{
            width: width,
            height: height
        }}>
            {children}
        </div>
    );
}


export default Model;