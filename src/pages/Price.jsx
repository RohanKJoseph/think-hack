
const Prize = () => {
    return (
        <section id="price" className="h-screen bg-transparent flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-white mb-8 underline">Prizes</h1>
            <div className="w-2/4 h-3/4 bg-sky-300/10 rounded-lg shadow-lg backdrop-blur-sm flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 m-1-white">
                <div className="text-4xl font-serif text-white mb-8 bg-yellow-600 p-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-yellow-500/50">
                1st Prize: ₹ 5000 <br />
             </div>
             <div className="text-4xl font-serif text-white mb-8 bg-gray-600 p-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-gray-500/50">
                2nd Prize: ₹ 3000 <br />
             </div>
             <div className="text-4xl font-serif text-white mb-8 bg-amber-950 p-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-amber-500/50 ">
                3rd Prize: ₹ 1000 <br />
             </div>

            </div>
             
        </section>
    )

}

export default Prize;