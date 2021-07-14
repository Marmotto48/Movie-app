import React from 'react'
import {Link} from "react-router-dom";
import ReactPlayer from "react-player"



function movieFullDescription(props) {
    const {movie} = props.location.state;
    
      
    return (
        <div>
            <header>
                <nav className="sticky-nav">
                    <ul className="nav-grid">
                        <li>
                            <a href="#" className="nav-logo"><img></img> </a>
                        </li>
                        <li>
                            <Link to="/">Back To List</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            
           
                <div className="movie-page-container" style={{backgroundImage: `url(${movie.PicURL})`}}>
                    <div className="down">
                        <div className="details-content">
                            <div className="details-here">
                                <h3 className="detail-h1">Details</h3>
                                <div className="area">
                                    <h4 className="score">Score : {movie.Score}</h4>
                                    <h4 className="Premiere">Premiere : {movie.Premiere}</h4>
                                    <h4 className="studio">Studio : {movie.Studio}</h4>
                                </div>
                            </div>
                            <h3 className="share">Share The Movie</h3>
                            <div className="share-icons"></div>
                            </div>
                    </div>
                    <div className="upper">
                        <div className="vid"><ReactPlayer url={movie.Trailer}/></div>
                        <div className="desc">
                            <h1>{movie.Title}</h1>
                            <h3>{movie.Genres}</h3> 
                            <p>{movie.Descrip}</p>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default movieFullDescription
