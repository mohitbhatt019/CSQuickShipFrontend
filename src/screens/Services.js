import React from 'react'
import ImagesUrl from '../constants/images'
function Services() {
  return (
    <div>   <br/><h1 style={{fontSize:"55px",fontFamily:'serif'}}>Services</h1>
<p>&nbsp;</p><br/>
<h1 style={{fontSize:"35px",fontFamily:'serif'}}>What We Do</h1>
<br/>
<div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
      <div className='row' style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ImagesUrl.hazardLogo} alt="Logo" height={"200px"} width={"150px"} style={{ marginRight: '10px' }} />
       <h2 style={{fontSize:"25px",fontFamily:'serif'}}>Hazardous Cargo</h2>
        </div> 
        
        <p style={{margin:"15px",padding:"15px"}}>We also offer Hazardous console box services to worldwide destinations from Indian ports.​</p>
      </div>
      <div style={{ flex: 1,margin:"10px" }}>
      <div className='row' style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ImagesUrl.agentLogo} alt="Logo" height={"200px"} width={"150px"} style={{ marginRight: '10px' }} />
       <h2 style={{fontSize:"25px",fontFamily:'serif'}}>Personalized service</h2>
        </div> 
        <p style={{margin:"15px",padding:"15px"}}>One desk  service with dedicated person for giving service support  to clients​</p>
      </div>
      <div style={{ flex: 1,margin:"10px" }}>
      <div className='row' style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ImagesUrl.realTimeLogo} alt="Logo" height={"200px"} width={"150px"} style={{ marginRight: '10px' }} />
       <h2 style={{fontSize:"25px",fontFamily:'serif'}}>Real-time Tracking</h2>
        </div> 
        <p style={{margin:"15px",padding:"15px"}}>Online Real-time tracking of package</p>
      </div>
      <div style={{ flex: 1,margin:"10px" }}>
      <div className='row' style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ImagesUrl.multiCityLogo} alt="Logo" height={"200px"} width={"150px"} style={{ marginRight: '10px' }} />
       <h2 style={{fontSize:"25px",fontFamily:'serif'}}>Multi-City Service</h2>
        </div> 
        <p style={{margin:"15px",padding:"15px"}}>Experience seamless delivery across multiple cities with our reliable package delivery service!</p>
        <p style={{fontSize:"15px"}}>and more...</p>
      </div>
    </div>

    </div>
  )
}

export default Services