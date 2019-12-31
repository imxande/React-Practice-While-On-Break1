import React from 'react';
import {Link} from 'react-router-dom'

export const NavMenu = () =>{
    return (
        <div className = 'link'>
            <Link to= '/home'>Home</Link>
            <Link to= '/score'>Score</Link>
            <Link to= '/calculator'>Calculator</Link>
        </div>
    )
}