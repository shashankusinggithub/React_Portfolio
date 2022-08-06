import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'
import { useState } from 'react'

const Layout = () => {

  const [nav, setNav] = useState(true)
  
  return (

    <div className="App" onClick={() =>
      // console.log('clicked')
      setNav(true)
      
    } >



        <div 
        // className={nav && 'navcontrol'}  // unhide for click to show/hide side bar
        onClick={(event) => {
            setNav(false)
            event.stopPropagation()
          }}>

          <Sidebar />
        </div>
      <div className="page" >

        {/* <span className="tags top-tags">&lt;body&gt;</span> */}

        <Outlet />
      </div>
      
      <div className='mobileop' 
// onClick={(event) => {
//             setNav(false)
//             event.stopPropagation()
//           }}
           >
        <svg viewBox="0 0 100 80" width="40" height="40" fill="#ffd700"
          
          onClick={(event) => {
            setNav(false)
            event.stopPropagation()
          }}>
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
      </div>
    </div>
  )
}

export default Layout
