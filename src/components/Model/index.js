const Model = ({children, width, height, minHeight, padding}) => {

    return (
        <div style={{
            width: width,
            // height: height,
            minHeight: minHeight,
            paddingBottom: padding
        }}>
            {children}
        </div>
    );
}


export default Model;