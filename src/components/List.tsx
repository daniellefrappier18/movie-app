import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {IState as IProps} from './Home';
import {setMovieChoice} from '../redux/movies/movies-actions';

const List: React.FC <IProps> = ({ movies, setMovieChoice }) => {

    const [genres, updateGenres] = useState<string[]>([])

    useEffect(() => {
        const genresArray : string[] = [];
        for(let i : number = 0; i < movies.length; i++){ 
            let childArray : string[] = movies[i].genres; 
            for(let j: number= 0; j < childArray.length; j++){ 
                if (!genresArray.includes(childArray[j])) {
                    genresArray.push(childArray[j])
                }
            }
        }
        updateGenres(genresArray)
    })
   
    const renderList = (genre: string): JSX.Element[]  => {
        function handleMovie (movie: {}) {
            setMovieChoice(movie)
        }
        return movies.filter(movie => {
            if (movie.genres.includes(genre)){
                return true
            } else {
                return false
            }
        }).map(movie => {
            return (
                <div onClick={()=>handleMovie(movie)} className="card col-md-3 p-0">
                    <img src={movie.backdrop} className="card-img-top" alt={movie.title} />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                    </div>
                </div>
            )
        })
    }

    const renderGenreList = (): JSX.Element[]  => {
        return genres.map(genre => {
            return (
                <div className="col-12 p-3">
                    <h2>{genre}</h2>
                    <div className="row">
                        {renderList(genre)}
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="row">
            {renderGenreList()}
        </div>
    )
}

const mapDispatchToProps = (dispatch : any) => {
    return {
        setMovieChoice: (moviepick: []) => dispatch(setMovieChoice(moviepick))
    }
}


export default connect(null, mapDispatchToProps)(List);