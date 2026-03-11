// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Menu from '../pages/Menu'
import Support from '../pages/Support'
import Nav from '../components/header/Nav'

function AppRoute() {
    return (
        <div>
 {/* <Route path='/' element={<Home />} /> */}
            <BrowserRouter>
            <Nav />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/support' element={<Support />} />
                   

                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default AppRoute