const setItem: (key: string, value: string) => void = (key, value) => {
    localStorage.setItem(key, value);
};

const getItem: (key: string) => string | null = (key) => {
    const item = localStorage.getItem(key);
    return item;
};

// const removeItem = (key) => {
//   localStorage.removeItem(key);
// };

const appLocalStorage = { getItem, setItem };
export default appLocalStorage;
