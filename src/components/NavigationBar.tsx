
import { Link } from 'react-router-dom';

const NavigationBar = () => {

  return (
    <div className="navbar bg-base-100 p-4">
      <div className='flex-1'>
        <Link className="btn btn-ghost normal-case text-xl" to={"/"}>Arceus</Link>
      </div>
      <div className="flex ml-2">
        <Link className='btn btn-sm' to={"/qa"}>Q and A</Link>
      </div>
      <div className="flex ml-2">
        <Link className='btn btn-sm' to={"embed/"}>Embed Link</Link>
      </div>
    </div>
  )
}

export default NavigationBar