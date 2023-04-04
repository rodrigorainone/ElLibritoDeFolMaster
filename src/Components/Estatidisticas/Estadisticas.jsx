import React from 'react';
import { useState ,useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductos } from '../../Firebase/firebase';

const Estadisticas = () => {
    const [arreEst,setarreEst] = useState([])
    const {juego} = useParams();   
    const {modalidad} = useParams();
    const [fondo,setfondo] = useState('')
    const [tablaUpColor,settablaUpColor] = useState(true);   

    useEffect(() => {
            let aux;
            console.log(juego);
            if(modalidad){
                setfondo('contenedorEst fondoMilitar');
                settablaUpColor(true)
                switch (modalidad) {
                    case '1vs1':
                        aux='Coh1vs1';                                              
                      break;
                    case '2vs2':
                        aux='Coh2vs2';
                        
                    break;                        
                    case '3vs3':
                        aux='Coh3vs3';
                        
                      break;
                    case '4vs4':
                        aux='Coh4vs4';
                        
                    break;
                    default:
                    console.log('esta mal');
                }
            }
            if (juego){ 
                settablaUpColor(false)
            switch (juego) {
                case 'Catan':
                    aux='Catan';
                    setfondo('contenedorEst fondoCatan');
                    
                  break;
                case 'TerraformingMars':
                    aux='Terraforming';
                    setfondo('contenedorEst fondoTerra');                   
                break;
                case 'Fifa':
                    aux='Fifa';   
                    setfondo('contenedorEst fondoFifa');           
                break;               
                default:
                    console.log('esta mal');
            }
        }
        
        getProductos(aux)
        .then(data=>{
            console.log(data);
            const arreEstOrd=data;
            arreEstOrd.sort((a,b) =>  {
                if (a.Pts > b.Pts)
                    return -1;
                else if (a.Pts < b.Pts)
                    return 1;
                else 
                    if (a.PJ<b.PJ)
                        return -1;
                    else if (a.PJ> b.PJ)
                        return 1;
                    else 
                        return 0;
            });  
            const arreAux = <ItemDetail plantilla={arreEstOrd}/>
            setarreEst(arreAux)})        
    }, [modalidad,juego]);   

        return (
        <div className={fondo +" "+"altoEstadistica"}>            
            <div className='d-flex flex-column align-items-center'>            
                <h1 className='tituloEst'>{juego ? juego : modalidad}</h1>       
                <table className="table">
                    <thead className={tablaUpColor?"colorArribaMilitar":"colorArribaResto"}>
                        <tr className=''>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">PJ</th>
                            <th scope="col">PG</th>
                            <th scope="col">PE</th>
                            <th scope="col">PP</th>
                            <th scope="col">Pts</th>
                        </tr>
                    </thead>  
                    <tbody className='colorAbajo'>
                        {arreEst}
                    </tbody>     
                </table> 
            </div>
        </div>
    );
}

export default Estadisticas;
