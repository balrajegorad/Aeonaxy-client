import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { AuthContext } from '../context/AuthContext'; 
import { LuMailCheck } from "react-icons/lu";
import Nav from './Nav';
import Footer from './Footer';

const VerifyEmail = () => {
  const [emailSent, setEmailSent] = useState(true);
  const { resendEmail } = useContext(AuthContext); 
  const { user } = useContext(AuthContext);
  console.log("Print User from Verify email", user)

  const handleResendEmail = () => {
    
    resendEmail(user)
      .then(() => {
      
        setEmailSent(true);
      })
      .catch((error) => {
        console.error('Error resending email:', error);
      });
  };

  return (
    <div>
      <Nav />
      <div className="container mx-auto overflow-hidden p-6 mt-4 flex flex-col gap-2 justify-center items-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Please Verify Your Email...</h2>
      {emailSent ? (
        <>
          <div className='text-9xl text-gray-400 '><LuMailCheck /></div>
          <p>Please verify your email address. We've sent a confirmation email to: </p>
          <p className='text-lg font-semibold text-gray-800'>{user?.email}</p>
          <p>Click the confirmation link in that email to begin using Dribbble.</p>
          <p>Didn't receive the email? Check your Spam folder, it may have been caught by a filter.
            If <br/> you still don't see it, you can <button onClick={handleResendEmail} className="text-blue-800">
           resend the confirmation email.
          </button></p>
        </>
      ) : (
        <>
          <p>Can't Resend Email</p>
        </>
      )}

      <p>Wrong email address?<Link to="/register" className='text-blue-800'>Change it.</Link></p>
      
      </div>
      
      <Footer />

    </div>
    
  );
};

export default VerifyEmail;