import { ADD_DATA, SHOW_DATA, FILTER_DATA } from './types';

var playerId = 0

export const addDetails = details => ({
    type: ADD_DATA,
    payload: {
        ...details, id: ++playerId
    }
});

export const showDetails = details => ({
    type: SHOW_DATA
})

export const filterData = (data) => {
    // console.log(data)
    return({
        type: FILTER_DATA,
        country:data.country
    })    
}
// export filterData