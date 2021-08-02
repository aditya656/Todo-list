import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default function Header(props){
    return (    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <div className="container-fluid">
          <Link className="navbar-brand" to=".">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>           
          </div>
        </div>
      </nav>

    )
}
Header.defaultProps = {
  title : "Your Title Here"
}

Header.prototype = {
  title: PropTypes.string
}