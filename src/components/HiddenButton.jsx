import React from 'react'
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'

const HiddenButton = ({ isLayoutOpen, setIsLayoutOpen }) => {

  return (
    <ChevronDoubleLeftIcon className={`h-6 w-6 absolute top-2 left-10 text-gray-400 hover:text-gray-700 hover:cursor-pointer ${isLayoutOpen ? '' : 'rotate-180'} transition-all`}
        onClick={() => setIsLayoutOpen(!isLayoutOpen)}
      />
  )
}

export default HiddenButton