import React from 'react';
import Item from '../Item/Item';

const ItemDetail = ({plantilla}) => {
    return (
        <>
            {plantilla.map(player=><Item data={player} indice={ plantilla.indexOf(player)} key={plantilla.indexOf(player)}/>)}
        </>
    );
}

export default ItemDetail;
