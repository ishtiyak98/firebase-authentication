import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-indigo-600 py-2 text-center text-white'>
            <Link className='mx-2 px-6 py-2 hover:bg-indigo-800' to={"/"}>Login</Link>
            <Link className='mx-2 px-6 py-2 hover:bg-indigo-800' to={"/user-profile"}>Profile</Link>
        </div>
    );
};

export default Header;