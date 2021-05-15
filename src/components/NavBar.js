import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to={"/"}><img src="https://yt3.ggpht.com/ytc/AAUvwnhWxQn-qcrh3teXaxh72aw42mjkJec1xyMSroNg=s900-c-k-c0x00ffffff-no-rj"/></NavLink>
            <NavLink to={"/movies"}>Movies</NavLink>
            <NavLink to={"/people"}>People</NavLink>
            <NavLink to={"/locations"}>Locations</NavLink>
        </nav>
    )
}

export default NavBar
