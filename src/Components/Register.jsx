import React, { use, useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvier';
import { Link, useNavigate } from 'react-router';
import Navbar from './Navbar';
import { Bounce, toast } from 'react-toastify';

const Register = () => {
    const [err, setErr] = useState('');
    const { createUserWithEmail,setUser,updatedData,signInGoogle } = useContext(AuthContext);
    // notify
      const notify=()=>{
  toast.success('🦄  User Register Successfully', {
position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
}

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const userUrl = e.target.photo.value;
        setErr('')
        console.log(email, password);

        createUserWithEmail(email, password)
            .then(result => {
                 const user= result.user;
                updatedData({displayName: name , photoURL:userUrl})
                .then(()=>{
                    setUser({...user,displayName: name , photoURL:userUrl});

                    navigate("/")
                    notify();
                })
                .catch(err=>setUser(user))
                
               
                

                
            })
            .catch((err) => {
                setErr(err.code)
            })
           

    }
     const signInwithGoogle=()=>{
                signInGoogle();
            }
    return (
      <div>
         <Navbar></Navbar>
         <div className='flex justify-center items-center h-screen'>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className="fieldset">
                                {/* email */}
                                <label className="label">Name</label>
                                <input required name='name' type="text" className="input" placeholder="Write Your Name" />

                                {/* email */}
                                <label className="label">Photo Url</label>
                                <input name='photo' type="text" className="input" placeholder="Photo Url (optional)" />
                                {/* email */}
                                <label className="label">Email</label>
                                <input required name='email' type="email" className="input" placeholder="Email" />
                                {/* password */}
                                <label className="label">Password</label>
                                <input required name='password' type="password" className="input" placeholder="Password" />
                                <p className='text-sm' >Already have an Account ? <Link to={'/login'}><span className='font-bold text-secondary'>Login</span></Link></p>
                               {
                                err && <p className='text-red-500'>{err}</p>
                               }
                                <button type='submit' className="btn btn-neutral mt-4">Login</button>
                                <button onClick={signInwithGoogle} className="btn mt-2.5 bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
                            </form>
                        </div>
                    </div>
       </div>
      </div>
    );
};

export default Register;