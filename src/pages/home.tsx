import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import HomeBanner from "./components/homeBanner";
import OurServices from "./components/OurServices";
import copyrightIcon from '../assets/icons/tabler_copyright.svg';
import Products from "./components/Products";


export default function HomePage() {
 const cuentYear = new Date().getFullYear();
  
  return (
    <div className='w-full'>
      <div id="home">
<HomeBanner />
      </div>
      <div id="about">  <Aboutus /></div>
      <div id="service"><OurServices /></div>
      <div id="product"><Products /></div>
       <div id="contact"><Contactus /></div>
    
      
      
      
      <div className="bg-black flex justify-center items-center flex-col text-white p-4">
        <div className="flex space-x-2">
          <img src={copyrightIcon} alt="copyright" />
          <h4>{`Copyrights ${cuentYear}. 7th Technology Solutions All Rights Reserved`}</h4>
        </div>
      </div>
    </div>
  );
}