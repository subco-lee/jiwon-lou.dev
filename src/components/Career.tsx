import React, { FC } from 'react'
import { BlinkingArrow } from './BlinkingArrow'

interface CareerProps {
  moveToFooter: () => void
}

export const Career: FC<CareerProps> = ({ moveToFooter }: CareerProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-screen bg-slate-100 place-items-center justify-center">

      <div onClick={moveToFooter} className="flex flex-col place-items-center text-center mb-4">
        <div className='font-bold text-md'> Time to End </div>
        <BlinkingArrow />
      </div>
      </div>
    </div>
  )
}
