import React from 'react'


// function Card(props) {
//   return (
//     <div className='text-amber-100 bg-gradient-to-r from-amber-950 via-amber-700 to-amber-400  p-4 m-2 border-amber-950 border-4 rounded-2xl w-[280px] '>
//       <img className='  h-23 w-30 ' src={props.img} alt={props.img} srcset={props.img} />
//       <h1>{props.name}</h1>
//       <p>{props.age}</p>
//       <p>{props.email}</p>
//     </div>
//   )
// }

// export default Card


function Card({img,name,age,email}) {
  return (
    <div className='hover:scale-110 transition duration-500 text-amber-100 bg-gradient-to-r from-amber-950 via-amber-700 to-amber-400  p-4 m-2 border-amber-950 border-4 rounded-2xl w-[280px] '>
      <img className='  h-23 w-30 ' src={img} alt={img} srcset={img} />
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  )
}

export default Card


// transition	Smoothly animates common property changes
// transition-all	Smoothly animates all changing properties
// transition-colors	Smoothly animates color changes
// transition-transform	Smoothly animates scaling, rotation, movement, etc.
// transition-opacity	Smoothly animates transparency
// transition-shadow	Smoothly animates shadow changes
// transition-none	Disables transitions
