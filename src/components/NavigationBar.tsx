import React from 'react'
import { useLocalStorage } from 'usehooks-ts'

const NavigationBar = () => {

  const [local, setLocal] = useLocalStorage("Question" , "");

  const togglePin = () => {
    setLocal("");
}


  return (
    <div className="navbar bg-base-100 p-4">
      <div className='flex-1'>
        <a className="btn btn-ghost normal-case text-xl">Arceus</a>
      </div>
      
      <div className="flex-none">
          <button className="btn btn-sm" onClick={togglePin}>Clear Pin</button>
        </div>
    </div>
  )
}

export default NavigationBar