import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import Logger from 'redux-logger';
import { loadState, saveState} from './localStorage';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index';


// TODO: Complete the local storage issue
function createData(name, country, t20, odi, test){
    return {name, country, t20, odi, test}
  }
  
const rows = [
    createData('Dhoni', 'India', '20000', '30000', '40000'),
    createData('Ricky Ponting', 'Australia', '40000', '20000', '40000'),
    createData('Hasim Amla', 'South Africa', '50000', '60000', '70000'),
    createData('Kohli', 'India', '20000', '30000', '40000'),
    createData('Gichrist', 'Australia', '20000', '30000', '40000'),
    createData('De Cock', 'South Africa', '20000', '30000', '40000'),
    createData('Murli', 'Sri Lanka', '20000', '30000', '40000'),
    createData('Root', 'England', '20000', '30000', '40000'),
    createData('Phensung', 'Nepal', '20000', '30000', '40000')
]

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [Logger];


const store = createStore(reducer,rows, applyMiddleware(...middleWares));

store.subscribe(() => {
    saveState({
        playerDetails: store.getState().playerDetails
    });
});

export default store;