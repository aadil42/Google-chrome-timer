const isValidJSON = (input) => {
    try {
        JSON.parse(input);
        return true;
    } catch {
        return false;
    }
}

export default isValidJSON;