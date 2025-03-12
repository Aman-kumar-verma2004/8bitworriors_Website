import About from '@/components/AboutUs/About'
import Fotter from '@/components/ui/Fotter'
import React from 'react'

const page = () => {
  return (
    <div className="w-full overflow-hidden">
        <About />
        <Fotter />
    </div>
  )
}

export default page