import React from 'react' 
import i1 from "../images/01a.webp"
import i2 from "../images/02.webp"
import i3 from "../images/03.webp"
import i4 from "../images/04.webp"
import r1 from "../images/ring1.webp"
import r2 from "../images/ring2.webp"
import r3 from "../images/ring3.jpg"
import tw from "../images/twitter.jpg"
import ylw from "../images/yellow.jpg"

const Description = () => {
  return (
   <>
  <section class="contract">
   <img  src="https://ktu-lu.com/wp-content/uploads/2023/01/KTULU_tsp2_1080x1080.png" alt="ktu"/>
   <h1 class="centered-h1">CONTRACT</h1>
</section>

<section class="contract">
   <img src="https://ktu-lu.com/wp-content/uploads/2023/01/KTULU_tsp2_1080x1080.png" alt="ktu"/>
   <h1 class="centered-h1">KTULUNOMICS</h1>
   <p>Twitter feed is not available at the moment.</p>
</section> 
<section class="contract">
   <img  src="https://ktu-lu.com/wp-content/uploads/2023/01/KTULU_tsp2_1080x1080.png" alt="ktu"/>
   <h1 class="centered-h1">ROADMAP</h1>
</section>

<div class="cont">
             <div class="row">
                  <img src={i1}  alt="roadmap"/>
                    <h2 className="phase"> PHASE 01</h2>
                    <ul className="lists">
                        <li>KTULU Conceptualization</li>
                        <li>Launch on UniSwap</li>
                        <li>V1 Whitepaper (DeathPaper)</li>
                        <li>First run of our Marketing campaign.</li>
                        <li>Audit</li>
                        <li>DAO Creation and launch.</li>
                        <li>First Run for listings (e.g. nomics.)</li>
                        <li>v1 Website / Socials</li>
                    </ul>
                 </div>
                <div className="row">
                     <img src={i2}  alt="roadmap"/>
                     <h2 className="phase"> PHASE 02</h2>
                      <ul className="lists">
                         <li>v2 Website</li>
                         <li>$KTL Treasury</li> 
                         <li>Team Expansion</li>
                         <li>Whitepaper V2 (DeathPaper)</li>
                     </ul>
                </div>
                <div className="row">
                      <img src={i3}  alt="roadmap"/>
                      <h2 className="phase"> PHASE 03</h2>
                         <ul className="lists">
                           <li>Over 1000 Holders</li>
                           <li>LISTINGS (CoinGecko / Coin Market Cap)</li>
                           <li>Collaborations (Partnerships with influencers and other projects)</li>
                           <li>CEX Listings</li>
                           <li>Project Onboardings</li>
                        </ul>
                </div>
                <div className="row">
                     <img src={i4} alt="roadmap"/>
                     <h2 className="phase"> PHASE 04</h2>
                         <ul className="lists">
                             <li>Launch of “KTULU’S Blessing” (Still at a very early stage of conception and anything could change)</li>
                             <li>More to come…</li>
                         </ul>
                </div>
        </div>

       <div className=' hoor'>
        <section id="ring">
        
                <div className="row">
            <img className="r" src={r1} alt="img"/>
            <h2 className="phase">WHITE RING OF KTULU</h2>
            <p>DEV TEAM will be recognized by the White Ring of KTULU.
                *NO ONE is allowed to use the “White” profile picture.</p>
            </div>
        <div className="row">
            <img className="r" src={r2} alt="img"/>
            <h2 className="phase">PURPLE RING OF KTULU</h2>
            <p>WHALES will be recognized by the Purple Ring of KTULU.
                *NO ONE is allowed to use the “Purple” profile picture except the verified by team whales.</p>
            </div>
        <div className="row">
            <img className="r" src={r3}alt="img"/>
            <h2 className="phase"> RED RING OF KTULU</h2>
             <p> BELIEVERS and members will be recognized by the Red Ring of KTULU.</p>
           
        </div>
    </section>
    </div>
    <section className="contract">
   <img  src="https://ktu-lu.com/wp-content/uploads/2023/01/KTULU_tsp2_1080x1080.png" alt="ktu"/>
   <h1 className="centered-h1">OUR ARTICLES</h1>
</section>

<section className="contract">
   <img src="https://ktu-lu.com/wp-content/uploads/2023/01/KTULU_tsp2_1080x1080.png" alt="ktu"/>
   <h1 className="centered-h1">JOIN US</h1>
</section> 
<div className='footr'>
<h1>OUR OFFICIAL GROUPS/CHANNELS</h1>
<div className='bottom-main'> 

<div>
<img src="https://ktu-lu.com/wp-content/uploads/2023/01/KTULU_tsp2_1080x1080.png" alt="img"></img>
<h3>MAIN CHAT</h3>
</div>
<div>
<img src={r3} alt="img"></img>
<h3>KTULU ARMY</h3>
</div>
<div>
<img src={tw} alt="img"></img>
<h3>KTWEETS</h3>
</div>
<div>
<img src={r2} alt="img"></img>
<h3>COUNCIL/WHALES</h3>
</div>
<div>
<img src={ylw} alt="img"></img>
<h3>ANNOUNCEMENTS</h3>
</div>

</div>
</div>
</>
  )
}

export default Description
