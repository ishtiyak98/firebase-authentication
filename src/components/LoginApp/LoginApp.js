import React from 'react';
import githubLogo from "../../Assets/github-logo-27170.png";
import googleLogo from "../../Assets/google-logo-9824.png";
import fbLogo from "../../Assets/logo-facebookpng-32240.png";
import twitter from "../../Assets/logo-twitter-png-5859.png";


const LoginApp = () => {
    return (
        <div className='mt-4'>
            <h4 className='text-center font-semibold text-indigo-600 text-xl'>---------------- or ----------------</h4>
            <h4 className='text-center font-semibold text-indigo-600 text-xl'>login in with</h4>
            <div className='w-full lg:w-4/5 md:w-4/5 mx-auto flex justify-between items-center my-3'>
                <button><img className='w-[42px] h-[42px] rounded-full transition-transform duration-800 hover:scale-125' src={googleLogo} alt=""/></button>
                <button><img className='w-[60px] h-[60px] rounded-full transition-transform duration-800 hover:scale-125' src={githubLogo} alt=""/></button>
                <button><img className='w-[38px] h-[38px] rounded-full transition-transform duration-800 hover:scale-125' src={fbLogo} alt=""/></button>
                <button><img className='w-[55px] h-[55px] rounded-full transition-transform duration-800 hover:scale-125' src={twitter} alt=""/></button>
            </div>
        </div>
    );
};

export default LoginApp;