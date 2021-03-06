import React from 'react'

const MovieCard = (props) => {
    console.log('movie card', props)

    let movieCards = props.movies ? props.movies.map(movie => {
        return (<div onClick={() => props.clicked(movie.imdbID, movie.Poster, movie.Title, movie.Year)} key={movie.imdbID} className="card" style={{width: "12rem", margin:'5px'}}>
            <img className="card-img-top" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://images.8tracks.com/cover/i/009/456/124/tumblr_inline_n6bbxlR3xH1r8nxun-4671.jpg?rect=0,0,500,500&q=98&fm=jpg&fit=max'} alt={`${movie.Title} movie poster`}/>
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