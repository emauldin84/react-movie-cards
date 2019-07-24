import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {
    console.log("props.movies", props.movies)

    let movies = !props.movies ? <h3 style={{margin: '30px', color: 'white'}}>Search movie titles to get started</h3> : <div style={{marginTop: '50px', height: 'auto', backgroundColor: 'rgb(22,22,22)'}}>
    <MovieCard movies={props.movies} clicked={props.clicked}/> 
    </div>

    return(
        <div style={{textAlign: 'center'}}>
            {movies}

        </div>
    )
    
}

export default MovieList