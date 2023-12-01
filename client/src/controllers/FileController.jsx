export const saveDataToFile = (filePath, data) => {
  try {
    localStorage.setItem(filePath, data);
  } catch (error) {
    console.error(error);
  }
};

export const loadDataFromFile = (filePath) => {
  try {
    const data = localStorage.getItem(filePath);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
