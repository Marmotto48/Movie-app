import React from 'react';
import MovieCard from "./movieCard";




export default function MovieList({movies, search}) {
    return (
        <>  
            <div className="movieList-container" id="movieList">
                {movies.filter(el=>el.Title.toLowerCase().includes(search.toLowerCase())).map(el=><MovieCard movie={el}/>)}
            </div>
            

        </>
    )
}
