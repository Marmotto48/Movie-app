import React from 'react';
import {BrowserRouter , Route} from "react-router-dom";
import App from '../App';
import MovieFullDescription from "./movieFullDescription"

function Router() {
    return (
        <div>
                <Route exact path="/" component={App}/>
                <Route exact path="/movieFullDescription/:Title" component={MovieFullDescription}/>
        </div>
    )
}

export default Router
