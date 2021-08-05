import * as actionTypes from './movies-types';

const INITIAL_STATE = {
    moviepick: {}
}

const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIE_CHOICE : {
            return {
                ...state,
                moviepick: action.payload.data
            } 

        }
        default : 
            return state;
    }
}