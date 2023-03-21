import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="container bg-dark">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link className="nav-link active px-2 text-light" to={"/"}>Home</Link> </li>
                        <li className="nav-item"><Link className="nav-link active px-2 text-light" to={"/Players"}>Players</Link></li>
                        <li className="nav-item"><Link className="nav-link active px-2 text-light" to={"/Galeria"}>Galeria</Link></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Estadisticas</a></li>      
                    </ul>
                    <p className="text-center text-light">© 2023 TukyWebs Company, Inc</p>
                </footer>
            </div>
        </>
    );
}

export default Footer;
