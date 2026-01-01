import React from 'react';

const SlideTow = ({card}) => {

    const{price,thumbnail,name,description}= card;
    
    
    return (
        <div>
          
            {/* cards */}
            <div className="card bg-base-100 shadow-sm">
  <figure>
    <img className='object-cover w-3xs h-40'
      src={thumbnail}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='text-accent font-semibold'>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SlideTow;