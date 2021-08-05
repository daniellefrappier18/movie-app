import { combineReducers } from 'redux';
import moviesReducer from './movies/movies-reducers';

const rootReducer = combineReducers({
    moveies: moviesReducer
});

export default rootReducer;