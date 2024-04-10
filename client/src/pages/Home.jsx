import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { logoutUser } = useContext(AuthContext);
  return (
    <div className='container mx-auto flex flex-col'>
      <div className='flex items-end justify-end mt-2'><Link onclick={() => logoutUser()} to="/login" className='border1 p-2 bg-pink-500 rounded-xl'>Logout</Link></div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-2'> Assignment Complete</h2>
        <p className='text-gray-400 text-sm'>Looking Forward to Working with the Aeonaxy Team.</p>
      </div>
    </div>
  )
}

export default Home
