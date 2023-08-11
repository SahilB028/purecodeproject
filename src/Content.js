import React from 'react'
import profile1 from './profile1.jpg'
import profile from './profile.jpg'
import p1 from './p2.jpg'
import p2 from './p3.jpeg'
import p3 from './p4.jpeg'
import p4 from './p5.jpg'
import p11 from './p12.jpg'
import p12 from './p13.jpg'
import p13 from './p14.jpeg'
import p14 from './p15.jpeg'
import pro1 from './image123.webp'
import pro2 from './images12.jpeg'
import pro3 from './images14.jpeg'
import pro4 from './img15.jpg'
import setting from './setting.png'
import drop from './drop.png'

export default function Content() {
  return (
    <>
   <div className="background-container">
    <div className="centered-content">
      <h1>Groups</h1>
      <hr id="hrp"></hr>
      </div>
      <div className='searchbox'>
        <div className='center-box'><br/>
            <h1 id='group'> Search Groups...</h1>
            <input type='search' placeholder='Search Groups...' className='searchinput'/><button>SEARCH</button>
        </div>
        <br/><br/>
    </div>
    <div className='Allgroup'>
        <div className='group-box'><br/>
         <span id="All">All Groups<span id='five'>5</span></span><span id='grp'>My Groups</span><span id='three'>3</span>
         <br/></div>
         <select className='Lastactive'>
         <option value="" disabled selected hidden>Last Active</option>
</select>
      <br/><br/>
    </div>

    <div><p id='para'>View 1-5 of 5 Groups</p></div>
    <div className='Gallery1'>
    <div className="gallery">
      <div className='photo'>
    <span className='img2'><img src={profile1}/></span>  
     <span className='img1'><img src={profile}/></span> 
     <div className='leave'><p>Join Group</p></div>
     <div className='designername'><p>Designer Group</p></div>
     <p id='hours'>3 hours ago</p>
     <hr id="hrpro"></hr>
     <p id="hours">Public Group/ 1 Member</p>
  </div>
  <div className="gallery">
  <div className='photo'>
    <span className='img2'><img src={p1}/></span>  
     <span className='img1'><img src={p3}/></span> 
     <div className='leave'><p>Leave Group</p></div>
     <div className='designername'><p>Bussiness Group</p></div>
     <p id='hours'>2 Day ago</p>
     <hr id="hrpro"></hr>
     <p id="hours">Public Group/ 1 Member</p>
  </div>
  <div className="gallery">
  <div className='photo'>
    <span className='img2'><img src={p2}/></span>  
     <span className='img1'><img src={p4}/></span> 
     <div className='leave'><p>Leave Group</p></div>
     <div className='designername'><p>Art Photographer</p></div>
     <p id='hours'>3 Day ago</p>
     <hr id="hrpro"></hr>
     <p id="hours">Public Group/ 1 Member</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  <br/>
  <div className='activemember'>
  <div className='member'>
  <h3>Active members</h3>
  <hr id='hractive'></hr>

  <span className='viewprofile'>
  <img src={p11}/>
  <img src={p12}/>
  <img src={p13}/>
  <img src={p14}/></span>
  <p>View All <i className="fa-solid fa-arrow-right"></i></p>
  
  </div>
  </div>
  <div className='recent'>
  <h3>Recent Topics</h3>
  <hr id='hractive'></hr>
  <span className='topic'>
  <img src={pro1}/></span><p className='lol'>lol</p>
  <p className="top">By JACK BLACK</p>
  <span className='topic'>
  <img src={pro2}/></span><p className='lol'>Golden Rule that will improve your design</p>
  <p className="top">By ROXY</p>
  <span className='topic'>
  <img src={pro3}/></span><p className='lol'>Photo Competition Winner revealed</p>
  <p className="top">By KEVIN</p>
  <span className='topic'>
  <img src={pro4}/></span><p className='lol'>What do you need to know for a sucessfull Startup? </p>
  <p className="top">By JOSEPH</p>
  </div>
  <div className='setting'>
    <div><img src={setting}/></div>
    <div><img src={drop}/></div>
  </div>
  </div>


    
 
    </>
  )
}
