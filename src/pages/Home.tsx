import NavigationBar from '../components/NavigationBar'

export const Home = () => {
    return (
        <>
            <NavigationBar/>

            <div className='flex justify-center items-center'><input type="text" placeholder="Enter Twitch Username" className="input input-bordered input-accent w-full max-w-xs " />
                <div className="flex-none">
                    <button className="btn btn-sm ml-2">Set</button>
                </div>
            </div>
            </>
    )
}

export default Home