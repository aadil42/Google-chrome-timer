const isObj = (value) => {
    if (value === null) {
        return 'null'; // null is an object in JavaScript
    }
    if (typeof value === 'object') {
    return Array.isArray(value) ? 'array' : 'object';
    }
    return typeof value; 
}

export default isObj;