import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    var navigate=useNavigate();
  return (
    <div>
      <h2 className='text-primary'>FOOD APP SYSYTEM</h2>
      <img src="https://images01.nicepagecdn.com/page/67/56/homepage-design-preview-67567.jpg" 
      height={500}
      width={1300}
      alt="NO IMAGE"/>
      <br></br>
      <button className='btn btn-outline-success' 
      onClick={()=>{
        navigate('/register')
      }}>REGISTER</button>&nbsp;&nbsp;
      <button className='btn btn-outline-secondary'
      onClick={()=>{
        navigate('/login')
      }}>LOGIN</button>
    </div>
  )
}

export default Home
