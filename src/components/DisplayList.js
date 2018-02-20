import React from 'react';
import Overview from './Overview';

class DisplayList extends React.Component {
    render(){

        const movies = this.props.movies;
        const url = "http://image.tmdb.org/t/p/w300/";
        return(
            <section className="result-list">
              <div className="rest">
                <h1 className="title">React & Web services</h1>
                <hr/>
              </div>
              <div className="display-list">
                {
                  movies.map((movie, index) => {
                    return (
                      <div className="item" key={index}>
                          <div className="image">
                            <img src={encodeURI(url)+movie.poster_path} alt={movie.title}/>
                          </div>
                          <div className="m-rate">
                            <span className="fa fa-star"></span><span>{movie.vote_average}</span>
                          </div>
                          <div className="desc">
                            <p>{movie.title}</p>
                            <Overview overview={movie}/>
                          </div>
                      </div>
                    )
                  })
                }
              </div>
            </section>
        );
    }
}

export default DisplayList;
