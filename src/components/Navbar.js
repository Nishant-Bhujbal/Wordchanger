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
        </ul>
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.Tooglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{props.mode} mode</label>
      </div>
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
