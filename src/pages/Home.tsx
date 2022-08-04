import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import NavigationBar from '../components/NavigationBar'

export const Home = () => {

    const [username, setUsername] = useLocalStorage("User", "");
    const usernameRef = useRef<any>();
    const navigate = useNavigate();

    const setU = () =>{
        setUsername(usernameRef.current.value);
        navigate("/QA")
    }

    return (
        <>
            <NavigationBar />

            <div className='flex justify-center items-center'>
                <input type="text" ref={usernameRef} name='username' placeholder="Enter Twitch Username" className="input input-bordered input-accent w-full max-w-xs"/>
                <div className="flex-none">
                    <button className="btn btn-sm ml-2" onClick={setU}>Set</button>
                </div>
            </div>
        </>
    )
}

export default Home