import { MineBackground } from '@/assets/images'
import React from 'react'

function Pit() {
  const buttonNumbers = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <div className='relative h-full w-full'>
        <div className="absolute bottom-0 top-0 -left-3 -right-3 bg-[url('/src/assets/images/mineBg.svg')] bg-center bg-no-repeat bg-contain px-[2.65rem] py-[6.4rem]">
          {/* <img src={MineBackground} className="absolute h-full w-full z-1" /> */}
          <div className="w-full h-full grid grid-cols-5 grid-row-5">
            {buttonNumbers.map((number, i) => (
              <button key={i} className="bg-amber-950 border border-amber-900 rounded-lg flex justify-center items-center">
                {number}
              </button>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Pit
