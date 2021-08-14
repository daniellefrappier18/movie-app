import { combineReducers } from 'redux';
import moviesReducer from './movies/movies-reducers';

const rootReducer = combineReducers({
    movies: moviesReducer
});

export default rootReducer;

