import React from 'react';

const DetailsCard = ({ card }) => {
    const {
        id,
        name,
        thumbnail,
        banner,
        frequency,
        price,
        description,
        tech_category,
        features,
        subscription_benefits,
        ratings,
        number_of_reviews
    } = card;


    return (
       <div>
         <div className='flex justify-between max-w-9/12 mx-auto'>
            <div>
                <h1 className='font-bold text-2xl'>{name}</h1>
                <p className='text-accent'>{description}</p>
                <h1 className='font-bold'> key Features :</h1>
                {
                    features?.map(fe => <p key={fe} className='text-sm text-gray-500'>{fe}</p>)
                }
                <h4> Number Of Reviews  <span className='font-bold text-secondary'>{number_of_reviews}</span></h4>
                <p> <span className='font-bold'> Rating :</span> {ratings}</p>

            </div>
            <img src={thumbnail} alt="" />

        </div>
       </div>
    );
};

export default DetailsCard;