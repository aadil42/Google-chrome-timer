
const GradientDiv = ({children, gradientColors}) => {
    
    return (
        <div
        style={{
            backgroundImage: `linear-gradient(${gradientColors.join(', ')})`, // Join colors for the gradient
          }}
        >
            {children}
        </div>
    );
}

export default GradientDiv;