import React from 'react'

function Heading() {
    const [msg, setMsg] = React.useState('Tap on blocks to mine')
  return (
    <div className=''>
        <p className='text-white text-center text-[1.75rem] leading-7 font-normal font-game'>{ msg }</p>
    </div>
  )
}

export default Heading
