import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>            
           <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-md-center" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" to={"/"}>Home</Link>          
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/Players"}>Players</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/Galeria"}>Galeria</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Estadisticas
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"Estadisticas/Coh3"}>Coh3</Link></li>
            <li><Link className="dropdown-item" to={"/Estadisticas/Terraforming Mars"}>Terraforming Mars</Link></li>
            <li><Link className="dropdown-item" to={"/Estadisticas/Catan"}>Catan</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
        </>
    );
}

export default Nav;
