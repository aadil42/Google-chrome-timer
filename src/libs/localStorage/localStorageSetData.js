
import isObj from "../JSONUtils/isObj";

const localStorageSetData = (key, data) => {
    if(isObj(data)) {
        localStorage.setItem(key, JSON.stringify(data));
    } else {
        localStorage.setItem(key, data);
    }
}

export default localStorageSetData;