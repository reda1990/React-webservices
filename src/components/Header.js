import React, { Component } from 'react';
import SearchMovie from './SearchMovie';

export default class Header extends Component {
  constructor(){
    super();

    this.state = {
      movieName: ''
    }
  }

  handleMovieName = (name) =>{
    let movieName = name;
    this.props.name(name);
    this.setState({
      movieName
    });
  }

  render(){
    return(

      <header id="header">
        <nav className="display-inline">
          <div id="logo" className="display-inline">
            <h1 className="title">Best Movies 2018 </h1>
          </div>
          <div>
          </div>
          <div className="search-bar">
                <SearchMovie searchName={this.handleMovieName}/>
          </div>
        </nav>

        <span className="toggle"></span>
      </header>
    );
  }
}
