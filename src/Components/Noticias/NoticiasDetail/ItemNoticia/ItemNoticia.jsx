import React from 'react';

const ItemNoticia = ({dato}) => {
    return (        
        <div className=' noticias d-flex'>  
            <div className='contendorImg'>
                <img src={dato.img} alt="" />
            </div>   
            <div className=' noticiasInfo mt-4'>                 
                 <h1 className='text-center titu'>{dato.titulo}</h1>                 
                 <p className='text-light p-5'>{dato.texto}</p>
            </div>
            
        </div>
    );
}

export default ItemNoticia;
