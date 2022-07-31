import React from 'react'
import { Link } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts'

const NavigationBar = ({ userName }: String) => {

  const [local, setLocal] = useLocalStorage("Question", "");

  const togglePin = () => {
    setLocal("");
  }


  return (
    <div className="navbar bg-base-100 p-4">
      <div className='flex-1'>
        <a className="btn btn-ghost normal-case text-xl">Arceus</a>
      </div>
      <div className="flex-none">
        <Link className='btn btn-sm' to={"embed/" + userName}>Embed Link</Link>
      </div>
      <div className="flex-none">
        <button className="btn btn-sm ml-2" onClick={togglePin}>Clear Pin</button>
      </div>



    </div>
  )
}

export default NavigationBar