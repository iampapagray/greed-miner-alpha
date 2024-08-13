import React from 'react'

function ScoreBoard() {
  return (
    <div className="flex mt-[45px] w-full pl-[48px] pr-[35px] justify-content items-center">
        <div className=" w-full flex justify-between">
            <div className="relative py-2 flex justify-end items-center gap-[10px] pl-6 pr-4 bg-darkTone border border-[#b2d9171a] rounded-[4px]">
                <p className='text-white text-center text-2xl leading-6 font-normal font-game'>19923</p>
            </div>
            <div className="relative py-2 flex justify-end items-center gap-[10px] pl-6 pr-4 bg-darkTone border border-[#b2d9171a] rounded-[4px]">
                <p className='text-[#D1FA2D] text-center text-2xl leading-6 font-normal font-game'>98</p>
            </div>
            <div className="relative py-2 flex justify-end items-center gap-[10px] pl-6 pr-4 bg-darkTone border border-[#b2d9171a] rounded-[4px]">
                <p className='text-[#FF4238] text-center text-2xl leading-6 font-normal font-game'>20</p>
            </div>
        </div>
    </div>
  )
}

export default ScoreBoard
