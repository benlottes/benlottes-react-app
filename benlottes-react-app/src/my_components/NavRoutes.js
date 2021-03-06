import React from 'react'
import { IndexRoute, Routes, Route } from 'react-router-dom'
import Home from './Home.js'
import Projects from './Projects.js'
import Resume from './Resume.js'
import Notes from './Notes.js'

class NavRoutes extends React.Component{
    render(){
        return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Projects" element={<Projects/>}/>
                <Route path="/Resume" element={<Resume/>}/>
                <Route path="/Notes" element={<Notes/>}/>
            </Routes>
        )
    }
}

export default NavRoutes