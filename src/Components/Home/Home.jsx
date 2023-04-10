import React from 'react';
import CarouselF from '../CarouselF/CarouselF';
import Noticias from '../Noticias/Noticias';

const Home = () => {
    return (
        <>
            <CarouselF/>
            <div className='d-flex flex-column mt-5 gap-4 align-items-center'>
                <h1 className='text-light'>Noticias</h1>
                {/* <Noticias/> */}
            </div>
        </>
    );
}

export default Home;
