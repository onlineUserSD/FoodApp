import React from 'react'
import "./Nav.css"
function Nav() {
  return (
    <div className='navContainer'>
         
        <div className='navLtContainer'>
            <h2>FOOD APP</h2>
        </div>
        <div className='navRtContainer'>
           <a href="/food">FOOD</a>
           <a href="/flist">FOOD LIST</a>
           <a href="/sfood">SEARCH FOOD</a>
           <a href="/contact">CONTACT US</a> 
        </div>
      
    </div>
  )
}

export default Nav
