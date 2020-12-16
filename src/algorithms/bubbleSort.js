import store from "../store"
//swap function
function swap(index1, index2, array) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

export const bubbleSort = (data) => {
    let array = data.array; 
    let isSorted = data.isSorted; 
    let count = data.currentCount;
    if (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - count; i++) {
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array);
                isSorted = false;
            }
        }
        count++;
    } 
    return {...data, array, isSorted, currentCount: count}
} 