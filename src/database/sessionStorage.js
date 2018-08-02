export const hasSessionStorage = () => {
  if (sessionStorage) {
    return true;
  } else {
    return false;
  }
}

export const setStorage = (key, obj) => {
  sessionStorage.setItem(key, JSON.stringify(obj));
};

export const getStorage = (key) => JSON.parse(
  sessionStorage.getItem(key) || ""
);