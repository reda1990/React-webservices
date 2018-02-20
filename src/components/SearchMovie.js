import React from 'react';


export default class SearchMovie extends React.Component{
    constructor(){
        super();

        this.state = {
            movieName : ''
        }
    }

    submitSearch = (e) =>{
        e.preventDefault();
        this.props.searchName(this.state.movieName);

        this.setState({
            movieName: ''
        });
    }

    handleSearch = (e) =>{
        let name = e.target.value;
        this.setState({
            movieName: name
        });
    }
    render(){
        return(
            <form className="display-inline" onSubmit={this.submitSearch}>
              <div className="input">
                <input
                  onChange={this.handleSearch}
                  type="text"
                  placeholder="Search Your Movie"
                  value={this.state.movieName}/>
                  <button type="submit">OK</button>
              </div>
            </form>
        );
    }
}
