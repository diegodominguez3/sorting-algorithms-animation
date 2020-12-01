import {combineReducers} from 'redux'; 

const algorithmsReducer = () => {
    return [
        {name: 'Bubble Sort', func: () => {console.log('bubble sort')}},
        {name: 'Quick Sort', func: () => {console.log('quick sort')}},
        {name: 'Heap Sort', func: () => {console.log('heap sort')}}
    ]  
};

const selectedAlgorithmReducer = (selectedAlgorithm=null, action) => {
    if(action.type === 'ALGORITHM_SELECTED') {
        return action.payload; 
    }
    return selectedAlgorithm; 
}

export default combineReducers({
    algorithms: algorithmsReducer, 
    selectedAlgorithm: selectedAlgorithmReducer 
});