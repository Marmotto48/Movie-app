import React, {useState, useEffect, useCallback} from "react";



function MovieAdd({showModal, setShowModal, add} ) {
    const [newMovie, setNewMovie] = useState([])
    const handleChange =(e)=>{
        setNewMovie({...newMovie,[e.target.name]:e.target.value
        })
    };
    const close = ()=>{setShowModal(prev => !prev)};
    const added = ()=>{add(newMovie)};
    const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showModal) {
            setShowModal(false);
            console.log('I pressed');
          }
        },
        [setShowModal, showModal]
      );
      useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
      );
    return ( 
        <div>
            <div className="modal-container">
                                    <div>
                                            {showModal ? (
                                            <div className="modal-background" aria-label='Close modal' >
                                                <div className="modal-wrapper" showModal={showModal}>
                                                
                                                    <img src="https://wallpaperaccess.com/full/42628.jpg"></img>
                                                    <div className="modal-content">
                                                        <div className="contactform">
                                                        <h2>Add Movie Here</h2>
                                                            <form>
                                                                <div className="add-input">
                                                                    <h5> Title </h5>
                                                                    <input type="form-text" name="Title" required="required" onChange={handleChange}/>
                                                                 </div>
                                                                 <div className="add-input">
                                                                    <h5> Gener </h5>
                                                                    <input type="form-text" name="Genres" required="required" onChange={handleChange}/>
                                                                 </div>
                                                                 <div className="add-input">
                                                                    <h5> Description </h5>
                                                                    <textarea required="required" name="Descrip" onChange={handleChange}></textarea>
                                                                 </div>
                                                                 <div className="add-input">
                                                                 <h5> Poster URL </h5>
                                                                    <input type="form-text" name="PicURL" required="required" onChange={handleChange}/>
                                                                 </div>
                                                                 <div className="add-input">
                                                                 <h5> Trailer </h5>
                                                                    <input type="form-text" name="Trailer" required="required" onChange={handleChange}/>
                                                                 </div>
                                                       </form>
                                                        </div>
                                                        <div className="modal-btn">
                                                        <button  onClick={()=>{added();}}> Add </button>
                                                        <button  aria-label="close model" onClick={close}>Cancel</button>
                                                        
                                                    </div>
                                                    </div>
                                                </div>
                                                
                                            </div> 
                                            ): null}
                                        </div>
                            </div>
        </div>
    )
}

export default MovieAdd
