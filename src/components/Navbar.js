import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props ) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/textutils">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Aboutus">{props.abouttext}</Link>
        </li>
        </ul>
      {/* <form className="d-flex"> */}
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.Tooglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{props.mode} mode</label>
      </div>
      {/* </form> */}
    </div>
  </div>
</nav>
  )
}



// this tells which type of props will be used

Navbar.propTypes = {                            //this should always be not capital
    title : PropTypes.string.isRequired,
    abouttext : PropTypes.string.isRequired     // is required is used to make it compulsory to add props.
}


// this is used to put default values if you dont give any props
Navbar.defaultProps = {
    title : 'this is title',
    abouttext : 'this is text'
}
