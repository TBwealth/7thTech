import aboutShapeImage from '../../assets/images/shape1.png';
import RightUnion from '../../assets/icons/UnionRight.png';
import finoasLogo from "../../assets/images/finoas_logo.png"
import agenticaiLogo from "../../assets/images/agenticai_logo.png"
import { Divider } from 'antd';



export default function Products() {
  return (
    <div className='bg-no-repeat' style={{ backgroundImage: `url(${aboutShapeImage})` }}> 
      <div className='w-[90%] md:w-[80%] mx-auto p-8'>
        <div className='flex justify-center w-full '>
          <div className='flex space-x-2 items-center'>
             <img src={RightUnion} alt="Decoration" className="ml-4 mt-1" />
            <h4 className='text-xl font-thin'>Products</h4>     
           
          </div>            
        </div>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-8 mt-8 mb-8'>
          <a href='https://finoas.ng' target='_blank'>
            <img src={finoasLogo} />
          </a>
          <a href='#' target='_blank'>
            <img src={agenticaiLogo} className='h-[180px]'/>
          </a>
    </div>
 <Divider />
             </div>   

      
    </div>
  )
}