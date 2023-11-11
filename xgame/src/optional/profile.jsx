import "../App.css"
export default function Profile({friends}) {
    const random=['ABCDEFGHIJKLMNOPQRSTUVWXYZ'][Math.floor(Math.random())*25]
    return (
        <div className='shadow-xl rounded-md rounded-md bg-white-100 w-full py-1  '>
            <div className={`${friends? "px-5":'px-1'} `}>
                <div className="bg-blue-800 rounded-md z-0 flex xl:flex-row flex-col mb-2  justify-between w-full items-center ">
                    <div className='z-1 rounded-full flex items-center w-full px-2'>
                        <h1 className=' mt-2 text-white font-extrabold text-[70px]'>O</h1>
                        <ul className='mx-1 text-[12px] font-medium block text-fuchsia-100 mt-[25px]'>
                            <li>Olamide</li>
                            <li>Worth: $25</li>
                        </ul>
                    </div>

                    {friends? <div className="sm:grid flex-1 w-full  bg-blue-800 rounded-md px-5 py-1 ">
                        <div className="w-full flex flex-end">
                            <div className="font-bold font-[Poppin, sans-serif, Helvitica] mt-5">
                                <div className="text-purple-100 text-[12px] no-wrap">Wins: 92093</div>
                                <div className="text-purple-100 text-[12px] no-wrap">Expert Rate : 9.6 </div>
                                <div className="text-purple-100 text-[12px] no-wrap">Acc Worth: $20,000</div>

                            </div>
                        </div>

                    </div>:
                        <div className="sm:grid flex-1 w-full  bg-blue-800 rounded-md px-5 py-1 ">
                            <div className="w-full flex flex-end">
                                <div className="font-bold font-[Poppin, sans-serif, Helvitica] mt-5">
                                    <div className="text-purple-100 text-[12px] no-wrap">Mutal Friends : 203 </div>
                                    <div className="text-purple-100 text-[12px] no-wrap">Worth: $20,000</div>
                                    <div className="text-purple-100 text-[12px] no-wrap">Wins: 92093</div>


                                </div>
                            </div>

                        </div>}
                </div>
                {friends?
                    <div className="w-full flex justify-center ">
                        <div className=" flex justify-between space-x-10  w-full">
                            <button className=" text-[12px] text-white font-extrabold w-[90%]  h-[35px]  bg-blue-900 rounded-md shadow-xl">
                                Add  Game
                            </button>
                            <button className=" text-[12px] text-white font-extrabold  w-[90%]  h-[35px]  bg-blue-900 rounded-md shadow-xl">
                                Unfriend
                            </button>
                        </div>
                    </div>
                    :
                    <div className="w-full flex justify-center ">
                        <div className=" flex justify-between space-x-10  w-full">
                            <button className="text-[12px] text-white font-extrabold w-[90%]  h-[35px]  bg-blue-900 rounded-md shadow-xl">
                                Request
                            </button>
                            <button className="text-[12px]  text-white font-extrabold w-[90%]  h-[35px]  bg-blue-900 rounded-md shadow-xl">
                                Add To Game
                            </button>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}
