import { useState } from 'react'
import LoadingScreen from './components/LoadingPage'
 

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="App">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      )}
    </>
  );
}

export default App
