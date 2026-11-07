import React from 'react'
import { CiTrophy } from 'react-icons/ci'


const ProfileCard = ({driverImg,driverHeading,driverPara,driverTag1,driverTag2,driverTag3, driverChampionships, driverChampionshipsNum, driverFollowing, driverFollowingNum, followCurrentJourney, followCurrentJourneyBtn, driverBg}) => {
  return (



    <div className={` border-black border-2 gap-2 m-2 p-2 rounded-2xl w-90 h-120 hover:h-125 hover:w-95 transition-all duration-700 ${driverBg}` }>
      <img className='rounded-2xl' src={driverImg} alt={driverImg} srcset={driverImg} />
      <h1 className='font-bold p-2  text-[20px]'>{driverHeading}</h1>
      <p className='p-2 text-[13px]'>{driverPara}</p>
      <div className='flex gap-2 text-[10px]'>
      <p className=' hover:bg-orange-400 hover:text-[12px] transition-all duration-700 p-2  border-red-500 border-2 bg-red-400 text-amber-50 rounded-2xl '>{driverTag1}</p>
      <p className='  hover:bg-orange-400 hover:text-[12px] transition-all duration-700 p-2 border-gray-300 border-2  bg-black text-amber-50 rounded-2xl'>{driverTag2}</p>
      <p className='  hover:bg-orange-400 hover:text-[12px] transition-all duration-700 p-2  bg-gray-500 border-black border-2 text-amber-50 rounded-2xl'>{driverTag3}</p>
      </div>
      <div className='p-2 flex items-center text-[10px]'>
      <i className='mr-0.5'>{driverChampionships}</i>
      <p className=''>{driverChampionshipsNum}</p>
    <div className='p-2 flex  items-center text-[10px] '>
      <i className='mr-0.5'>{driverFollowing}</i>
      <p className=''>{driverFollowingNum}</p>
    </div>
    </div>
   <button className= 'hover:text-[12px] hover:bg-red-400 transition-all duration-700 text-[10px] p-2 border-red-300 border-2 bg-pink-600 text-amber-50 rounded-2xl' >Follow His Journey</button>
    </div>
  )
}


export default ProfileCard
