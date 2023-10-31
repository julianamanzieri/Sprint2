const generateRandomArray = (length) => Array.from({ length }, () => Math.floor(Math.random() * length));
const params = [
    generateRandomArray(19000),
    generateRandomArray(19000),
    generateRandomArray(19000),
    generateRandomArray(19000),
];
export default generateRandomArray;
