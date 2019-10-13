import { ADD_DATA, FILTER_DATA, SORT_DATA } from '../actions/types';
import { getPlayerDetails } from '../selector';

const initialState = {
    playerDetails: [],
    currentPlayers: []
};

const addDataReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_DATA: {
            return {
                ...state,
                playerDetails: [...state.playerDetails, action.payload],
                currentPlayers: [...state.playerDetails, action.payload]
            }   
        }
        case FILTER_DATA: {
            let filteredArr = state.playerDetails.filter(player => player.country === action.country)
            console.log(filteredArr)
            return {
                ...state, 
                currentPlayers: filteredArr};
            // console.log('here I am ')
        }
        case SORT_DATA: {
            console.log(state)
        }
        default: 
            return state
    }
}
export default  addDataReducer