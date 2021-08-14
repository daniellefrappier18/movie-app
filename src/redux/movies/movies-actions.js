import * as actionTypes from './movies-types';

export const setMovieChoice = (movie) => {
    return {
        type: actionTypes.SET_MOVIE_CHOICE,
        payload: {
            data: movie
        }
    }
} 