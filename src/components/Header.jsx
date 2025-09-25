 

function Header() {
    return (
        <header className="flex  item-center justify-between p-4 bg-translucent-black "> 
            <div className="fixed container mx-auto flex items-center justify-between">
                <div className="w-15 text-white text-2xl">
                    <a><span className="font-bold">Tinker</span><span className="font-semibold">Hub</span><br/>MEC</a>
                </div>
                <nav className="text-white mr-10  gap-5">
                    <ul className="flex space-x-4 mx-5 items-center justify-between">
                        <li className="hover:text-blue-300 cursor-pointer">Home</li>
                        <li className="hover:text-blue-300 cursor-pointer">About</li>
                        <li className="hover:text-blue-300 cursor-pointer">Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header