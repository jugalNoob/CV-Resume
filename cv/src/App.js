import React from 'react'
import "./App.css"
import one from "./jugal.jpg"

function App() {
  return (
    <div>

<div className="allinone">

<div className="first">

<div className="image">

  <img src={one} alt="" />
</div>

<div className="contect">

<h1>information</h1>

<p>jugal kumar sharma</p>

<p>sjugal126@gmail.com</p>

<p>7006542046</p>

<p>jammu </p>
</div>


<div className="sol">

<h1>social media</h1>

<a href="">instagram</a>
<br />
<br />
<a href="" target="_blank">linkind</a>
<br />
<br />
<a href="https://www.glassdoor.co.in/member/profile/index.htm">glassdoor</a>
<br />
<br />
<a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage&_ga=2.239213515.973009094.1701256240-629136833.1688607354&_gac=1.181746133.1701256240.Cj0KCQiA35urBhDCARIsAOU7QwmK67O7BAerQyWbqNjcMB9_Ujm0JQJrDdqi1QugSlM6l9udr6m9gYkaApZREALw_wcB">Indeed</a>
<br />
<br />
<a href="https://www.naukri.com/mnjuser/profile" target='_blank'>naukri</a>

</div>


<div className="eduction">

  <h1>eduction</h1>
  <p>10th </p>
  <p>12th non-medical</p>
</div>


</div>


{/* this is second part  */}

<div className="second">


<div className="skillH">
  <h1>My skills</h1>
</div>

<div className="line"></div>


<div className="skill">

<div className="mern">

<h1>mern-stack</h1>
<li>frontend data structure </li>
<li>MERN stack</li>
    <li>GraphQl</li>
    <li>RestAPI</li>
    <li>docker</li>
</div>

<div className="web3">
<h1>blockchain</h1>
<li>Dapps</li>
    <li>solidity</li>
    <li>cryptography</li>
</div>

</div>


<div className="projects">
<h1>project</h1>
</div>

<div className="pline"></div>

<div className="projectall">

<div className="pmern">

<h2>mern-prohject</h2>


 <li><a href="https://github.com/jugalNoob/Mern-stack-RestApi/">mern-stack Rest-api</a></li>
<br />
<br />

<li><a href="https://github.com/jugalNoob/MERN-Advance-RestAPI-Docker-monitoring"> Second Rest-APi</a></li>
<br />
<br />

<li><a href="https://github.com/jugalNoob/Advance-CryptoGraphy-With-Graph-QL">GraphyQl Rest-api</a></li>


</div>

<div className="pweb">
<h2>Dapps-project</h2>


   <li> <a href="https://github.com/jugalNoob/Nft_Market_Cap">dapp Nft</a></li>
    <br />
    <br />


    <li><a href="https://github.com/jugalNoob/Event_SmartContract_Dapp">event Dapps</a></li>
    <br />
    <br />
   
    <li><a href="https://github.com/jugalNoob/ERC-20--Token-Dapp">erc-20 Dapps</a></li>
    <br />
    <br />

    <li><a href="https://github.com/jugalNoob/Web3AirPlanBook">Dapps AirPlan Ticket</a></li>

<br />
<br />

<li><a href="https://github.com/jugalNoob/SmartContract-project">My all Smart Contract</a></li>

</div>

</div>


</div>

{/* 
next row  */}



</div>




    </div>
  )
}

export default App