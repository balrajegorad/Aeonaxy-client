import React from 'react'
import logo from '../assets/dribbble-logo.png';
import { PiVolleyballLight } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { RiFacebookCircleLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoPinterest } from "react-icons/io5";
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
      <div className='bg-gray-300 bg-opacity-25 p-4 mt-24'>
          <div className='flex gap-8 mt-12 mx-auto container '>
              <div className='flex flex-col gap-4 w-[200px]'>
                  <div><img src={logo} alt="" /></div>
                  <p>Dribble is world's leading cummunity for creatives to share, grow and get hired</p>
                  <div className='flex gap-1'>
                      <PiVolleyballLight />
                      <CiTwitter />
                      <RiFacebookCircleLine />
                      <IoLogoInstagram />
                      <IoLogoPinterest/>
                  </div>
              </div>
              <div className='flex gap-1 flex-col'>
                  <span>For Designers</span>
                  <p>Go Pro!</p>
                  <p>Explore Design work</p>
                  <p>Design Block</p>
                  <p>Overtime podcast</p>
                  <p>Playoffs</p>
                  <p>Weekly Warm-Up</p>
                  <p>Refer a Friend</p>
                  <p>Code of conduct</p>
              </div>
              <div className='flex gap-1 flex-col'>
                  <span>Hire designers</span>
                  <p>Post a job Opening</p>
                  <p>Post a freelance project</p>
                  <p>Search for designers</p>
                  <span>Brands</span>
                  <p>Advertise with us</p>
              </div>
              <div className='flex gap-1 flex-col'>
                  <span>Company</span>
                  <p>About</p>
                  <p>Careers</p>
                  <p>Support</p>
                  <p>Media kit</p>
                  <p>Testinomials</p>
                  <p>API</p>
                  <p>Terms of Service</p>
                  <p>Privacy Policy</p>
                  <p>Cookies Policy</p>
              </div>
              <div className='flex gap-1 flex-col'>
                  <span>Directories</span>
                  <p>Desin Job</p>
                  <p>Designers for hire</p>
                  <p>Freelancing design for hiring</p>
                  <p>tags</p>
                  <p>place</p>
                  <span>Design Assets</span>
                  <p>Dribbble Marketplace</p>
                  <p>Creative Market</p>
                  <p>FontSpring</p>
                  <p>Font squrrel</p>
              </div>
              <div className='flex gap-1 flex-col'>
                  <span>Design Resorces</span>
                  <p>Freelancing</p>
                  <p>Design Hiring</p>
                  <p>Design portfolio</p>
                  <p>Design Education</p>
                  <p>Creative Process</p>
                  <p>Design Industry trend</p>
              </div>
          </div>

          <div className='container mt-16 mx-auto'>
              <div className='h-[1px] w-[100%] bg-black'></div>
              <div className='flex justify-between mt-2'>
                  <p className='flex gap-1 items-center'><FaCopyright/> 2023 Dribbble. All rights Reserved</p>
                  <p className='flex gap-1 items-center'>20,501,853 shots dribbbled <div><PiVolleyballLight  className='bg-pink-500 rounded-full'/></div></p>
              </div>
          </div>
      
    </div>
  )
}

export default Footer
