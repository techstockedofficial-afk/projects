

// Importing Area

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


export default function AppChanged() {

// Initialzing Area

const Animal1 = "Zebra",
      Animal2 = "Elephant",
      Animal3 = "Snail"
      

  return (
   <div>

{/* What You See Area */}

The fastest animal is {Animal1}, the second fastest is {Animal2}, and the slowest one is {Animal3}

{/* {} the content inside {} is called expression */}



   </div>
  )
}

// One: {Animal1} → an expression



// Two: {Animal1} {Animal2} → two expressions