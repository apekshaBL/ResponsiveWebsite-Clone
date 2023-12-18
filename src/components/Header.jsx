import React, { useState } from 'react'
import logo from './../assets/images/DisneyLogo.jpeg'
import { HiHome ,HiSearch,HiPlus,HiStar,HiDotsVertical, HiPlay} from "react-icons/hi";
import { HiMiniTv } from "react-icons/hi2";
import HeaderItems from './HeaderItems';


function Header() {
  const[toggle,setToggle]=useState(false);
  const menu=[
    {
       name:'HOME',
       icon :HiHome
  },
{
  name:'SEARCH',
  icon:HiSearch
},
{
  name:'WATCHLIST',
  icon:HiPlus
},
{
  name:'ORIGINALS',
  icon:HiStar
},
{
  name:'MOVIES',
  icon: HiPlay
},
{
  name:'SERIES',
  icon:HiMiniTv
}
]
  
  return (
    <div className="flex items-center gap-10 justify-between  p-5">
      <div className='flex gap-8 items-center'>
      <img className="w-[80px] object-cover md:w-[115px] " src={logo}  />
      <div className='hidden md:flex gap-8 '>
      {menu.map((item)=>(
         <HeaderItems name={item.name} Icon={item.icon}/>
      ) )}
      </div>
      <div className='flex md:hidden gap-5'>
      {menu.map((item,index)=>index<3&&(
         <HeaderItems name={''} Icon={item.icon}/>
      ) )}
      </div>
      <div className=' md:hidden ' onClick={()=>setToggle(!toggle)}>
      
         <HeaderItems name={''} Icon={HiDotsVertical}/>
         {toggle?<div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4'>
      {menu.map((item,index)=>index>2&&(
         <HeaderItems name={item.name} Icon={item.icon}/>
      ) )}:
      </div>:null}
      
      </div>

      </div>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='w-[40px] rounded-full' />
      
    </div>
  )
}

export default Header