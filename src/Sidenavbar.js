import React from 'react'
import know from './know.png'
import ant from './antenna (1).png'

export default function Sidenavbar() {
  return (
    <>
    <div className="wrapper">
        
        <div className="sidebar">
          
            
            <ul>
                
                <li>
                   
                        <span className="icon"><i className="fa-solid fa-house"></i></span>
                        <span className='item'>Home Pages</span><span><i className="arrow right"></i></span>
                 
                </li>
                <li><p id='community'>COMMUNITY</p></li>
                <li>
                   
                        <span className="icon"><i className="fa-solid fa-clipboard-list"></i></span>
                        <span className="item">Knowledge Base</span>
                   
                </li>
                <li>
               
                        <span className="icon"><i className="fa-regular fa-paper-plane"></i></span>
                        <span className="item">Activity</span>
                   
                </li>
                <li>
                   
                        <span className="icon"><i className="fa-regular fa-user"></i></span>
                        <span className="item">Members</span>
                    
                </li>
                <li>
                  
                        <span className="icon"><i className="fa-solid fa-tower-broadcast" id="grps"></i></span>
                        <span className="item" id="grps">Groups</span>
                   
                </li>
                <li>
                  
                        <span className="icon"><img width="22" height="25" src="https://img.icons8.com/windows/32/communication.png" alt="communication"/></span>
                        <span className="item">Forums</span>
                  
                </li>
                <li>
                   
                        <span className="icon"><i className="fa-solid fa-calendar-week"></i></span>
                        <span className='item'>Events</span><span><i className="arrow1 right1"></i></span>
                 
                </li>
                <li>
                    
                    <span className="icon"><i className="fa-regular fa-file"></i></span>
                    <span className="item">Documents</span>
                
            </li>
            <li><p id='community'>E-Learning</p></li>
            <li>
                    
                    <span className="icon"><i className="fa-regular fa-star"></i></span>
                    <span className="item">All Courses</span>
                
            </li>
            <li>
                    
                    <span className="icon"><i className="fa-regular fa-lightbulb"></i></span>
                    <span className="item">Course Single</span>
                
            </li>
            <li>
                    
                    <span className="icon"><i className="fa-regular fa-flag"></i></span>
                    <span className="item">Lesson Single</span><span className='hot'><img width="24" height="24"
                     src="https://img.icons8.com/external-those-icons-flat-those-icons/24/external-Hot-vote-and-reward-those-icons-flat-those-icons.png" 
                    alt="external-Hot-vote-and-reward-those-icons-flat-those-icons"/></span>
                
            </li>
                <li>
                    
                        <span className="icon"><img width="18" height="20" src="https://img.icons8.com/ios/50/single-page-mode.png" alt="single-page-mode"/></span>
                        <span className="item">Topic Single</span>
                    
                </li>
                <li><p id='community'>WP Job Manager</p></li>
            </ul>
        </div>
        </div>
    </>
  )
}
