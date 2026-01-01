import React, { useEffect, useState } from 'react';
import SingleCard from '../Pages/SingleCard';

const Cards = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('/card.json').then(res=>res.json()).then(data=>setData(data));
    },[])
    return (
        <div className='mt-11 '>
            <h2 className='mb-11 text-center font-bold text-3xl text-accent'>Chose One Plane</h2>
           <div  className="gap-5 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-11/12">
                 {data.map(card=> <SingleCard key={card.id} card={card}></SingleCard>)}
           </div>
        </div>
    );
};

export default Cards;