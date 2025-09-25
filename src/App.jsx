import { useState } from "react";
import RotatingText from './styles/RotatingText'
import HomePage from "./pages/HomePage";
import { BrowserRouter as  Router , Routes , Route } from "react-router-dom";
import About from "./pages/About";


function App(){
  const [Loading, setLoading] = useState(true);
  const timer = setTimeout(()=>{
    setLoading(false);
  }, 5000);

  return(
    <>
      {Loading ? (
  
        <RotatingText
          // texts={['React', 'Bits', 'Is', 'Cool!']}
          // mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          // staggerFrom={"last"}
          // initial={{ y: "100%" }}
          // animate={{ y: 0 }}
          // exit={{ y: "-120%" }}
          // staggerDuration={0.025}
          // splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          // transition={{ type: "spring", damping: 30, stiffness: 400 }}
          // rotationInterval={2000}
        />
      ) : (
        // <div className = "fixed inset-0 z-50 text-white bg-black flex items-center justify-center">
        //   <HomePage />
        // </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
          </Routes>
            

        
      )}
    </>
  )

}

export default App;