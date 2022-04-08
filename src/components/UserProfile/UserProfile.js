import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const UserProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className='text-center'>
            {
                user ? (
                    <button onClick={()=>signOut(auth)} className='mt-7 px-6 py-2 rounded-lg text-white bg-indigo-600'>Logout</button>
                )
                : (
                    <button onClick={()=>console.log('asc')} className='mt-7 px-6 py-2 rounded-lg text-white bg-indigo-600'>Login</button>
                )
            }
            <h1 className='text-4xl font-bold text-center mt-12 mb-6'>User Profile</h1>
            <h2 className='text-2xl font-semibold mb-3'>User Name : {user?.displayName}</h2>
            <h2 className='text-2xl font-semibold mb-6'>Email : {user?.email}</h2>
            <img className='block mx-auto mb-3 rounded-full' src={user?.photoURL} alt="" />
        </div>
    );
};

export default UserProfile;