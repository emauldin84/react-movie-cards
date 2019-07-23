import React, { Component } from 'react'
import axios from 'axios'

import Header from '../components/Header'
import MovieList from '../components/MovieList'
import Modal from '../UI/Modal'

class Movies extends Component {
    state = {
        movies: null,
        showModal: false,
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

    cardClickedHandler = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    backdropClickedHandler = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }


    render() {
        return (
            <div style={{backgroundColor:'rgb(72, 72, 72)'}}>
                <Header/>
                <MovieList movies={this.state.movies} clicked={this.cardClickedHandler}/>
                <Modal show={this.state.showModal} clicked={this.backdropClickedHandler}/>
            </div>
        )
    }
}


export default Movies