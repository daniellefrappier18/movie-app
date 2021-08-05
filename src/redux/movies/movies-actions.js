import * as actionTypes from './movies-types';

export const setMovieChoice = (moviepick) => {
    return {
        type: actionTypes.SET_MOVIE_CHOICE,
        payload: {
            data: moviepick
        }
    }
} 