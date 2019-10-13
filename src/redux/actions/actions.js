import { ADD_DATA, SHOW_DATA, FILTER_DATA, SORT_DATA } from './types';

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

export const sortData = (data) => {
    console.log('there there')
    return({
        type:SORT_DATA,
        format:data.format,
        criteria:data.criteria
    })
}
// export filterData