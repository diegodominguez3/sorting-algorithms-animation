//Action creator
// select sorting algorithm
export const selectAlgorithm = algorithm => {
    //return an action 
    return {
        type: 'ALGORITHM_SELECTED', 
        payload: algorithm
    };
};
