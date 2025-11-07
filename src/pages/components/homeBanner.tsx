import { useEffect, useRef, useState } from 'react';
import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.png';
import logo from '../../assets/images/logo.png';
import { FiMenu } from "react-icons/fi";
import { Menu, type MenuProps } from 'antd';
import {handleMenuClick} from "../../utilities/helper"

type MenuItem = Required<MenuProps>['items'][number] & { label: React.ReactNode };

export default function HomeBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const items: MenuItem[] = [
   { key: 'home', label: 'Home' },
    { key: 'product', label: 'Products' },
    { key: 'service', label: 'Services' },
    { key: 'about', label: 'About us' },
  ];
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
const menuButtonRef = useRef<HTMLSpanElement | null>(null);
  const onClickMobileMenu: MenuProps['onClick'] = (e) => {
    setshowMobileMenu(false);
     handleMenuClick(e.key);
  };



useEffect(() => {
function handleOutsideClick(e: MouseEvent) {
     if (!showMobileMenu) return;
  const target = e.target as Node;
  if (mobileMenuRef.current) {
       const clickedInsideMenu = mobileMenuRef.current.contains(target);
    const clickedMenuButton = menuButtonRef.current?.contains(target);
    if (!clickedInsideMenu && !clickedMenuButton) setshowMobileMenu(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [showMobileMenu]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const backgroundImages = [banner1, banner2];
    return (
         <div className="relative h-[500px] overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
                <header className="sticky top-3 z-50 w-full text-center">
      <nav className="flex w-[90%] md:w-[80%] mx-auto py-2 items-center justify-between bg-white rounded-full shadow-md px-4">
                <div>
          <img src={logo} alt="7th Technology Solutions " width={40} />
                </div>
                <div className='flex flex-row space-x-6'>
                  <div className='flex items-center'>
                    <ul className="hidden md:flex gap-8 font-medium text-gray-700 text-sm">
                      {items.map((item) => (
                        <li key={item?.key} className="hover:text-primary cursor-pointer transition">{item?.label}</li>
                      ))}
                    </ul>
                    <span ref={menuButtonRef} onClick={()=>setshowMobileMenu(!showMobileMenu)} className='md:hidden! flex cursor-pointer'>
                      <FiMenu className='text-primary text-3xl' />
                    </span>
                    
                  </div>
                  
                  <div className='flex items-center'>
            <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition text-sm">Contact us</button>
                  </div>
          </div>
  
              </nav>
              {showMobileMenu && (
                <div className='absolute w-full'  ref={mobileMenuRef}>
                  <div className='relative flex justify-center mt-1! w-full'>
             <Menu
      onClick={onClickMobileMenu}
      style={{ width: '80vw' }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['home']}
      mode="inline"
      items={items}
    />
                  </div>
   
              </div>
              )}
       

      
   
            </header>
  <div className='w-[90%] md:w-[80%] mx-auto'>
              <div className='flex flex-col md:w-[60rem] w-[90rem] mt-20 space-y-4 '>
                <h1 className='text-white text-4xl md:text-6xl font-bold mt-10 w-[85vw] md:w-[60%]  '>
                  Touch the Future with 7th Technology Solutions</h1>
                
                <h4 className='text-white font-normal'>Feel the Future: Innovation at Your Fingertips</h4>
                <div className='flex flex-row space-x-6'>
                  <button onClick={()=>handleMenuClick('service')} className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition text-sm font-bold">Explore services</button>
                  <div onClick={()=>handleMenuClick('contact')} className='text-white font-bold flex items-center cursor-pointer hover:underline text-xl'>
                    Contact us &nbsp; <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.79922 15.0008C4.79922 9.36078 9.35922 4.80078 14.9992 4.80078C20.6392 4.80078 25.1992 9.36078 25.1992 15.0008C25.1992 20.6408 20.6392 25.2008 14.9992 25.2008C9.35922 25.2008 4.79922 20.6408 4.79922 15.0008ZM23.9992 15.0008C23.9992 10.0208 19.9792 6.00078 14.9992 6.00078C10.0192 6.00078 5.99922 10.0208 5.99922 15.0008C5.99922 19.9808 10.0192 24.0008 14.9992 24.0008C19.9792 24.0008 23.9992 19.9808 23.9992 15.0008Z" fill="white"/>
<path d="M13.9806 19.9797L18.9606 14.9997L13.9806 10.0197L14.8206 9.17969L20.6406 14.9997L14.8206 20.8197L13.9806 19.9797Z" fill="white"/>
<path d="M19.8008 14.4004V15.6004H9.60078V14.4004H19.8008Z" fill="white"/>
</svg>

                  </div>
                </div>
              </div>

            </div>
        
          
            
          </div>
        ))}
      </div>
        )
      }