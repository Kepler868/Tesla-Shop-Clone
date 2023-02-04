import React from 'react';
import { useNavigate } from 'react-router-dom';

const AutoAccesories = ({shopUrl, image, title, textColor }) => {
    const navigate= useNavigate()
    return (
        <div className='h-[100vh]'>
            <img className="swiper-img" src={image} />
            <div className="relative bottom-[200px] flex flex-col items-center max-[1200px]:bottom-[150px]">
                <h1 className="text-4xl text-white font-semibold"style={{ color: textColor }}>{title}</h1>
                <button onClick={() => navigate(`${shopUrl}`)} className="swiper-buy-button mt-6">Shop Now</button>
            </div>
        </div>
    );
};

export default AutoAccesories;