import empoweringImage from '../../assets/images/empowering_image.png';
import backgroundImage from '../../assets/images/Background.png';
import innovationExcellenceIcon from '../../assets/images/innovationExcellenceIcon.png';
import innovationList from '../../assets/images/innovationList.png';

import aboutShapeImage from '../../assets/images/shape1.png';
import aboutShapeImage2 from '../../assets/images/shape2.png';
import leftUnion from '../../assets/icons/Union.svg';
import eclipseIcon from '../../assets/icons/EllipseIcon.svg';
import rightArrow from '../../assets/icons/tabler_arrow-right.svg';
import organizedTeamIcon from '../../assets/icons/organizedTeamIcon.svg';
import latestBusinessIcon from '../../assets/icons/latestBusinessIcon.svg';
import longLastingIcon from '../../assets/icons/longLastingIcon.svg';
import { Progress } from 'antd';
import {handleMenuClick} from "../../utilities/helper"

export default function Aboutus() {
  return (
    <div className='bg-no-repeat' style={{ backgroundImage: `url(${aboutShapeImage})` }}>   
      <div className='w-[90%] md:w-[80%] mx-auto p-8'>
         <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
        <div className='hidden md:p-12 p-6 md:flex justify-end items-center'>
          <img src={empoweringImage} alt="About Us" className="w-[30vw] h-auto" />
        </div>
        <div className='md:py-12 py-6 flex flex-col space-y-2'>
          <div className='flex'>
            <h4 className='text-xl font-medium'>About us</h4>
            <img src={leftUnion} alt="Decoration" className="ml-4 mt-1" />
          </div>
          <h2 className='text-4xl font-bold mt-4'>Empowering the Future with our Innovative Technology Solutions </h2>
          <p className='md:w-[85%] text-[#6C6C6C]'>At 7th Technology Solutions, we believe in the transformative power of technology to shape a better future. Founded on the principles of innovation, integrity, and excellence, we have been at the forefront of driving positive change through cutting-edge solutions since our inception.</p>
          <div className='flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-6 mt-2'>
            <div className='flex flex-col space-y-2'>
              <div className='flex space-x-2'>
                <img src={eclipseIcon} alt="Ecclipse Icon" />
                <h4 className='font-medium'>Tech Services Management</h4>
              </div>
<div className='flex space-x-2'>
                <img src={eclipseIcon} alt="Ecclipse Icon" />
                <h4 className='font-medium'>IT Consultation Solution</h4>
              </div>
            </div>
            <div className='flex space-x-2'>
              <div>
                <Progress type="circle" size={60} percent={98} strokeColor="#7930F4" />
              </div>
              <div className='flex flex-col'>
                <h4 className='font-bold text-xl'>Clients Satisfaction</h4>
                <p className='md:w-[85%] text-[#6C6C6C] text-sm'>Maintaining High level of Customer satisfaction rate</p>
              </div>
            </div>
          </div>
          <div className='md:mt-4 mt-6'>
            <button onClick={()=>handleMenuClick('service')} className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition text-sm font-bold flex items-center space-x-2">
              Explore More About Us
        <img src={rightArrow} alt="Right Arrow" />
            </button>

          </div>
        </div>
      </div>
       </div>
     

      <div className='bg-no-repeat bg-cover' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='w-[90%] md:w-[80%] mx-auto p-8'>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className='flex space-x-2 items-center border border-white rounded-lg p-4'>
              <img src={organizedTeamIcon} alt="Team Icon"  />
              <h4 className='font-black text-xl w-[50%] text-white'>Organized Team
of Professionals</h4>
            </div>

                <div className='flex space-x-2 items-center border border-white rounded-lg p-4'>
              <img src={latestBusinessIcon} alt="Team Icon"  />
              <h4 className='font-black text-xl w-[50%] text-white'>Organized Team
of Professionals</h4>
            </div>

                <div className='flex space-x-2 items-center border border-white rounded-lg p-4'>
              <img src={longLastingIcon} alt="Team Icon"  />
              <h4 className='font-black text-xl w-[50%] text-white'>Organized Team
of Professionals</h4>
            </div>

          </div>
          </div>

      </div>
      <div className='bg-no-repeat' style={{ backgroundImage: `url(${aboutShapeImage2})` }}>
        <div className='w-[90%] md:w-[80%] mx-auto p-8'>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
          <div className='md:pt-16 pt-8 flex flex-col space-y-2 '>
          <div className='flex '>
            <h4 className='text-xl font-medium'>Why we are the best</h4>
            <img src={leftUnion} alt="Decoration" className="ml-4 mt-1" />
            </div>
            <h2 className='text-4xl font-bold mt-4'>For Innovation, Excellence and Lasting Solution, Choose us!.</h2>
            <div className='w-full'>
              <img src={innovationList} alt="Innovation List" />
            </div>
                   <div className='md:mt-4'>
            <button onClick={()=>handleMenuClick('contact')} className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition text-sm font-bold flex items-center space-x-2">
              Contact Us
        <img src={rightArrow} alt="Right Arrow" />
            </button>

          </div>
          </div>
          <div className='hidden md:flex'>
            <img src={innovationExcellenceIcon} alt="About Us" className="w-[30vw] h-auto" />
          </div>
       
        
        </div>
        </div>
    
      </div>
      
    </div>
  )
}