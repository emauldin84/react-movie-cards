import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {
    console.log("props.movies", props.movies)

    return(
        <div style={{marginTop: '50px'}}>
            <MovieCard movies={props.movies} clicked={props.clicked}/> 
        </div>
    )
    
}

export default MovieList