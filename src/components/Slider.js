import React,{useEffect} from 'react'  ;
import s1 from "../images/s1.jpg"
import s2 from "../images/s2.jpg"
import s3 from "../images/s3.jpg"
import s4 from "../images/s4.jpg"
import "../App.css"

const Slider = () => { 
 
  var count=0;   
  const slides=document.querySelectorAll(".slide"); 
const slider=()=>{
    slides.forEach((slide,index)=>{
  slide.style.left=`${index*100}%`
    })
  }  
  
    
  useEffect(() => {
    slider();
 }, []); 
  const slideimage=()=>{ 
    slides.forEach((slide)=>{
  slide.style.transform=`translateX(-${count*100}%)`; 
    })
  } 
  
 

  const gopre=()=>{
      alert()
    if(count==0){
      count=slides.length-1; 
    } else{
      count--;
    } 
    console.log(count) 
   
    slideimage(); 
   
  }  
  slider(); 
  const gonext=()=>{

    if(slides.length-1==count){
      count=0; 
    }else {
      count++; 
    }
    slideimage(); 
  } 
  setInterval(gonext,2000); 
  return (<>
  <header>
 <main className='crousel-container'>
    <img src={s1} alt="img" className='slide'></img>
      <img src={s2} alt="img" className='slide'></img>
      <img src={s3} alt="img" className='slide'></img>
      <img src={s4} alt="img" className='slide'></img>  
     
    </main>    
    <div className='btns'> 
<button onClick={gopre}> &#9665;</button> 
<button onClick={gonext}>  &#9655;</button> 
  </div>
 </header>
    </>
  )
}

export default Slider; 
