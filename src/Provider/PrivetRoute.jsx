import React, { use } from 'react';
import { AuthContext } from './AuthProvier';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivetRoute = ({ children }) => {
    const location=useLocation();
    
    
    const { user,SetLoading,  loading } = use(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    if (user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivetRoute;