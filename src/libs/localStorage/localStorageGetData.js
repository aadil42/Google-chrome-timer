
import isValidJSON from "../JSONUtils/isValidJSON";

const localStorageGetData = (key) => {
    const data = localStorage.getItem(key);
    if(isValidJSON(data)) return JSON.parse(data);
    return data;
}

export default localStorageGetData;