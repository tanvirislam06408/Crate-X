import React from 'react';
import { useLoaderData } from 'react-router';

const Profile = () => {
    const cardData=useLoaderData()
    console.log(cardData);
    
    return (
        <div>
            <h1>Your profile</h1>
        </div>
    );
};

export default Profile;