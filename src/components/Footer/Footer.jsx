import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
        <section className="f_wrapper">
            <div className="padings innerWidth flexCenter f_container">


                {/* left side */}
                <div className="flexcolStart f_left">
                    <div className='zyrundo'>zyrundo</div>
                    <br/>
                    <span className='secondaryText4'>
                        Our Vision is to make all people <br/>
                      <p>the best place to live for them.</p>
                    </span>
                </div>

                <div className="flexcolStart f_right">
                    <span className='primaryText'>Information</span><br/>
                    <span className='secondaryText4'>145 New york,FL USA</span>
                    
                    <div className="flexCenter f_menu">
                        <span>Property</span><br/>
                        <span>Services</span><br/>
                        <span>Product</span><br/>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer