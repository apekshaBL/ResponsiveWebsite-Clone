import React from 'react'
import logo from './../assets/images/DisneyLogo.jpeg'
import { HiHome ,HiSearch,HiPlus,HiStar,HiOutlineDotsVertical, HiPlay} from "react-icons/hi";
import { HiMiniTv } from "react-icons/hi2";
import HeaderItems from './HeaderItems';


function Header() {
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
      {menu.map((item)=>(
         <HeaderItems name={item.name} Icon={item.icon}/>
      ) )}
      </div>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='w-[40px] rounded-full' />
      
    </div>
  )
}

export default Header