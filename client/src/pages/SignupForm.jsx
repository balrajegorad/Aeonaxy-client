import React, { useContext, useState } from 'react';
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import imgRegister from '../assets/138245.jpg'

const SignupForm = () => {
  const navigate = useNavigate();
  const { registerInfo, updateRegisterInfo, registerUser, registerError, isRegistered } = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      
      await registerUser();
      
      if (!registerError && isAllFieldsFilled()) {
        console.log("After",registerError)
        navigate("/createprofile");
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const isAllFieldsFilled = () => {
    return Object.values(registerInfo).every(value => value !== "");
  };

  return (
    <div className='flex justify-center items-center gap-16 relative mx-auto container'>
      <div className='top-0 right-0 absolute mt-6 mr-16'>
            <p>Already have a Member? <Link to="/login" className='text-blue-900 font-semibold'>Login</Link></p>
        </div>
      <div className=''>
        <img src={imgRegister} alt="" className='h-[100vh]'/>
      </div>
      <div>
        
        <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      
          <div className="p-6">
            <h2 className="text-2xl text-gray-800 mb-6 font-medium">Sign up to Dribbble</h2>
            {registerError && <div className="mb-4 text-red-500">{registerError?.message}</div>}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                  <input type="text" id="name" name="name"  onChange={(e) => updateRegisterInfo({ ...registerInfo, name: e.target.value })} className="mt-1 px-4 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-black/10" />
                </div>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
                  <input type="text" id="username" name="username"
                    onChange={(e) => updateRegisterInfo({ ...registerInfo, username: e.target.value })}
                    className=" bg-black/10 mt-1 px-4 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email address</label>
                <input type="email" id="email" name="email"
                  onChange={(e) => updateRegisterInfo({ ...registerInfo, email: e.target.value })} autoComplete="email"
                  className="bg-black/10 mt-1 px-4 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div className="mb-4">
               <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                <input type="password" id="password" name="password"
                  onChange={(e) => updateRegisterInfo({ ...registerInfo, password: e.target.value })} autoComplete="new-password"
                  className="bg-black/10 mt-1 px-4 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" id="acceptTerms" name="acceptTerms" checked={isChecked} onChange={handleCheckboxChange} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-900 cursor-pointer" onClick={handleCheckboxChange}>Creating an account means you're okay with our 
                  <span>Terms of Service, Privacy Policy</span>, and our default <span>Notification Settings.</span></label>
              </div>
              <div className="text-right">
                <button type="submit" disabled={!isChecked}
                  className={`${isChecked && isAllFieldsFilled() ? 'bg-pink-500 hover:bg-indigo-700' : 'bg-gray-300 cursor-not-allowed'} 
                  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
                 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>{isLoading? "Creating Your Account" : "Create Account" }</button>
              </div>
              <div className='mt-4'>
                <p className='text-gray-400 text-sm'>
                  This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span>Terms of Service</span> apply.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
