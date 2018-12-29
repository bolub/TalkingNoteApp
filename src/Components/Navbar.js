import React from 'react';
import Note from "./Note";
import { Route, Link, Switch } from "react-router-dom";

const Navbar = ()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to ="/" className="navbar-brand" href="#">React</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white" href="#">Notes</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Listen to text here</a>
                        </li>
                    </ul>
                </div>
            </nav>
          
        </div>
    );
}

export default Navbar;