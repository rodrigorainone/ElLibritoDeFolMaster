import React from 'react';
import Item from '../Item/Item';
import ItemFifa from '../ItemFifa/ItemFifa';

const ItemDetail = ({plantilla,juego}) => {
    return (
        <>
            {juego==='Fifa'?plantilla.map(player=><ItemFifa data={player} indice={ plantilla.indexOf(player)} key={plantilla.indexOf(player)}/>):plantilla.map(player=><Item data={player} indice={ plantilla.indexOf(player)} key={plantilla.indexOf(player)}/>)}
        </>
    );
}

export default ItemDetail;
