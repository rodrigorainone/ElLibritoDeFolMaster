import React from 'react';
import ItemNoticia from './ItemNoticia/ItemNoticia';

const NoticasDetail = ({plantilla}) => {
    return (
        <>
            {plantilla.map(item => <ItemNoticia dato={item} key={plantilla.indexOf(item)}/> )}
        </>
    );
}

export default NoticasDetail;
