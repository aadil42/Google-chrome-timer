
const Scrollable = ({children}) => {
    
    const containerStyle = {
        overflowY: 'auto',    // Enables vertical scrolling
        maxHeight: '100vh',   // Limits the container height to the viewport
        padding: '1rem',      // Adds padding for better appearance
      };
    
      return (
        <div style={containerStyle}>
          {children}
        </div>
      );
}

export default Scrollable;