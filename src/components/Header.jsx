 

function Header() {
    return (
        <header className="flex item-center justify-between p-4 bg-purple-800"> 
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-15 text-white text-2xl">
                    <a><span className="font-bold">Tinker</span><span className="font-semibold">Hub</span><br/>MEC</a>
                </div>
                <nav className="text-white mr-10  gap-5">
                    <ul className="flex space-x-4 mx-5 items-center justify-between">
                        <li className="text-1xl hover:bg-purple-300">Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header