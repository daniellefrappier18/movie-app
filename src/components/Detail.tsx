import React from 'react';
import {connect} from 'react-redux';

const Detail: React.FC <any> = ({  moviepick }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <img src={moviepick.backdrop} className="card-img-top" alt={moviepick.title} />
                        <div className="card-body">
                            <h5 className="card-title">{moviepick.title}</h5>
                            <p className="card-text">{moviepick.overview}</p>
                            <p>{moviepick.classification} - {moviepick.length} - {moviepick.imbd_rating}</p>
                            {moviepick.cast.map((cast: string, index: number) => {  
                                return (
                                    <p key={index}>{cast}</p>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>            
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        moviepick: state.movies.moviepick
    }
}

export default connect(mapStateToProps)(Detail);