import React, { Component } from 'react';
import Header from '../components/Header';
import DisplayList from '../components/DisplayList';

class Movies extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: [],
      name: '',
      type : 'Top Movie'
    }
  }

  componentDidMount(){
    this.fetchMovie();
  }

  fetchMovie = (name) =>{
    const API = '&api_key=72049b7019c79f226fad8eec6e1ee889';
    let movieAPI = '';

    if( this.state.movies.length === 0 ){
      movieAPI = "https://api.themoviedb.org/3/discover/movie?api_key=72049b7019c79f226fad8eec6e1ee889&sort_by=popularity.desc&page=1";
    }else{
      movieAPI = "https://api.themoviedb.org/3/search/movie?page=1&query=" + name + API;
    }


    const req = new Request(movieAPI, {
      method: 'GET',
      cache: 'default'
    });

    fetch(req).then(response =>{
      return response.json();
    }).then(data =>{
      if(data.results.length > 0){
        this.setState({
          movies: data.results
        });
      }

    }).catch(err => {
      console.log("ERROR: " + err);
    })
  }

  handleResult = (name) =>{
    this.setState({
      name: name
    });
    this.fetchMovie(name);
  }

  render() {
    return (
      <div className="main">
        <Header name = {this.handleResult}/>
        <DisplayList movies={this.state.movies} res={this.state.type}/>
      </div>
    );
  }
}

export default Movies;
