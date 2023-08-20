import React, { useState } from 'react' 
import '../App.css' 
import menu from "../images/menju.png" 
import logo from "../images/ring3.jpg"

const Navbar = () => { 
    const[mobile,setmobie]=useState(false);  
    const[side,setside]=useState(false);  
    const boot=()=>{
      const ele=document.querySelector(".sliding"); 
 
    } 
    const toogle=()=>{
      
      if(window.innerWidth>1030){
        setside(!side) 

      } 
      if(window.innerWidth<1030){
       
        setmobie(!mobile)
      }
    }
  return (
   <> 
   <header className='main-div'>
<div className='logo'>
<img src="https://ktu-lu.com/wp-content/uploads/2023/01/KTULU_tsp2_1080x1080.png" alt="logoimg"/>
</div> 
<nav className={ mobile? ' mobile-version':'elements'}>
<ul >
    <li>HOME</li>
     <li>ABOUT</li>
      <li>KTULUNOMICS</li>
       <li>ROADMAP</li>
        <li>TEAM</li>
         <li>RING OF KTULU</li>
          <li>ARTICLES</li> 
<li>JOIN US</li>

</ul>
</nav>
<div className='menu-img'>
  <button onClick={toogle}>  <img src={menu} alt="menuicon"/></button>
</div>
   </header>
   
   <div className={side? 'slidehide': 'sliding'}>
      <button onClick={()=>setside(!side)}> ❌ </button> 
      <img src="https://ktu-lu.com/wp-content/uploads/2023/01/KTULU_tsp2_1080x1080.png" alt="img"></img>
   <p>Copyright © 2023 | KTULU<br></br>
All rights reserved.<br></br>

Developed & Designed with ❤️<br></br>
by graphitopia.eth</p>
   </div>
   </>
  )
}

export default Navbar
