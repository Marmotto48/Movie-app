import React, {useState, useEffect} from "react";
import ReactStars from "react-rating-stars-component";

function Card({movie}) {
    

	return (
				<div className="movie-card" style={{backgroundImage: `url(${movie.PicURL})`, backgroundSize: "cover"}}>
                    <div className="color-overlay">
                        <div className="movie-rating">
                            <h4>
                                Your Rating: 
                            </h4>
                            <ReactStars classNames="stars"
                                count={5}
                                isHalf={true}
                                onChange={(newRating) =>{}}
                                size={26}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div className="movie-content">
                            <div className="movie-header">
                                <h1 className="movie-title">{movie.Title}</h1>
                                {/*<div>
                                {[movie.Genres].map((item, i) => {
                                    return <button key={i}>{item}</button>
                                    })}
                                </div>*/}
                                <h4 className="movie-genres">{movie.Genres}</h4>
                                <p className="movie-desc">{movie.Descrip} <a href="#">Read more...</a></p>
                                <h4 className="movie-score">Score: {movie.Score}</h4>
                                <br/>
                                <a className="trailerBtn" href={movie.Trailer} target="_blank">Watch Trailer</a>
                            </div>
                        </div>
                    </div>
                </div>	
    )
}
export default Card
