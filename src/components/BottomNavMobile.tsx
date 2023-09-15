import React from 'react'
import logo from "../assets/clarifonlogo.png";
import logo1 from "../assets/McAfee_Secure.png";
import logo2 from "../assets/norton-antivirus-logo 1.png";

const BottomNavMobile = () => {
  return (
    <div className="flex md:hidden w-screen justify-between px-4 p-4">
      <div className='h-10 w-20'>
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex gap-2 ">
        <img src={logo1} alt="Logo" className="h-4"/>
        <img src={logo2} alt="Logo" className='h-4'/>
      </div>
    </div>
  )
}

export default BottomNavMobile