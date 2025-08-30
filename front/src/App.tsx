
import { Route , Routes } from 'react-router-dom'
import {motion} from "framer-motion"
import Home from './Components/Home'
import Movie from './Components/Movies'
import NotFound from './Components/NotFound'
import Nav from './Components/Nav'
function App() {


  return (
    <>
<div className='w-[100%] flex justify-center relative   ' style={{backgroundColor:"#101119"}}>
<div className='w-[1400px] flex flex-row '>
    <Nav></Nav>

<div className=' flex w-[100%] '>

    <Routes>
  <Route path='/' element={<Home/>} ></Route>
    <Route path='/Movie' element={<Movie/>} ></Route>
           <Route path="*" element={<NotFound />} />
</Routes>
</div>


<div className=" absolute bottom-0 left-0  w-[100%] h-[150px]  text-white flex flex-col items-center" style={{backgroundColor:"#141415"}}>
  <div className="w-[300px] flex flex-row justify-around mt-[20px] items-center ">
<h1 className='mt-[10px]' >Contact with us </h1>

<motion.a whileHover={{opacity:0.7}} whileTap={{opacity:1}} className='w-[40px] h-[40px] rounded-[3px] bg-gray-700 flex justify-center items-center' href="https://t.me/@nBoi" target='blank'><i className="fa-brands fa-telegram"></i></motion.a>
<motion.a whileHover={{opacity:0.7}} whileTap={{opacity:1}} className='w-[40px] h-[40px] rounded-[3px] bg-gray-700 flex justify-center items-center' href="#"><i className="fa-brands fa-instagram"></i></motion.a>
<motion.a whileHover={{opacity:0.7}} whileTap={{opacity:1}} className='w-[40px] h-[40px] rounded-[3px] bg-gray-700 flex justify-center items-center' href="#"><i className="fa-brands fa-whatsapp"></i></motion.a>
</div>
<hr  className='w-[100%] text-gray-400 my-[20px]'/>

<div className='w-[100%] flex flex-row justify-between px-[5px] sm:px-[20px]'>
<p className='sm:text-[15px] text-[10px]'>@2023 streamvib, All Rights Reserved</p>
<div className='flex flex-row '>
<p className='text-gray-600 px-[8px] sm:text-[15px] text-[10px]'>Terms of Use</p>
<p className='text-gray-600 px-[8px] sm:text-[15px] text-[10px]'>Privacy Policy</p>
<p className='text-gray-600 px-[8px] sm:text-[15px] text-[10px]'>Cookie Policy</p>
</div>
</div>
</div>

</div>

</div>



    </>
  )
}

export default App
