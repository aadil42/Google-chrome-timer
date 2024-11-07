
import isObj from "../JSONUtils/isObj";

const localStorageSetData = (key, data) => {
    console.log(data, 'ha set local');
    if(isObj(data)) {
        localStorage.setItem(key, JSON.stringify(data));
    } else {
        localStorage.setItem(key, data);
    }
}

export default localStorageSetData;