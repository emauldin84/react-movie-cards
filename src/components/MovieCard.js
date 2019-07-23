import React from 'react'

const MovieCard = (props) => {

    let movieCards = props.movies ? props.movies.map(movie => {
        return (<div onClick={props.clicked} key={movie.imdbID} className="card" style={{width: "12rem", margin:'5px'}}>
            <img className="card-img-top" src={movie.Poster} alt={`${movie.Title} movie poster`}/>
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>
            </div>
        </div>
        )
        
        
    }) : null
    return (
        <div className='d-inline-flex justify-content-around flex-wrap'>
            {movieCards}
        </div>
        
    )
}

export default MovieCard