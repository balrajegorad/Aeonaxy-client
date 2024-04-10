import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { loginUser, loginError } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(formData.email, formData.password);
      if (!loginError) {
        navigate("/home");
      }
    } catch (error) {
      console.error('Error logging in:', error);
      
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden container p-4">
      <div className="p-6 relative">
        <p className='mb-16 right-0 absolute'>Not Registered? <Link to="/register"><span>SignUp</span></Link></p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
        {loginError && <div className="mb-4 text-red-500">{loginError?.message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" className="bg-black/10 mt-1 px-4 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} autoComplete="current-password" className="bg-black/10 mt-1 px-4 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="text-right">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent 
            shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
