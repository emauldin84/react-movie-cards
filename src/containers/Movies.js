import React, { Component } from 'react'
import axios from 'axios'

import Header from '../components/Header'
import MovieList from '../components/MovieList'
import Modal from '../UI/Modal'

class Movies extends Component {
    state = {
        movies: null,
        showModal: false,
        movieId: null,
        movieTitle: null,
        moviePoster: null,
        movieYear: null,
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

    cardClickedHandler = (id, poster, title, year) => {
        this.setState({
            showModal: !this.state.showModal,
            movieId: id,
            movieTitle: title,
            moviePoster: poster,
            movieYear: year,
        })
    }

    backdropClickedHandler = () => {
        this.setState({
            showModal: !this.state.showModal,
            movieId: null,
            movieTitle: null,
            moviePoster: null,
            movieYear: null,
        })
    }


    render() {

        return (
            <div style={{backgroundColor:'rgb(72, 72, 72)'}}>
                <Header/>
                <MovieList 
                    movies={this.state.movies} 
                    clicked={this.cardClickedHandler}/>
                <Modal 
                    show={this.state.showModal} 
                    clicked={this.backdropClickedHandler}>
                        <img className="img-fluid float-left modalPoster" src={this.state.moviePoster} alt={`${this.state.movieTitle} movie poster`}/>
                        <div>
                            <h3>{this.state.movieTitle}</h3>
                            <h5>{this.state.movieYear}</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        

                </Modal>
            </div>
        )
    }
}


export default Movies