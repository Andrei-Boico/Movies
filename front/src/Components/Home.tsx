import {motion, useScroll} from "framer-motion"
import useData from "../Data"
import { useState } from "react";
function Home(){

  const data = useData((state) => state.data);
  const data2 = useData((state) => state.data2);
  const info = useData((state) => state.info);



  let [open , setopen] = useState<number>()
    return(<>
    <div className="flex flex-col w-[100%]  ">

<div className="w-[100%] h-[100vh]  bg-cover bg-center flex items-center justify-center" 
     style={{backgroundImage:'url("/ImagesMovies/collage-classic.jpg")'}}>

<div className="flex flex-col mt-[300px]" >
    <div className="w-[350px] p-0 lg:w-[800px] md:w-[600px] sm:w-[400px] sm:p-[10px]">
    <h1 className="text-white text-[25px] font-extrabold sm:text-[35px]">The Best Streaming Experience</h1>
    </div>

    <div className="w-[350px] p-0 lg:w-[1000px] md:w-[800px] smn:w-[600px] sm:p-[10px]">
    <p className="text-gray-300 text-[15px] md:text-[20px]">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
    </div>
   
    <motion.button whileTap={{opacity:1}} whileHover={{opacity:0.7}} style={{backgroundColor:"#F1A208"}} className="text-white w-[200px]  h-[50px] rounded-[10px]  my-[10px] shadow-sm shadow-white "> <i className="fa-solid fa-play pr-[5px]"></i>Start Watching Now</motion.button>

</div>
</div>








<div className="w-[100%] h-[100vh] bg-[#101119] flex justify-center items-center flex-col">
  <div className="w-full max-w-[1200px] px-4 text-center">
    <h1 className="text-white text-2xl sm:text-4xl font-extrabold">Explore our wide variety of categories</h1>
    <p className="text-gray-300 text-sm md:text-lg mt-2">Whether you're looking for a comedy...</p>
  </div>
  <div className="flex w-[100%] mt-5">
  <h1 className="text-[25px] font-extrabold pl-[30px]" style={{color:"#F1A208"}}>Movies</h1>
  </div>

<div
  id="divi"
  className="flex overflow-x-auto space-x-4  px-1 mt-3 py-4 hide-scrollbar lg:w-[1400px] md:w-[1000px] sm:w-[800px] w-[400px]"
>
  {data &&
    data.map((element, index) => (
      <motion.div
        whileHover={{opacity:0.7}}
      whileTap={{opacity:1}}
        key={index}
        className="flex-shrink-0 flex flex-col items-center rounded-lg p-4 bg-[#323334] min-w-[200px] sm:min-w-[220px] md:min-w-[240px]"
      >
        <div
          className="w-full aspect-video bg-cover bg-center rounded"
          style={{ backgroundImage: `url(${element.url})` }}
        ></div>
        <div className="flex w-full mt-4 justify-between items-center px-2">
          <p className="text-white text-sm sm:text-base">{element.name}</p>
          <motion.button
      
            className="text-white w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </motion.button>
        </div>
      </motion.div>
    ))}
</div>




  <div className="flex w-[100%] mt-5">
  <h1 className="text-[25px] font-extrabold pl-[30px]" style={{color:"#F1A208"}}>Serials Popular</h1>
  </div>

<div
  id="divi"
  className="flex overflow-x-auto space-x-4  px-1 mt-3 py-4 hide-scrollbar lg:w-[1400px] md:w-[1000px] sm:w-[800px] w-[400px]"
>
  {data2 &&
    data2.map((element, index) => (
      <motion.div
      whileHover={{opacity:0.7}}
      whileTap={{opacity:1}}
        key={index}
        className="flex-shrink-0 flex flex-col items-center rounded-lg p-4 bg-[#323334] min-w-[200px] sm:min-w-[220px] md:min-w-[240px]"
      >
        <div
          className="w-full aspect-video bg-cover bg-center rounded"
          style={{ backgroundImage: `url(${element.url})` }}
        ></div>
        <div className="flex w-full mt-4 justify-between items-center px-2">
          <p className="text-white text-sm sm:text-base">{element.name}</p>
          <motion.button
         
            className="text-white w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </motion.button>
        </div>
      </motion.div>
    ))}
</div>
</div>




<div className="w-[100%] h-auto min-h-[100vh] flex flex-col bg-[#101119] items-center px-4">
  <div className="w-full ] px-2 flex flex-col items-center text-center">
    <h1 className="text-white text-[25px] font-extrabold mb-2">
      Frequently Asked Questions
    </h1>
    <p className="text-gray-400 text-[10px] sm:text-[15px] my-4 ">
      Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
    </p>
  </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full place-items-center mt-[50px]">
{info &&
  info.map((element, index) => (
    <div
      key={index}
      className="w-[350px] sm:w-[450px] flex flex-col p-4 mb-3 bg-[#1a1b25] rounded-2xl shadow-lg"
    >
      <div
        className="flex flex-row justify-between items-center cursor-pointer"
        onClick={() => setopen(index == open ? -1 : index)}
      >
        <div className="flex flex-row items-center space-x-2">
          <span className="text-gray-400 font-bold">{index + 1}.</span>
          <p className="text-[18px] text-white font-semibold">
            {element.name}
          </p>
        </div>

        <span
          className={`text-white text-[20px] transform transition-transform duration-300`}
        >
          {open === index ? "×" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open === index ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        <p className="text-gray-400 text-[15px] leading-relaxed">
          {element.descr}
        </p>
      </div>
    </div>
  ))}

</div>


</div>

<div className="w-[100%] h-auto flex flex-col items-center">
<div className="bg-center bg-cover w-[100%] sm:w-[70%] h-[350px] relative mb-[200px]"
 style={{backgroundImage:'url("/public/4fxxbm4opjd31.jpg")'}}
>
<div className="absolute top-0 left-0 w-[100%] h-full bg-gradient-to-r from-black/80 to-red-500/70 flex flex-col justify-center items-center">
<h1 className="text-[25px] text-white font-extrabold" >Start your free trial today!</h1>
<p className="text-gray-400 text-[15px]">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
  <motion.button whileTap={{opacity:1}} whileHover={{opacity:0.7}} style={{backgroundColor:"#F1A208"}} className="text-white w-[200px]  h-[50px] rounded-[10px]  my-[10px]  "> Let's Start </motion.button>

</div>

</div>


</div>



    </div>
    </>)
}
export default Home