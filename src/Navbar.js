import React from 'react'
import us from './us.png'
import UK from './uk.webp'
import Profile from './profile.jpg'

export default function Navbar() {
  return (
 <>
 <nav className="navbar">
            <ul className='underline'>
                <li><h2 id='logo'>Anesta<span id='dot'>.</span></h2></li>
                <li><i className="fa-solid fa-bars" id='icon'></i></li>
                <li><i className="fa-solid fa-magnifying-glass" id='button'></i></li>
                <li className='search'><input type='search' placeholder='Start typing to search...' className='input'/></li>
            <li>
            <select className='options'>
<option><img src={us}/>English US</option>
<option><img src={UK}/>English UK</option>
<option>Spanish</option>
<option>German</option>
</select>
<div className="vl"></div>
<li className='message'><i className="fa-regular fa-message" id='msg'></i></li>
<li><i className="fa-regular fa-bell" id='bell'></i></li>
<li className='profile'><img src={Profile}/></li>
<li><select className='jack'>
<option selected>Hi, Jack</option>
</select></li>
            </li>
            </ul>
        </nav>
 </>
  )
}
