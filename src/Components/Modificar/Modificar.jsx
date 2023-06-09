import React from 'react';
import { getProductos , getProducto , updateProducto , deletePlayer,agregarPlayer,agregarPlayerFifa} from '../../Firebase/firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify'

const Modificar = () => {

    const [nombres,setnombres] = useState([])
    const [nombresRender,setnombresRender]= useState([])
    const [cambioNombres, setcambioNombres] = useState(true)
    const datosFormulario = React.useRef()
    const datosFormulario2 = React.useRef()
    const datosFormulario3 = React.useRef()
    const datosFormulario4 = React.useRef()
    const {modalidad} = useParams();
    let aux;

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
        case 'Catan':
            aux='Catan';
            
        break;
        case 'Terraforming':
            aux='Terraforming';            
        break;
        case 'Fifa':
            aux='Fifa';            
        break;
        default:
        console.log('esta mal');
    }
    useEffect(() => {
        
        getProductos(aux)
        .then(element=>{
            
            const nombresaux=element.map((nombre)=>({
                nombre:nombre.nombre, 
                id:nombre.id
                }));           
            setnombres(nombresaux)
            setnombresRender(nombresaux)
            
        })
    }, [cambioNombres]);

   
  
    
    
    
    const consultarFormulario = (e) => {
        
        e.preventDefault()       
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        
        const found = nombres.find(element => element.nombre===cliente.nombre);
        console.log(found)
        if (aux==='Fifa'){
            console.log(cliente)
            switch (cliente.resultado) {
                case 'Gano':                   
                            getProducto(found.id,aux).then(prodBDD => {                                
                                console.log("tuky pro")
                                console.log(prodBDD)
                                prodBDD.Pts += 3 //suma los puntos + 3
                                prodBDD.PG +=1
                                prodBDD.PJ +=1
                                let auxiliarGF = parseInt(prodBDD.GF) + parseInt(cliente.GF)
                                console.log(auxiliarGF)
                                prodBDD.GF = auxiliarGF
                                let auxiliarGC = parseInt(prodBDD.GC) + parseInt(cliente.GC)
                                prodBDD.GC = auxiliarGC
                                let auxiliarDif = (auxiliarGF) - (auxiliarGC)
                                prodBDD.Dif = auxiliarDif
                                updateProducto(found.id, prodBDD,aux)
                            }) 
                            
                           
                                    
                               
                  break;
                case 'Perdio':
                       
                            getProducto(found.id,aux).then(prodBDD => {   
                                prodBDD.PP +=1                  
                                prodBDD.PJ +=1
                                let auxiliarGF = parseInt(prodBDD.GF) + parseInt(cliente.GF)
                                console.log(auxiliarGF)
                                prodBDD.GF = auxiliarGF
                                let auxiliarGC = parseInt(prodBDD.GC) + parseInt(cliente.GC)
                                prodBDD.GC = auxiliarGC
                                let auxiliarDif = (auxiliarGF) - (auxiliarGC)
                                prodBDD.Dif = auxiliarDif
                                updateProducto(found.id, prodBDD,aux)
                            }) 
                        
                        
                      
                  break;
                case 'Empato':
                        
                            getProducto(found.id,aux).then(prodBDD => {
                                prodBDD.PE +=1
                                prodBDD.Pts += 1 //suma los puntos + 1
                                prodBDD.PJ +=1
                                let auxiliarGF = parseInt(prodBDD.GF) + parseInt(cliente.GF)
                                console.log(auxiliarGF)
                                prodBDD.GF = auxiliarGF
                                let auxiliarGC = parseInt(prodBDD.GC) + parseInt(cliente.GC)
                                prodBDD.GC = auxiliarGC
                                let auxiliarDif = (auxiliarGF) - (auxiliarGC)
                                prodBDD.Dif = auxiliarDif
                                updateProducto(found.id, prodBDD,aux)
                            })                    
                                    
                      
                  break;            
                default:
                  console.log('Lo lamentamos, por el momento no disponemos de ' + cliente.resultado + '.');
              } 
        }
        else{
            switch (cliente.resultado) {
                case 'Gano':                   
                            getProducto(found.id,aux).then(prodBDD => {
                                console.log("tuky pro")
                                console.log(prodBDD)
                                prodBDD.Pts += 3 //suma los puntos + 3
                                prodBDD.PG +=1
                                prodBDD.PJ +=1                                
                                updateProducto(found.id, prodBDD,aux)
                            }) 
                            
                           
                                    
                               
                  break;
                case 'Perdio':
                       
                            getProducto(found.id,aux).then(prodBDD => {   
                                prodBDD.PP +=1                  
                                prodBDD.PJ +=1                                
                                updateProducto(found.id, prodBDD,aux)
                            }) 
                        
                        
                      
                  break;
                case 'Empato':
                        
                            getProducto(found.id,aux).then(prodBDD => {
                                prodBDD.PE +=1
                                prodBDD.Pts += 1 //suma los puntos + 1
                                prodBDD.PJ +=1                                
                                updateProducto(found.id, prodBDD,aux)
                            })                    
                                    
                      
                  break;            
                default:
                  console.log('Lo lamentamos, por el momento no disponemos de ' + cliente.resultado + '.');
              } 
        }
        
        toast.success(`¡El cambio  fue realizada con exito`)   
        }


        const consultarFormulario2 = (e) => {            
            e.preventDefault()       
            const datForm2 = new FormData(datosFormulario2.current)
            const cliente2 = Object.fromEntries(datForm2)

            console.log(cliente2)
            const found2 = nombres.find(element => element.nombre===cliente2.nombre);

            if (aux==='Fifa'){
                getProducto(found2.id,aux).then(prodBDD => {   
                    prodBDD.PJ = cliente2.PJ
                    prodBDD.PG = cliente2.PG               
                    prodBDD.PE = cliente2.PE
                    prodBDD.PP = cliente2.PP
                    prodBDD.GF = cliente2.GF
                    prodBDD.GC = cliente2.GC
                    prodBDD.Dif = cliente2.Dif
                    prodBDD.Pts = cliente2.Pts
                    updateProducto(found2.id, prodBDD,aux)
                })

            }else{
                getProducto(found2.id,aux).then(prodBDD => {   
                    prodBDD.PJ = cliente2.PJ
                    prodBDD.PG = cliente2.PG               
                    prodBDD.PE = cliente2.PE
                    prodBDD.PP = cliente2.PP
                    prodBDD.Pts = cliente2.Pts
                    updateProducto(found2.id, prodBDD,aux)
                })
            }            
            toast.success(`¡El cambio  fue realizada con exito`)
        }

        const consultarFormulario3 = (e) => {            
            e.preventDefault()       
            const datForm3 = new FormData(datosFormulario3.current)
            const cliente3 = Object.fromEntries(datForm3)
            console.log(cliente3)
            const found3 = nombres.find(element => element.nombre===cliente3.nombre);
            deletePlayer(found3.id,aux)      
            setcambioNombres(!cambioNombres)                
            toast.success(`¡El cambio  fue realizada con exito`)
        }

          const consultarFormulario4 = (e) => {            
            e.preventDefault()       
            const datForm4 = new FormData(datosFormulario4.current)
            const cliente4 = Object.fromEntries(datForm4)
            console.log(cliente4.nombre)            
             if (aux==='Fifa'){
                agregarPlayerFifa(cliente4.nombre,aux)
            }
            else{
                agregarPlayer(cliente4.nombre,aux) 
            }  
             
            setcambioNombres(!cambioNombres)                
           toast.success(`¡El cambio  fue realizada con exito`)
       } 
 
        


        const reiniciar = (e) =>{


            if (aux==='Fifa'){
                getProductos(aux)
                .then(element=>{

                element.forEach((player)=>{
                    player.PG=0
                    player.PE=0
                    player.PP=0
                    player.PJ=0
                    player.GF=0
                    player.GC=0
                    player.Dif=0
                    player.Pts=0
                    updateProducto(player.id, player,aux)
                })            
                })
            }
            else{
                getProductos(aux)
                .then(element=>{

                element.forEach((player)=>{
                    player.PG=0
                    player.PE=0
                    player.PP=0
                    player.PJ=0
                    player.Pts=0
                    updateProducto(player.id, player,aux)
                })            
                })
            }

           
        toast.success(`¡El cambio  fue realizada con exito`)
        

        }





    return (
        <div className="container text-light" style={{marginTop:"20px"}}>
            <div className='d-flex flex-column align-items-center'>

         
         <h1 className='text-center mt-5 tituloPanel'>{modalidad}</h1>         
         <div className='mt-5 bordesTablero d-flex justify-content-center'>
            <div className='d-flex flex-column' style={{width:"25rem"}}>

          
            <h1 className='mb-5 mt-5 text-center'>Declarar Resultado</h1>
         
        <form className="d-flex flex-column " method="post" onSubmit={consultarFormulario} ref={datosFormulario}>
        
            <div className="mb-3 DeclararResul">
                
                    <label htmlFor="nombre" className="form-label DeclararResulPlayerLAbel">Player :</label>
                    <select name='nombre'>
                        {nombresRender.map((option) => (
                                <option value={option.nombre} key={nombresRender.indexOf(option)}>{option.nombre}</option>
                            ))}
                    </select>
                              
            </div>    
            <div className="mb-3 DeclararResul">
                
                    <label htmlFor="Resultado" className="form-label pl-5 align-self-start DeclararResulResulLabel">Resultado :</label>
                     <select className='align-self-start' name='resultado'>
                        <option value={"Gano"}>Gano</option>
                        <option value={"Empato"}>Empato</option>
                        <option value={"Perdio"}>Perdio</option>
                     </select>       

                     {modalidad==='Fifa'?(
                        <>
                            <div className='d-flex gap-2 mt-3'>
                                <label htmlFor="GF" className="form-label GF">GF:</label>
                                <input type="text" className="form-control border border-secondary inputTablero" name="GF" maxLength="1" pattern="^[0-9]+" required/>     
                            </div>
                            <div className='d-flex gap-2 mt-3'>
                                <label htmlFor="GC" className="form-label GC">GC:</label>
                                <input type="text" className="form-control border border-secondary inputTablero" name="GC" maxLength="1" pattern="^[0-9]+" required/>     
                            </div>
                        </>
                     ):(<></>)}
                              
            </div>
           
            <button type="submit" className="btn btn-primary mt-5 mb-5 align-self-center">Mandar Resultado</button>
        </form>
        </div>
        </div>   
        <div className='mt-5 bordesTablero d-flex flex-column align-items-center'>
        <h1 className='mb-5 mt-5 text-center'>Modificar Valores por Jugador</h1>
        <form method="post" onSubmit={consultarFormulario2} ref={datosFormulario2}>
        
            <div className="mb-3 d-flex">
                <label htmlFor="nombre" className="form-label DeclararResulPlayerLAbel">Player :</label>
                <select className="" name='nombre'>
                    {nombresRender.map((option) => (
                            <option value={option.nombre} key={nombresRender.indexOf(option)}>{option.nombre}</option>
                        ))}

                </select>
            </div>    
            <div className="ModVal">

                <div className='d-flex gap-2 mt-3'>
                    <label htmlFor="PJ" className="form-label PJ">PJ:</label>
                    <input type="text" className="form-control border border-secondary inputTablero" name="PJ" maxLength="1" pattern="^[0-9]+" required/>  
                </div>
               
                <div className='d-flex gap-2 mt-3'>
                    <label htmlFor="PG" className="form-label PG">PG:</label>
                    <input type="text" className="form-control border border-secondary inputTablero" name="PG" maxLength="1" pattern="^[0-9]+" required/>     
                </div>
               

               <div className='d-flex gap-2 mt-3'>
                     <label htmlFor="PE" className="form-label PE">PE:</label>
                    <input type="text" className="form-control border border-secondary inputTablero" name="PE" maxLength="1" pattern="^[0-9]+" required/>        

               </div>


               <div className='d-flex gap-2 mt-3'>
                    <label htmlFor="PP" className="form-label PP">PP:</label>
                     <input type="text" className="form-control border border-secondary inputTablero" name="PP" maxLength="1" pattern="^[0-9]+" required/>       
               </div>

               {modalidad ==='Fifa'?( 
                <>
                    <div className='d-flex gap-2 mt-3'>
                        <label htmlFor="GF" className="form-label GF">GF:</label>
                        <input type="text" className="form-control border border-secondary inputTablero" name="GF" maxLength="1" pattern="^[0-9]+" required/>     
                    </div>
                    <div className='d-flex gap-2 mt-3'>
                        <label htmlFor="GC" className="form-label GC">GC:</label>
                        <input type="text" className="form-control border border-secondary inputTablero" name="GC" maxLength="1" pattern="^[0-9]+" required/>     
                    </div>
                    <div className='d-flex gap-2 mt-3'>
                        <label htmlFor="Dif" className="form-label Dif">Dif:</label>
                        <input type="text" className="form-control border border-secondary inputTablero" name="Dif" maxLength="1" pattern="^[0-9]+" required/>     
                    </div>
                </>             
                    
                    ):( <></> )                    
                } 

               <div className='d-flex gap-2 mt-3'>
                      <label htmlFor="Pts" className="form-label Pts">Pts:</label>
                      <input type="text" className="form-control border border-secondary inputTablero" name="Pts" maxLength="1" pattern="^[0-9]+" required/>     
                </div>       

            </div>
            <div className="mb-3 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary mt-5 mb-5 ">Mandar Cambios</button>
            </div>
        
        </form>              

        </div>

        <div className='mt-5 bordesTablero d-flex flex-column align-items-center'>
            <h1 className='mb-5 mt-5'> Reinicar Tablero</h1>
            <button type="submit" className="btn btn-primary mt-5 mb-5" onClick={reiniciar}>Reinicar Tablero</button>
        </div>
        <div className='mt-5 bordesTablero d-flex justify-content-center'>
            <div className='d-flex flex-column' style={{width:"25rem"}}>          
                <h1 className='mb-5 mt-5 text-center'>Eliminar Jugador</h1>         
                <form className="d-flex flex-column " method="post" onSubmit={consultarFormulario3} ref={datosFormulario3}>        
                    <div className="mb-3 DeclararResul">                
                        <label htmlFor="nombre" className="form-label DeclararResulPlayerLAbel">Player :</label>
                        <select name='nombre'>
                            {nombresRender.map((option) => (
                             <option value={option.nombre} key={nombresRender.indexOf(option)}>{option.nombre}</option>
                            ))}
                        </select>                              
                    </div>        
                    <button type="submit" className="btn btn-primary mt-5 mb-5 align-self-center">Eliminar Player</button>
                </form>
            </div>
        </div>   
        <div className='mt-5 bordesTablero d-flex justify-content-center'>
            <div className='d-flex flex-column' style={{width:"25rem"}}>          
                <h1 className='mb-5 mt-5 text-center'>Agregar Jugador</h1>         
                <form className="d-flex flex-column " method="post" onSubmit={consultarFormulario4} ref={datosFormulario4}>        
                    <div className="mb-3 ">                
                        <label htmlFor="nombre" className="form-label ">Nombre Del Nuevo Player :</label>
                        <input type="text" className="form-control border border-secondary" name="nombre" maxLength="8"  required/>                             
                    </div>        
                    <button type="submit" className="btn btn-primary mt-5 mb-5 align-self-center">Agregar Player</button>
                </form>
            </div>
        </div>      
        </div>
    </div>
    );
}

export default Modificar;
