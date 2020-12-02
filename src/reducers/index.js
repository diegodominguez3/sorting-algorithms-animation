import {combineReducers} from 'redux'; 

const algorithmsReducer = () => {
    return [
        {name: 'Bubble Sort', func: () => {console.log('bubble sort')}},
        {name: 'Quick Sort', func: () => {console.log('quick sort')}},
        {name: 'Heap Sort', func: () => {console.log('heap sort')}}
    ]  
};

const dataInfoReducer = () => {
    return {
        elementsSize: 10,
        minValue: 1, 
        maxValue: 100
    }
}

const currentDataReducer = (currentData=[], action) => {
    if(action.type === 'CURRENT_DATA_GENERATED') {
        return action.payload;
    }
    return currentData; 
};

const selectedAlgorithmReducer = (selectedAlgorithm=algorithmsReducer()[0], action) => {
    if(action.type === 'ALGORITHM_SELECTED') {
        return action.payload; 
    }

    return selectedAlgorithm; 
}


export default combineReducers({
    dataInfo: dataInfoReducer, 
    algorithms: algorithmsReducer, 
    selectedAlgorithm: selectedAlgorithmReducer, 
    currentData: currentDataReducer
});