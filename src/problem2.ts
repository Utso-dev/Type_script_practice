

const getLength = (len : string | number[]) => {
    if (typeof len === 'string') {
        return len.length;
    }

    if (Array.isArray(len)) {
        return len.length;
    }

}

const result1 = getLength("typescript");
console.log(result1); // 11
const result2 = getLength([1, 2, 3, 4, 5,6]);
console.log(result2); // 5