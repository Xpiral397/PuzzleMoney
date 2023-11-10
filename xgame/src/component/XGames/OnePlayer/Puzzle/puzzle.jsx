import React, {useEffect, useState} from "react";
import Profile from "../../../../optional/profile";
import {DndProvider, useDrop} from "react-dnd";
import {HTML5Backend} from 'react-dnd-html5-backend'
import {XPlayer} from "./Process";
import DragableCard from "./Drag";


function Range(number) {
    arr=[]
    for(let i=0; i<=number; i++) {
        arr.push(i)
    }
    return arr;
}





export function PuzzleBoard() {
    const [Matrix, setMatrix]=useState([])
    const [PuzzleSize, setPuzzleSize]=useState({spc: 2, r: 4, NR: 4});
    const [Player, AddPlayer]=useState({time: "23:0", ChanceOfWinning: 0, name: "", Worth: '$4000', stake: '', wins: '$9000'})
    let gamesController=new XPlayer("", 4, 4, 2)
    const [bet, setBet]=useState(false);
    const [betRate, setBetRate]=useState(0);
    // const [{drag}, dropBoard]=useDrop(() => ({
    //     accept: 'puzzle-card',
    //     dropBoard: (dropElement) => {

    //     }
    // })
    // )
    const SetPuzzleContainer=(obj) => {

        setPuzzleSize(e => {return {...e, ...obj}})
        setTimeout(() => {
            console.log(PuzzleSize.r)
        }, 5000);
        gamesController.reCreate(PuzzleSize, true)
        setMatrix(() => gamesController.matrix)

        // console.log(Matrix, gamesController.matrix, 'threh')
    }

    const startGame=() => {
        alert(gamesController.shuffle())

    }





    return (
        <div className="xl:px-1 xl:py-2 px-1 py-1 shadow-xl rounded-md  bg-fuchsia-200 px-2 py-2 max-h-[100vh] overflow-hidden">
            <div className=" space-x-5 p-6 w-full  rounded-md md:flex justify-between Puzzle-board bg-white  ">
                <aside className="w-2/6 bg-white mx-2 rounded-md  w-full h-full  ">
                    <div className="border border-fuchsia-100 py-2 px-2 rounded-md border-[5px]">
                        <div >
                            <div className="rounded-md py-5 px-5 bg-gradient-to-r from-violet-800 via-violet-900 to-purple-950  ">
                                <div className="flex justify-between items-center px-10">
                                    <div className="flex justify-center ">
                                        <div className="text-white text-[12px] p-6 ">
                                            <h1>Your Wins: 0</h1>
                                            <h1>Your Rate: 2.5</h1>
                                        </div>
                                    </div>
                                    <div className="w-[1px] extrabold h-full bg-fuchsia-500"></div>
                                    <div className="flex justify-center ">
                                        <div className="text-white text-[12px]">
                                            <h1>Your Wins: 0</h1>
                                            <h1>Your Rate: 2.5</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <button className="rounded-md w-full px-2 text-white text-[12px]">Make Some Wins</button> */}
                        </div>

                        <div className="mt-5 w-full ">
                            <div>
                                <ul className="flex flex-col jsutify-between space-y-1 ">
                                    <li className="w-full flex space-x-10 bg-purple-800 py-2 px-2 rounded-md   ">
                                        <h1 className="no-wrap font-extrabold text-[12px] text-white">Bet With:</h1><input placeholder="" type="range" className="w-full border-[2px] border-emerald-600 rounded-md" />
                                    </li>

                                    <li className="w-full flex space-x-10 border-violet-300 bg-purple-800 py-2 px-2 rounded-md  ">
                                        <h1 className="no-wrap font-extrabold text-[12px] text-white">Row&Col:</h1><input placeholder="" type="range" className="w-full border-blue-400" />
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="mt-1 border boder-purple-600 ">
                            <div className="bg-gradient-to-r from-violet-800 via-violet-900 to-purple-950 rounded-md px-2 py-2">
                                <div className="flex justify-between items-center">
                                    <div className="flex justify-center ">
                                        <div className="text-white text-[12px]">
                                            <h1>Your Wins: 0</h1>
                                            <h1>Your Rate: 2.5</h1>
                                        </div>
                                    </div>
                                    <div className="w-[1px] extrabold h-full bg-fuchsia-500"></div>
                                    <div className="flex justify-center ">
                                        <div className="text-white text-[12px]">
                                            <h1>Your Wins: 0</h1>
                                            <h1>Your Rate: 2.5</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-1 bg-purple-500 h-10 font-extrabold rounded-md w-full px-2 text-white text-[12px]" onClick={() => startGame()}>Make Some Wins</button>
                        </div>
                    </div>


                    <aside className="mt-10 flex justify-center w-full">
                        <div className="xl:[90%] w-full">
                            <div className="mb-10">
                                <h1 className="text-purple-800 ">Match With Friends</h1>
                                <hr />
                            </div>
                            <ul className="overflow-scroll max-h-[50vh]  bg-white px-1 space-y-10">
                                <li >
                                    <Profile friends={true} />
                                </li>
                                <li >
                                    <Profile friends={true} />
                                </li>
                                <li >
                                    <Profile friends={true} />
                                </li>
                                <li >
                                    <Profile friends={true} />
                                </li>
                                <li >
                                    <Profile friends={true} />
                                </li>
                                <li >
                                    <Profile friends={true} />
                                </li>
                                <li >
                                    <Profile friends={true} />
                                </li>
                                <li >
                                    <Profile friends={true} />
                                </li>
                                <li >
                                    <Profile friends={true} />
                                </li>
                                <li >
                                    <Profile friends={true} />
                                </li>
                                <li >
                                    <Profile friends={true} />
                                </li>
                                <li >
                                    <Profile friends={true} />
                                </li>

                                <li >
                                    <Profile friends={true} />
                                </li>


                                <li >
                                    <Profile friends={true} />
                                </li>




                            </ul>
                        </div>
                    </aside>


                </aside>


                <main className=" rounded-md w-5/6 space-y-10">
                    <div className="shadow-md rounded-sm  border border-[3px] border-purple-100 flex justify-center w-full bg-violet-00 p-2 ">
                        <div className="grid grid-cols-2 justify-between w-full gap-y-10 ">
                            <div className='flex items-center justify-between  '>
                                <lable className='no-wrap bg-purple-100  rounded-sm p-1 mx-2'>Rows:</lable><input className="bg-purple-200 rounded-[2px] mx-1 h-8 focus:outline-none w-[100%]" type='number' onChange={(e) => {e.preventDefault(); SetPuzzleContainer({r: +e.currentTarget.value})}} />
                            </div>
                            <div className='flex items-center space-x-1 '>
                                <lable className='no-wrap bg-purple-100  rounded-sm p-1 mx-2'>Number Range:</lable><input className="bg-purple-200 rounded-[2px] mx-1 h-8 focus:outline-none w-full " onChange={(e) => {e.defaultPrevented(); SetPuzzleContainer({NR: +e.currentTarget.value})}} />
                            </div>
                            <div className='w-full flex items-center sapce-x-1 '>
                                <lable className='no-wrap bg-purple-100 rounded-sm p-1 mx-2'>Space Card:</lable><input className="bg-purple-200 rounded-[2px] mx-1 h-8 focus:outline-none w-full" type="number" onChange={(e) => {e.preventDefault(); SetPuzzleContainer({spc: +e.currentTarget.value})}} />
                            </div>
                            <div className='w-full flex items-center sapce-x-1 '>
                                <lable className='no-wrap bg-purple-100 rounded-sm p-1 mx-2'>Space Count:</lable><input className="bg-purple-200 rounded-[2px] mx-1 h-8 focus:outline-none w-full" type="number" onChange={(e) => {e.preventDefault(); SetPuzzleContainer({spc: +e.currentTarget.value})}} />
                            </div>
                        </div>
                    </div>
                    <div className="h-full mt-10 border rounded-md border-white border-[5px]  bg-white w-full h-full   ">
                        <div className="h-1/2 w-full flex  ">
                            <div className="mt-100 w-[100px] h-full bg-blue-200  rounded-md  ">
                            </div>
                            <div className="  h-full w-full">
                                <DndProvider backend={HTML5Backend}>
                                    <div className="flex justify-center ">
                                        <div className={`w-full  h-full shadow-xl rounded-md px-1 py-2 bg-white flex-wrap gap-y-10 flex gap-x-10`}>


                                            {

                                                Matrix?.matrix?.map(
                                                    (element, grid1) => {
                                                        // console.log(element, 'crop')
                                                        return element.map((e, grid2) => {
                                                            // console.log(e, grid1, grid2, 'opax')
                                                            return <DragableCard key={`r-${grid1} w-${grid2}`} number={e} />
                                                        }
                                                        )
                                                    }
                                                )
                                            }
                                        </div>
                                    </div>
                                </DndProvider>
                            </div>

                        </div>
                        <div className="h-[100px] w-full bg-purple-800 rounded-md">
                            <hr></hr>

                        </div>
                    </div>

                </main>




                <aside className="w-2/6">
                    <h1 className="text-pupple-800 font-extrabold">Match with Someone Online</h1>
                    <hr />
                    <ul className="hidden xl:block overflow-scroll max-h-[100vh]  bg-white px-1 space-y-[20px]">
                        <li>
                            <Profile />
                        </li>
                        <li>
                            <Profile />
                        </li>
                        <li>
                            <Profile />
                        </li>
                        <li>
                            <Profile />
                        </li>
                        <li>
                            <Profile />
                        </li>
                        <li>
                            <Profile />
                        </li>
                        <li>
                            <Profile />
                        </li>
                        <li>
                            <Profile />
                        </li>
                        <li>
                            <Profile />
                        </li>
                        <li>
                            <Profile />
                        </li>

                        <li>
                            <Profile />
                        </li>
                        <li>
                            <Profile />
                        </li>

                    </ul>
                </aside>
            </div>
        </div>
    )
}