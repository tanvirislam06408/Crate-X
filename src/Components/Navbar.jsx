import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userPng from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvier';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const navLinks = <>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/profile'}>Your Profile</NavLink>
    <NavLink to={'/about'}>About Us</NavLink>
  </>

  const handleLogout = () => {
    logOut()
      .then(result => {
        alert('successfuly log out')
      }
      )
      .catch(err => {
        console.log(err.code)
      })
  }
  return (
    <div className='mt-3 py-3'>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {
                navLinks
              }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Crate <span className='text-red-500'>X</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 font-semibold">
            {
              navLinks
            }
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {
            user && <p>{user.email}</p>
          }
          <NavLink to={'/profile'}> <img src={`${user ? user.photoURL : userPng}`} alt="" /></NavLink>
          {
            user ? <button onClick={handleLogout} className="btn bg-accent text-base-200">LogOut</button> : <Link to={'/login'}> <p className="btn bg-accent text-base-200">Login</p></Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;