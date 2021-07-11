import './App.css';
import React, {useState, useEffect} from "react";
import MovieCard from "./components/movieCard";
import MovieList from "./components/movieList";
import MovieAdd from "./components/movieAdd";
import LogoIcon from "./img/logo.png"
import Soot from "./img/soot.png"



 function App() {
//fetch movies from json
  const [movies, setMovies] = useState ([])
  useEffect(() => {
		fetch("data.json")
			.then((response) => response.json())
			.then((data) => {
				setMovies(data) //new
			})
	}, []);



//modal
  const [showModal, setShowModal] = useState(false);
  const openAdd = () => {
      setShowModal(prev => !prev);
  };



//add movie -> fonction aspératoire from child to parent
  const add = (newMovie) => {
    setMovies([...movies, newMovie])
  }



//search movie by name
const [search, setSearch] = useState ("");
      const filterSearch =(search) => {
          setSearch(search)
      }
   





  //sort movie by alphabet
  const [sortedField, setSortedField] = React.useState(null);

  const sortAlpha = (movies.sort(( a, b ) => {
    //return (a[sortedField] < b[sortedField] ? -1 : a[sortedField] > b[sortedField] ? 1 : 0) // --> score asc
    if (sortedField ==="Title"){
      return (a[sortedField] < b[sortedField] ? -1 : a[sortedField] > b[sortedField] ? 1 : 0)
    }
    if (sortedField ==="Score"){
      return (b.Score < a[sortedField] ? -1 : b[sortedField] > a[sortedField] ? 1 : 0)
    }  //score desc
      return 0;
  ;
  }));
    

  return (
    <>  {/*PAGE HEADER; I worte it here so the buttons at the top will always stay in the header*/}
        <div className="navigation">
            <nav>
            <img src={LogoIcon}  />
              <div className="logo"  >
                
                  <a href="#!">AniMovies</a>
              </div>
              <div className="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
              <div className="search-bar">
                 <input
                  type='text' 
                  placeholder='Search Here'
                  onChange ={(e)=> filterSearch(e.target.value)}
                />
                  <svg className="svg-icon" viewBox="0 0 20 20">
                    <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                  </svg>
                </div>
                <div className="dropdown">
                  <button className="dropbtn">Sort By</button>
                  <div className="dropdown-content">
                    <a type="button" onClick={() => setSortedField('Title')} >Title</a>
                    <a onClick={() => setSortedField('Score')}>Score</a>
                  </div>
                </div>
                <button className="addbtn" onClick={openAdd}>Add +</button>
            </nav>
          </div>
          <div className="header-space"></div>
         

      
     <a href="#movieList">
        <img className="box bounce-4 top-bttn " src={Soot}/>
      </a>
      <MovieList movies ={movies} search={search}/>
      <MovieCard movie ={movies}/>
      <MovieAdd add={add} showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}

export default App; 