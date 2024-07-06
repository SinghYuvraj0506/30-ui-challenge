import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const OuterWrapper = ({children}:Props) => {
  return (
    <div className='w-full h-full px-[4vw] sm:px-[8vw]'>
        {children}
    </div>
  )
}

export default OuterWrapper