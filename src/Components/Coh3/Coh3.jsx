import React from 'react';
import { Link } from 'react-router-dom';

const Coh3 = () => {
    return (
        <div className='contenedorEst fondoMilitar'>
            <div className='d-flex justify-content-around pt-5'>
            <div className='mobile row gap-5 pt-5'>
                
                  <div className="card CardAzul text-light" style={{width: '18rem'}}>
                    <img src="../../Img/company.jpg" className="card-img-top mt-3 borde" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title ">1 vs 1</h5>                    
                        <Link className='btn btn-dark mt-4' to={"/Estadisticas/Coh3/1vs1"}>Ver</Link>
                    </div>
                    </div>
               
                
                <div className="card CardAzul text-light" style={{width: '18rem'}}>
                <img src="../../Img/company.jpg" className="card-img-top mt-3 borde" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title text-center">2 vs 2</h5>                    
                        <Link className='btn btn-dark mt-4' to={"/Estadisticas/Coh3/2vs2"}>Ver</Link>
                    </div>
                </div>
              
                
                <div className="card CardAzul text-light" style={{width: '18rem'}}>
            <img src="../../Img/company.jpg" className="card-img-top mt-3 borde" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">3 vs 3</h5>                   
                    <Link className='btn btn-dark mt-4' to={"/Estadisticas/Coh3/3vs3"}>Ver</Link>
                </div>
            </div>
               
            
            <div className="card CardAzul text-light" style={{width: '18rem'}}>
            <img src="../../Img/company.jpg" className="card-img-top mt-3 borde" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">4 vs 4</h5>                   
                    <Link className='btn btn-dark mt-4' to={"/Estadisticas/Coh3/4vs4"}>Ver</Link>
                </div>
            </div> 

            
                
                
              
          

            </div>
            
             
            </div>                    
        </div>
    );
}

export default Coh3;
