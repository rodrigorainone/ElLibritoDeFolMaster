import React from 'react';

const Item = ({data,indice}) => {
    return (
        <>
             <tr className='BordeTabla'>
                      <td>{indice+1}</td>       
                      <td>{data.nombre}</td>            
                      <td>{data.PJ}</td>
                      <td>{data.PG}</td>
                      <td>{data.PE}</td>
                      <td>{data.PP}</td>
                      <td>{data.GF}</td>
                      <td>{data.GC}</td>
                      <td>{data.Dif}</td>
                      <td>{data.Pts}</td>
                </tr>  
        </>
    );
}

export default Item;