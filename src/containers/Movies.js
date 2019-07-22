import React, { Component } from 'react'
import axios from 'axios'

import Header from '../components/Header'
import MovieList from '../components/MovieList'

class Movies extends Component {
    state = {
        movies: null
    }

    componentDidMount() {
        axios.get('http://www.omdbapi.com/?s=Batman&apikey=48ba5f31')
            .then ((res) => {
                this.setState({
                    movies: res.data.Search
                })
            })
            .catch (err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <Header/>
                <MovieList movies={this.state.movies}/>
            </div>
        )
    }
}


export default Movies