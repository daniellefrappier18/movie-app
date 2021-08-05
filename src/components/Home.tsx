import React, {useEffect, useState} from 'react';
import List from './List';

export interface IState {
    movies: {
      backdrop: string,
      cast: string[],
      classification: string,
      director: string | string[],
      genres: string[],
      id: string,
      imdb_rating: number,
      length: string,
      overview: string,
      poster: string
      released_on: string,
      slug: string,
      title: string,
    }[],
    setMovieChoice: (movies: {}) => {}
} 

function Home() {
  const [ movies, updateMovies] = useState<IState["movies"]>([])
  useEffect(()=> {
    async function fetchMovies() {
      const url = "https://wookie.codesubmit.io/movies";
      const response = await fetch(url, {
          method: 'GET',
          headers: {
            authorization: `Bearer Wookie2021`,
            Accept: 'application/json',
          },
        });
      const data = await response.json();
      //console.log(data);
      updateMovies(data.movies);
      
  }
  fetchMovies();
  }, []);
    return (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className="text-center">Movies</h1>
                <hr/>
            </div>
        </div>
        <List movies={movies} />
    </div>
    );
}

export default Home;