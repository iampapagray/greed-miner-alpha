import { MineBackground } from '@/assets/images'
import React from 'react'

function Pit() {
  return (
    <div className='relative h-full w-full'>
        <div className="absolute bottom-0 top-0 -left-3 -right-3 bg-pit-pattern bg-center bg-no-repeat bg-contain">
          <img src={MineBackground} className="h-full w-full" />
        </div>
    </div>
  )
}

export default Pit
