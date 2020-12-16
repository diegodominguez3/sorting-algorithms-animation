import { bubbleSort } from '../algorithms/bubbleSort'; 
import { quickSort } from '../algorithms/quickSort'; 
// select sorting algorithm
export const selectAlgorithm = algorithm => {
    //return an action 
    return {
        type: 'ALGORITHM_SELECTED', 
        payload: algorithm
    };
};

//generate current data 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function populateElementsList (minValue, maxValue, elementsSize) {
    let tempList = []; 
    for(let i = 0; i < elementsSize; i++) {
      const randomNum = getRandomInt(minValue, maxValue)
      tempList.push(randomNum); 
    }
    return tempList; 
}

export const generateCurrentData = (data, minVal, maxVal, size) => {
    data = {
        array: [...populateElementsList(minVal, maxVal, size)],
        isSorted: false, 
        currentCount: 0
    }; 
    return {
        type: 'CURRENT_DATA_GENERATED',
        payload: data
    }
}

export const updateData = (data, algorithm) => {
    let newData = {...data}; 
    let updateFunction = null;

    switch(algorithm) {
        case "Bubble Sort":
            updateFunction = bubbleSort(newData); 
            break;
        case "Quick Sort":
            updateFunction = quickSort(newData);
            break; 
        default:
            updateFunction = bubbleSort(newData); 
    }
    return {
        type:'UPDATE_DATA',
        payload: updateFunction
    }
}