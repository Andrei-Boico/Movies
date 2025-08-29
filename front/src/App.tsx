
import { Route , Routes } from 'react-router-dom'

import Home from './Components/Home'
import Movie from './Components/Movies'
import NotFound from './Components/NotFound'
import Nav from './Components/Nav'
function App() {


  return (
    <>
<div className='w-[100%] flex justify-center   ' style={{backgroundColor:"#101119"}}>
<div className='w-[1400px] flex flex-row '>
    <Nav></Nav>

<div className=' flex w-[100%] '>

    <Routes>
  <Route path='/' element={<Home/>} ></Route>
    <Route path='/Movie' element={<Movie/>} ></Route>
           <Route path="*" element={<NotFound />} />
</Routes>
</div>

</div>
</div>


    </>
  )
}

export default App
