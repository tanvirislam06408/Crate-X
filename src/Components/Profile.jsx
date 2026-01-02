import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthProvier';

const Profile = () => {
    const { user } = use(AuthContext);


    return (
        <div className='flex h-screen gap-4 flex-col justify-center items-center'>
            <img src={`${user && user.photoURL}`} alt="" />
            <h1>{user && user.displayName
            }</h1>
            <p className='text-3xl'>{user?.email}</p>
            {
                user && <button className='btn btn-accent text-base-200'>Edit Profile</button>
            }

        </div>
    );
};

export default Profile;