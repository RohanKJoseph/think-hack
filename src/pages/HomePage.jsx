import React from 'react'
import Header from '../components/Header'  

const HomePage = () => {
  return (
    <> 
      <div className='bg-purple-900 h-full fixed inset-0'> 
        <div>
            <Header />
        </div>
        <div className='flex items-center justify-center h-screen'>
            <h1 className='text-white text-4xl font-bold'>Welcome to the Home Page</h1>
        </div>
        
      </div>
    </>
      
  )
}

export default HomePage