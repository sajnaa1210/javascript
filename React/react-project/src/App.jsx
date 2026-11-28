
import React from 'react'
import Counter from './Hooks/UseState/Counter'
import Score from './Hooks/UseState/Score'
// import './App.css'
import Flipkart from './Components/Flipkart'
import { MobileContext } from './Components/MobileContext'
import User from './Hooks/Useeffect/User'
import Fetch_Api from './Components/Fetch_Api'
import Registration from './Components/Registration'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Navbar from './Components/Navbar'

function App() {
  // const mobile = "Samsung";

  
return (
    <>
    <center> 
        <div className="min-h-screen bg-gray-100 py-8 px-4">

            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">

                <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
                    App Component
                </h1>

                {/* <div className="counter">
                    <Counter />
                </div> */}

                <hr className="my-5 border-gray-300" />

                {/* <div className="score">
                    <Score />
                </div> */}

                {/* <div className="flipkart">
                    <Flipkart mobile={mobile}/>
                </div> */}

                {/* <MobileContext.Provider value={mobile}>
                    <Flipkart/>
                </MobileContext.Provider> */}

                {/* <User/>
                <hr/>
                <Fetch_Api/>
                <hr/> */}

                {/* <Registration /> */}

                <BrowserRouter>

                    <div className="bg-green-100 rounded-md p-4">

                        <Navbar />

                    </div>

                    <hr className="my-5 border-gray-300" />

                    <div className="p-4">

                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/home' element={<Home />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/about' element={<About />} />
                        </Routes>

                    </div>

                </BrowserRouter>

            </div>

        </div>
        </center>
    </>
)

}

export default App
