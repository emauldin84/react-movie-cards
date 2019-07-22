import React, { Component } from 'react'
import axios from 'axios'

import Header from '../components/Header'

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
                console.log(this.state.movies)
            })
            .catch (err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <Header/>
                
            </div>
        )
    }
}


export default Movies