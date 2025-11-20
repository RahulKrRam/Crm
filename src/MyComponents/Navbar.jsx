import React from 'react'
function Navbar() {
  return (
    <div className='container-fluid mt-5 ' style={{"backgroundColor":"#1d3321"}}>
        <nav className="navbar navbar-expand-lg  " >
        <a className="navbar-brand text-light" href="#">DropCard </a>
  <div className="collapse navbar-collapse justify-content-center" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link text-light" href="#">Platform </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Resources</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Company</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Login</a>
      </li>
      <div className="btn border border-light    text-light">
        Sign up
    </div>
    </ul>
  </div>
</nav> 
    </div>
  )
}
export default Navbar
