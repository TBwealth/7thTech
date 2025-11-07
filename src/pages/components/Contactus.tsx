/* eslint-disable @typescript-eslint/no-explicit-any */
import contactusBg from '../../assets/images/footerImage.png';
import logo from '../../assets/images/logo.png';
import whiteLogo from '../../assets/images/whiteLogo.png';
import mailIcon from "../../assets/icons/mailIcon.png";
import phoneIcon from "../../assets/icons/phoneIcon.png";
import { useState } from 'react';
import rightArrow from '../../assets/icons/tabler_arrow-right.svg';
import xicon from '../../assets/icons/mage_x.svg';
import facebookicon from '../../assets/icons/uil_facebook.svg';
import instagramicon from '../../assets/icons/basil_instagram-solid.svg';
import linkedicon from '../../assets/icons/mdi_linkedin.svg';
import {handleMenuClick} from "../../utilities/helper"

export default function Contactus() {
  const [showFullNameLabel, setContFullNameLabel] = useState<boolean>(false);
  const [showEmailLabel, setContEmailLabel] = useState<boolean>(false);

  const [showPhoneLabel, setContPhoneLabel] = useState<boolean>(false);

  const [showMessageLabel, setContMessageLabel] = useState<boolean>(false);

  return (
    <div className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${contactusBg})` }}>
      <div className='w-[90%] md:w-[80%] mx-auto py-8! '>
        <div className='grid md:grid-cols-12 grid-cols-1 gap-2'>
          <div className='md:col-span-4 2xl:pt-16!'>
            <div className='border border-secondary rounded-lg px-6! py-12 bg-white shadow-md'>
              <div className='flex flex-col space-y-4!'>
                <div><img src={logo} className='md:w-20 2xl:w-32' /></div>
                <div>
                  <h4 className='font-black! text-2xl!'>Let’s Connect</h4>
                  <p className='text-[#5A5A5A]'>"We are here to help! Whether you have questions, feedback, or collaboration opportunities, do not hesitate to reach out. Our team is ready to work with you."</p>
                </div>
                <div className='py-4 flex-col space-y-2! flex'>
                  <div className='flex space-x-2!'>
                    <div><img src={mailIcon} alt='mail' /></div>
                    <div className='flex items-center text-black! font-bold!'>info@7thtechsolutions.com</div>
                  </div>
<div className='flex space-x-2!'>
                    <div><img src={phoneIcon} alt='mail' /></div>
                    <div className='flex items-center text-black! font-bold!'>+ 234 7033 814 160</div>
                  </div>
                </div>
                <div>
                  {showFullNameLabel && (
                     <label className="w-full text-sm font-bold">
                  Full name 
                  </label>
                  )}
                 
                <input
                  type="text"
                  className="w-full border-b-2 border-b-gray-700 focus:ring-0 focus:outline-none py-2"
                    placeholder="Full name"
                    onFocus={() => setContFullNameLabel(true)}
                    onBlur={(e: any) => {
                      setContFullNameLabel(e.target.value !== "");
                    }}
                  
                />
                </div>
                 <div>
                  {showEmailLabel && (
                     <label className="w-full text-sm font-bold">
                  Email
                  </label>
                  )}
                 
                <input
                  type="text"
                  className="w-full border-b-2 border-b-gray-700 focus:ring-0 focus:outline-none py-2"
                    placeholder="Email"
                    onFocus={() => setContEmailLabel(true)}
                    onBlur={(e: any) => {
                      setContEmailLabel(e.target.value !== "");
                    }}
                  
                />
                </div>
                 <div>
                  {showPhoneLabel && (
                     <label className="w-full text-sm font-bold">
                  Phone number
                  </label>
                  )}
                 
                <input
                  type="text"
                  className="w-full border-b-2 border-b-gray-700 focus:ring-0 focus:outline-none py-2"
                    placeholder="Phone number"
                    onFocus={() => setContPhoneLabel(true)}
                    onBlur={(e: any) => {
                      setContPhoneLabel(e.target.value !== "");
                    }}
                  
                />
                </div>
                 <div>
                  {showMessageLabel && (
                     <label className="w-full text-sm font-bold">
                 Message
                  </label>
                  )}
                 
                <textarea
                  rows={3}
                  className="w-full border-b-2 border-b-gray-700 focus:ring-0 focus:outline-none py-2"
                    placeholder="Message"
                    onFocus={() => setContMessageLabel(true)}
                    onBlur={(e: any) => {
                      setContMessageLabel(e.target.value !== "");
                    }}
                  
                />
                </div>
                  <div className='md:mt-4 flex justify-end'>
            <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition text-sm font-bold flex items-center space-x-2!">
              <span>Send message</span>
        <img src={rightArrow} alt="Right Arrow" />
            </button>

          </div>
              </div>
            </div>
          </div>
          <div className='md:col-span-8'>
            <div className='w-full h-full flex items-end '>
              <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className='flex items-end'>
<div className='flex flex-col space-y-4! text-white px-6'>
                    <h1 className='text-3xl font-black'>Company</h1>
                    <a onClick={() => handleMenuClick('home')} className=' font-medium cursor-pointer'>Home</a>
                      <a onClick={()=>handleMenuClick('product')} className=' font-medium cursor-pointer'>Products</a>
                      <a onClick={()=>handleMenuClick('service')} className=' font-medium cursor-pointer'>Services</a>
                    <a onClick={() => handleMenuClick('about')} className=' font-medium cursor-pointer'>About us</a>              
                
                  <a onClick={()=>handleMenuClick('contact')} className=' font-medium cursor-pointer'>Contact us</a>
                </div>
                </div>
                
                <div className='flex flex-col space-y-2!'>
                  <div className='flex space-x-2! items-center '>
                    <img src={whiteLogo} className='w-20' />
                  <h1 className='text-white text-2xl font-bold!'>7th Technology Solutions</h1>
                  </div>
                  <p className='text-white text-lg'>At 7th Technology Solutions, we believe in the transformative power of technology to shape a better future. </p>
                  <div className='flex space-x-4!'>
                    <img src={xicon} alt='X' />
                    <img src={facebookicon} alt='facebook' />
                    <img src={instagramicon} alt='instagram' />
                    <img src={linkedicon} alt='linkedin' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
      
    </div>
  )
}