import React from 'react'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/footer" element={<Footer/>}/>
    </Routes>
   </>
  )
}

export default App