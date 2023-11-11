

export default function Navbar() {

    return (
        <div className="flex ">
            <h1 className='text-2xl'>XGame</h1>
            <ul className="list flex ">
                <li> Games </li>
                <li>RecentPlays</li>
                <li> Donates </li>
                <a href='/Game/PuzzleCard'> Puzzle Card </a>
            </ul>
        </div>
    )
}
