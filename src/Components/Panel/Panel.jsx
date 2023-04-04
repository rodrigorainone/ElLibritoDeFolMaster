import React from 'react';
import { Link } from 'react-router-dom';

const Panel = () => {
    return (
        <div className='contenedorEst fondoMilitar d-flex justify-content-center'>
            
            <div className='d-flex flex-wrap justify-content-around gap-5 pt-5 mb-5' style={{width: '70rem'}}>
                
                  <div className="card CardAzul text-light" style={{width: '15rem'}}>
                    <img src="../../Img/company.jpg" className="card-img-top mt-3 borde" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title ">1 vs 1</h5>                    
                        <Link className='btn btn-dark mt-4' to={"/Panel/1vs1"}>Ver Panel</Link>
                    </div>
                    </div>
               
                
                <div className="card CardAzul text-light" style={{width: '15rem'}}>
                <img src="../../Img/company.jpg" className="card-img-top mt-3 borde" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title text-center">2 vs 2</h5>                    
                        <Link className='btn btn-dark mt-4' to={"/Panel/2vs2"}>Ver Panel</Link>
                    </div>
                </div>
              
                
                <div className="card CardAzul text-light" style={{width: '15rem'}}>
            <img src="../../Img/company.jpg" className="card-img-top mt-3 borde" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">3 vs 3</h5>                   
                    <Link className='btn btn-dark mt-4' to={"/Panel/3vs3"}>Ver Panel</Link>
                </div>
            </div>
               
            
            <div className="card CardAzul text-light" style={{width: '15rem'}}>
            <img src="../../Img/company.jpg" className="card-img-top mt-3 borde" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">4 vs 4</h5>                   
                    <Link className='btn btn-dark mt-4' to={"/Panel/4vs4"}>Ver Panel</Link>
                </div>
            </div> 

            <div className="card CardAzul text-light" style={{width: '15rem'}}>
            <img src="../../Img/FondoCatan.jpg" className="card-img-top mt-3 borde" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Catan</h5>                   
                    <Link className='btn btn-dark mt-4' to={"/Panel/Catan"}>Ver Panel</Link>
                </div>
            </div> 

            <div className="card CardAzul text-light" style={{width: '15rem'}}>
            <img src="../../Img/FondoTerra.jpg" className="card-img-top mt-3 borde" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Terraforming</h5>                   
                    <Link className='btn btn-dark mt-4' to={"/Panel/Terraforming"}>Ver Panel</Link>
                </div>
            </div>   
            <div className="card CardAzul text-light" style={{width: '15rem'}}>
            <img src="../../Img/FondoFifa.jpg" className="card-img-top mt-3 borde" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Fifa</h5>                   
                    <Link className='btn btn-dark mt-4' to={"/Panel/Fifa"}>Ver Panel</Link>
                </div>
            </div>            
            </div>                    
        </div>
    );
}

export default Panel;