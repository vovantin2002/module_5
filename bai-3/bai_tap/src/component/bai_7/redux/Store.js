import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '../redux/Sagas';
import userSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga);

export default store;