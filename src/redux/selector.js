import store from './store';

export const getPlayerDetails = () => {
    console.log(store.getState())
    return store.getState()
};