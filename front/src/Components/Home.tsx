import {motion} from "framer-motion"
import useData from "../Data"
function Home(){

  const data = useData((state) => state.data);


    return(<>
    <div className="flex flex-col w-[100%]  ">

<div className="w-[100%] min-h-[100vh] h-auto bg-cover bg-center flex items-center justify-center" 
     style={{backgroundImage:'url("/Images/collage-classic.jpg")'}}>

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






<div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#101119]">
  <div className="w-full max-w-[1200px] px-4 text-center">
    <h1 className="text-white text-2xl sm:text-4xl font-extrabold">Explore our wide variety of categories</h1>
    <p className="text-gray-300 text-sm md:text-lg mt-2">Whether you're looking for a comedy...</p>
  </div>

  <div id="divi" className="flex overflow-x-auto space-x-4 w-full max-w-[1200px] px-4 mt-6 hide-scrollbar">
    {data && data.map((element, index) => (
      <div
        key={index}
        className="flex-none w-[300px] h-[300px] rounded-lg p-4 flex flex-col items-center"
        style={{ backgroundColor: "#323334" }}
      >
        <div
          className="w-full h-[220px] bg-cover bg-center rounded"
          style={{ backgroundImage: `url(${element.url})` }}
        ></div>
        <div className="flex w-full mt-4 justify-between items-center px-2">
          <p className="text-white">{element.name}</p>
          <motion.button
            whileHover={{ opacity: 0.7 }}
            whileTap={{ opacity: 1 }}
            className="text-white w-10 h-10 rounded-full bg-gray-400"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </motion.button>
        </div>
      </div>
    ))}
  </div>
</div>












    </div>
    </>)
}
export default Home