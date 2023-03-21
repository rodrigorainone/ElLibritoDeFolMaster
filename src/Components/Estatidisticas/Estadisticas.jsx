import React from 'react';
import { useState ,useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

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
                        aux='../../Json/Coh1vs1.json';                                              
                      break;
                    case '2vs2':
                        aux='../../Json/Coh2vs2.json';
                        
                    break;                        
                    case '3vs3':
                        aux='../../Json/Coh3vs3.json';
                        
                      break;
                    case '4vs4':
                        aux='../../Json/Coh4vs4.json';
                        
                    break;
                    default:
                    console.log('esta mal');
                }
            }
            if (juego){ 
                settablaUpColor(false)
            switch (juego) {
                case 'Catan':
                    aux='../../Json/Catan.json';
                    setfondo('contenedorEst fondoCatan');
                    
                  break;
                case 'Terraforming Mars':
                    aux='../../Json/Terraforming.json';
                    setfondo('contenedorEst fondoTerra');
                   
                break;               
                default:
                    console.log('esta mal');
            }
        }
        
        fetch(aux)
        .then (res => res.json())
        .then(data=>{
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
        <div className={fondo}>
            <div className='d-flex justify-content-center'>
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
