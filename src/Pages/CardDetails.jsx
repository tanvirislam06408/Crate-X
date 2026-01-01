import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DetailsCard from './DetailsCard';
import Navbar from '../Components/Navbar';

const CardDetails = () => {
    const cardData = useLoaderData();
    const { id } = useParams();
    const [card, setCard] = useState({});
    useEffect(() => {
        const filtered = cardData.find(data => data.id == id);
        setCard(filtered);
        
    }, [cardData, id])


    return (
        <div>
            <Navbar></Navbar>
            <DetailsCard card={card}></DetailsCard>
        </div>
    );
};

export default CardDetails;