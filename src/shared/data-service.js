
export const parseData = (data) => {
    if (data.length === 0) {
        console.log('Array is empty');
        return '';
    }
    for (const entry of data) {
      if (typeof entry !== "object") {
        console.log("Parse failed as array does not contain an object");
        return "";
      }
    }
    return data;
}
