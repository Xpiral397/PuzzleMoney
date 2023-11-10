import React from 'react'
import {useDrag} from 'react-dnd'

export default function DragableCard({id, number}) {

    // throw Error()
    const [{isDragging}, ref] = useDrag(() => ({
        type: 'puzzle-card',
        item: {
            id,
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));
    return (
        <div className='flex justify-center items-center w-full p-1 bg-white rounded-md bg-purple-900 text-white w-10 h-10' ref={ref} style={{opacity: isDragging ? .5 : 1}} >
            {/* {console.log(number)} */}
            {number}</div>
    )
}
