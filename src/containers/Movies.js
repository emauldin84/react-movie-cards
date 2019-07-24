import React, { Component } from 'react'
import axios from 'axios'

import Header from '../components/Header'
import MovieList from '../components/MovieList'
import Modal from '../UI/Modal'
import Search from '../components/Search'

class Movies extends Component {
    state = {
        movies: null,
        showModal: false,
        movieId: null,
        movieTitle: null,
        moviePoster: null,
        movieYear: null,
        searchValue: '',
    }

    // componentDidMount() {
    //     axios.get('http://www.omdbapi.com/?s=Batman&apikey=48ba5f31')
    //         .then ((res) => {
    //             this.setState({
    //                 movies: res.data.Search
    //             })
    //         })
    //         .catch (err => {
    //             console.log(err)
    //         })
    // }

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

    onChangeHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            searchValue: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        axios.get(`http://www.omdbapi.com/?s=${this.state.searchValue}&apikey=48ba5f31`)
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
            <div style={{backgroundColor:'rgb(22,22,22)', height: '100%'}}>
                <Header/>
                <Search value={this.state.searchValue} submitHandler={(event) => this.submitHandler(event)} change={(event) => this.onChangeHandler(event)}/>
                <MovieList 
                    movies={this.state.movies} 
                    clicked={this.cardClickedHandler}/>
                <Modal 
                    show={this.state.showModal} 
                    clicked={this.backdropClickedHandler}>
                        <img className="img-fluid float-left modalPoster" src={this.state.moviePoster !== 'N/A' ? this.state.moviePoster : 'https://images.8tracks.com/cover/i/009/456/124/tumblr_inline_n6bbxlR3xH1r8nxun-4671.jpg?rect=0,0,500,500&q=98&fm=jpg&fit=max'} alt={`${this.state.movieTitle} movie poster`}/>
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