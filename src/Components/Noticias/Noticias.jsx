import React from 'react';
import { useEffect,useState } from 'react';
import NoticiasDetail from './NoticiasDetail/NoticasDetail';

const Noticias = () => {
    const [noticias,setnoticias] = useState([])
    useEffect(() => {
        fetch('../../Json/Noticias.json')
        .then (res => res.json())
        .then(data=>{
            const noticiasTot = <NoticiasDetail plantilla={data}/>
            setnoticias(noticiasTot)
        })
    }, []);
    return (
        <>
            {noticias}
        </>
    );
}

export default Noticias;
