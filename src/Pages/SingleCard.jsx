import React from 'react';
import { Link } from 'react-router';

const SingleCard = ({card}) => {

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
            <div className="card mb-5 h-full  max-w-80 flex flex-col shadow- bg-base-200">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <img className='max-w-2xs max-h-32' src={thumbnail} alt="" />
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{name}</h2>
      <span className="text-xl">${price}</span>
    </div>
    <div>
     Category: {tech_category}
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
     {
      subscription_benefits.map(benifit=> <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{benifit}</span>
      </li>)
     }
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Real-time collaboration tools</span>
      </li>
    </ul>
    <div className=" gap-5 flex mt-auto space-y-3 ">
     <Link to={`/card-details/${id}`}> <button className="btn btn-primary">Read More</button></Link>
      <button className="btn btn-secondary">Subscribe</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleCard;