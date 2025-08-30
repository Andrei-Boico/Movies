import { Link } from "react-router-dom"
import {motion} from "framer-motion"
import { useState } from "react"
function Nav (){
let [view , setview] = useState(false)
    return(<>

    <div className="fixed top-0 left-0 w-full h-[60px]   items-center px-1 sm:px-6 backdrop-blur-md bg-[rgba(144,144,145,0.2)] z-50 justify-between hidden  sm:flex" >
        <div className="flex h-full items-center ">
      <h1 className="text-white mr-6 font-bold">Movies</h1>
      <Link to="/" className="text-white mr-4"> <motion.p whileHover={{color:"#F1A208"}}>Home</motion.p></Link>
      <Link to="/Movie" className="text-white   "><motion.p whileHover={{color:"#F1A208"}}>Movie</motion.p> </Link>
        </div>

        <div className="flex h-full items-center ">


<motion.button 
className="w-[40px] h-[40px] rounded-full  mx-1 sm:mx-4"
  initial={{ color: "white", backgroundColor: "transparent" }}
    whileHover={{color:"black" , backgroundColor:"white"}}
    transition={{duration:0.3}}
    >
  <i className="fa-solid fa-magnifying-glass" style={{ color: "inherit" }}></i>

</motion.button>

        <motion.button
        className="w-[40px] h-[40px] rounded-full mx-1 sm:mx-4 text-[20px] text-white"
  initial={{ border: "3px solid transparent" }}
  whileHover={{ border: "3px solid white" }}

        ><i className="fa-solid fa-user"></i></motion.button>

        <motion.button
        className="w-[40px] h-[40px] rounded-full  mx-1 sm:mx-4  text-[20px]"
        initial={{ color: "white" }}
    whileHover={{color:"green" }}
    transition={{duration:0.3}}
        >
          <i className="fa-solid fa-handshake-angle"></i>
        </motion.button>
      </div>
    </div>






    <div className="fixed top-0 left-0 w-full h-20  items-center  sm:px-6 backdrop-blur-md bg-[rgba(144,144,145,0.2)] z-50 justify-between flex  sm:hidden px-[20px] " >
     <div className="flex h-full items-center ">
      <h1 className="text-white mr-6 font-bold">Movies</h1>
 
        </div>




                <div className="flex h-full items-center ">


<motion.button className="text-white text-[30px] pr-[10px] "
onClick={()=>{setview(!view) ; console.log("work")}   }

>

  {view ? <i className="fa-solid fa-xmark"></i> :<i className="fa-solid fa-bars"></i> }
</motion.button>

      </div>
        </div>




{view &&
  <div className="w-full h-[100vh] fixed top-0 left-0 bg-[rgba(188,187,187,0.42)] z-40 flex justify-end" >
    <div className="flex flex-col mt-[80px] w-[80px] backdrop-blur-md bg-[rgba(144,144,145,0.2)] items-center gap-4 ">

      <Link to="/" className="text-white w-[40px] h-[40px] flex items-center justify-center text-[25px]">
        <i className="fa-solid fa-house"></i>
      </Link>

      <Link to="/Movie" className="text-white w-[40px] h-[40px] flex items-center justify-center text-[25px]">
        <i className="fa-solid fa-play"></i>
      </Link>

      <motion.button className="w-[40px] h-[40px] flex items-center justify-center text-white text-[25px]">
        <i className="fa-solid fa-magnifying-glass" style={{ color: "inherit" }}></i>
      </motion.button>

      <motion.button className="w-[40px] h-[40px] flex items-center justify-center text-[25px] text-white">
        <i className="fa-solid fa-user"></i>
      </motion.button>

      <motion.button className="w-[40px] h-[40px] flex items-center justify-center text-[25px] text-white">
        <i className="fa-solid fa-handshake-angle"></i>
      </motion.button>

    </div>
  </div>
}


   
    </>)
}
export default Nav