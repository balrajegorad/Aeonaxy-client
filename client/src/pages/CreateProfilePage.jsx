import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FiCamera } from 'react-icons/fi';
import dribbble from '../assets/dribbble-logo.png'
import { IoIosArrowForward } from "react-icons/io";
import { AuthContext } from '../context/AuthContext'; 


const CreateProfilePage = () => {

  const [profileData, setProfileData] = useState({
    location: ""
  });
  const [profileImg, setProfileImg] = useState("");
  const [imgPreview, setImgPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isReadyToNavigate, setIsReadyToNavigate] = useState(false); 
  const [isDataFilled, setIsDataFilled] = useState(false); // Track if all data is filled

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({
      ...prevState,
      [name]: value
    }));
    checkNavigation();
  };

  const handlePhotoChange = (e) => {
    setProfileImg(e.target.files[0]);
    setImgPreview(URL.createObjectURL(e.target.files[0]));
    checkNavigation(); 
  };

  const checkNavigation = () => {
    // Check if both profile image and location are filled
    if (profileImg && profileData.location !== "") {
      setIsReadyToNavigate(true);
      setIsDataFilled(true); // All data is filled
    } else {
      setIsReadyToNavigate(false);
      setIsDataFilled(false); // Not all data is filled
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let imgUrl = ""; 

      if (profileImg && (
        profileImg.type === "image/png" ||
        profileImg.type === "image/jpg" ||
        profileImg.type === "image/jpeg"
      )) {
        const image = new FormData();
        image.append("file", profileImg);
        image.append("cloud_name", "dnzg7wcvk");
        image.append("upload_preset", "vgfs9tby");

        const response = await fetch("https://api.cloudinary.com/v1_1/dnzg7wcvk/image/upload", {
          method: "post",
          body: image,
        });
        const imgData = await response.json();
        console.log("Image data", imgData)
        imgUrl = imgData.url.toString();
      }
      

      setIsLoading(false);

      if (isReadyToNavigate) {
        navigate("/describe-yourself");
      }
    } catch (err) {
      console.log("Error in upload img,", err);
      setIsLoading(false);
    }
  };


  const handleGoBack = () => {
    window.history.back(); 
  };

  return (
    <div className='container mx-auto flex flex-col gap-16'>
      <div className='p-4'>
        <img src={dribbble} alt="" className='h-[30px] w-[60]' />
      </div>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="p-6 flex gap-4 flex-col">
        <h2 className='text-2xl font-semibold text-gray-800 mb-2 flex-shrink-0 block'>Welcome! Let's create your profile</h2>
        <p className='text-gray-400 text-sm'>Let others get to know you better! You can do these later</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-6 flex-shrink-0">Add an Avatar</h3>
        <form onSubmit={handleSubmit} className='flex gap-10 flex-col'>
         <div className='flex gap-10'>
            <div className='relative h-[100px] w-[100px] rounded-full border border-dotted border-black border-opacity-50 flex items-center justify-center'>
              {imgPreview ? (
                <img src={imgPreview} alt='profile img' className='object-cover w-full h-full rounded-full' />
              ) : (
                <div className='flex gap-6'>
                  <label>
                   <FiCamera size={40} className="text-gray-400" />
                  </label>
                  <input type="file" id="photo" name="photo" onChange={handlePhotoChange} className="hidden" />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="photo" className="cursor-pointer p-2 bg-black/10 border1 rounded-md">
                Choose Photo
                <input type="file" id="photo" name="photo" onChange={handlePhotoChange} className="hidden" />
                </label>
                <p className='text-gray-400 text-sm flex items-center'> <IoIosArrowForward />Or choose one of our defaults</p>
            </div>
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block text-xl font-semibold text-gray-800 ">Add your Location</label>
                <input type="text" id="location" name="location" onChange={handleChange} className="mt-1 px-4 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
          <div className="text-center flex flex-col">
            {isReadyToNavigate ? (
              <button type="submit" className="bg-pink-500 hover:bg-indigo-700 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium
               rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {isLoading? "Loading..." : "Next"}
              </button>
            ) : null}

            
            {isDataFilled && (
              <button 
                onClick={handleGoBack} 
                className="ml-2  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium
               rounded-md text-gray-400"
              >
                or press to <span>Return</span>
              </button>
            )}
         </div>
       </form>
      </div>
      </div>
    </div>
  );
};

export default CreateProfilePage;
