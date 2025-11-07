import ServicesSectionBg from '../../assets/images/ServicesSectionBg.png';
import RightUnion from '../../assets/icons/UnionRight.png';
import SoftwareDevelomentImage from '../../assets/images/softwareDevelopment.png';
import softwareDevIcon from '../../assets/icons/softwareDevIcon.svg';
import webDevIcon from '../../assets/icons/webDevIcon.svg';
import cloudSolutionsIcon from '../../assets/icons/cloudSolutionIcon.svg';
import aiMlIcon from '../../assets/icons/aiMachineIcon.svg';
import WebDevelopment from '../../assets/images/WebDevelopment.png';
import cloudSolutions from '../../assets/images/cloudSolutions.png';
import aiMarchineLearning from '../../assets/images/aiMarchineLearning.png';

import cyberSecurityImage from '../../assets/images/cyberSecurity.jpg';
import ItSupport from '../../assets/images/itSupport.jpg';
import DataAnalytics from '../../assets/images/dataAnalytics.png';
import ConsultingStrategy from '../../assets/images/consulting.png';
import cyberSecurityIcon from '../../assets/icons/cybersecurity.svg';
import ItSupportIcon from '../../assets/icons/itSupportIcon.svg';
import ConsultingStrategyIcon from '../../assets/icons/consulting.svg';
import DataAnalyticsIcon from '../../assets/icons/dataAnalyticsIcon.svg';


export default function OurServices() {
  return (
    <div className='bg-no-repeat bg-cover' style={{ backgroundImage: `url(${ServicesSectionBg})` }}> 
      <div className='w-[90%] md:w-[80%] mx-auto p-8'>
        <div className='flex justify-center w-full '>
          <div className='flex text-white space-x-2 items-center'>
             <img src={RightUnion} alt="Decoration" className="ml-4 mt-1" />
            <h4 className='text-xl font-thin'>Our  Professional Services</h4>     
           
          </div>            
        </div>
        <div className='flex justify-center w-full '>
                  <h2 className='text-4xl font-bold mt-4 text-white text-center md:w-[60%] w-full'>Explore Our Comprehensive Technology Solutions</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5  gap-4 mt-8 mb-8'>
          <div className='p-2 flex flex-col space-y-2 bg-white rounded-lg col-span-1 w-full'>
            <div>
              <img src={SoftwareDevelomentImage} alt="Software Development" className='w-full' />
            </div>
            <div className='border border-primary rounded-lg p-2 flex justify-between'>
              <h4 className='font-black! text-primary'>Software Development</h4>
              <img src={softwareDevIcon} alt="Decoration" className="ml-4" />
            </div>
          </div>
                <div className='p-2 flex flex-col space-y-2 bg-white rounded-lg'>
            <div>
              <img src={WebDevelopment} alt="Web Development" className='w-full' />
            </div>
            <div className='border border-[#81026D] rounded-lg p-2 flex justify-between'>
              <h4 className='font-black! text-[#81026D]'>Web Development</h4>
              <img src={webDevIcon} alt="Decoration" className="ml-4" />
            </div>
          </div>
                <div className='p-2 flex flex-col space-y-2 bg-white rounded-lg'>
            <div>
              <img src={cloudSolutions} alt="Cloud Solutions" className='w-full' />
            </div>
            <div className='border border-[#A52A2A] rounded-lg p-2 flex justify-between'>
              <h4 className='font-black! text-[#A52A2A]'>Cloud Solutions</h4>
              <img src={cloudSolutionsIcon} alt="Decoration" className="ml-4" />
            </div>
          </div>
                <div className='md:col-span-2 p-2 flex flex-col space-y-2 bg-white rounded-lg'>
            <div>
              <img src={aiMarchineLearning} alt="AI and Machine Learning" className='w-full' />
            </div>
            <div className='border border-[#008000] rounded-lg p-2 flex justify-between'>
              <h4 className='font-black! text-[#008000]'>AI and Machine Learning</h4>
              <img src={aiMlIcon} alt="Decoration" className="ml-4 " />
            </div>
          </div>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-4 mt-4 mb-8'>
              <div className='p-2 flex flex-col justify-between space-y-2 bg-white rounded-lg'>
            <div className='h-[9.375rem]'>
              <img src={cyberSecurityImage} alt="Cyber Security" className='h-full w-full rounded-md' />
            </div>
            <div className='border border-[#100F0D] rounded-lg p-2 flex justify-between'>
              <h4 className='font-black! text-[#100F0D]'>Cyber Security</h4>
              <img src={cyberSecurityIcon} alt="Decoration" className="ml-4" />
            </div>
          </div>
              <div className='p-2 flex flex-col justify-between space-y-2 bg-white rounded-lg'>
            <div className='h-[9.375rem]'>
              <img src={ItSupport} alt="IT Support and Maintenance" className='h-full w-full rounded' />
            </div>
            <div className='border border-[#FF0000] rounded-lg p-2 flex justify-between'>
              <h4 className='font-black! text-[#FF0000]'>IT Support and Maintenance</h4>
              <img src={ItSupportIcon} alt="Decoration" className="ml-4" />
            </div>
          </div>
              <div className='p-2 flex flex-col space-y-2 bg-white rounded-lg'>
            <div>
              <img src={DataAnalytics} alt="Data Analytics" className='w-full' />
            </div>
            <div className='border border-[#FFA500] rounded-lg p-2 flex justify-between'>
              <h4 className='font-black! text-[#FFA500]'>Data Analytics</h4>
              <img src={DataAnalyticsIcon} alt="Decoration" className="ml-4" />
            </div>
          </div>
              <div className='p-2 flex flex-col space-y-2 bg-white rounded-lg'>
            <div>
              <img src={ConsultingStrategy} alt="Consulting and Strateg" className='w-full' />
            </div>
            <div className='border border-[#0000FF] rounded-lg p-2 flex justify-between'>
              <h4 className='font-black! text-[#0000FF]'>Consulting and Strategy</h4>
              <img src={ConsultingStrategyIcon} alt="Decoration" className="ml-4" />
            </div>
          </div>
        </div>
        <p className='text-white text-xl'>At 7th Technology Solutions, we're not just a technology provider – we're your trusted partner in navigating the complexities of the digital landscape and unlocking the full potential of your business. Experience the difference with 7th Technology Solutions and embark on a journey of innovation, growth, and success.</p>
      </div>   

      
    </div>
  )
}