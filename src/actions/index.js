//Action creator
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
    data = [...populateElementsList(minVal, maxVal, size)]; 
    return {
        type: 'CURRENT_DATA_GENERATED',
        payload: data
    }
}

