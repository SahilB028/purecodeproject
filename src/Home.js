import React from 'react'
import Navbar from './Navbar'
import Sidenavbar from './Sidenavbar'
import Content from './Content'

export default function Home() {
  return (
    <><Navbar/>
    <div className='parent'>
    <Sidenavbar/>
    <Content/>
    
    </div></>
  )
}
