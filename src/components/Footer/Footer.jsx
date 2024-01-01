import React from 'react'

const Footer = () => {
  return (
        <section className="f_wrapper">
            <div className="padings innerWidth flexCenter f_container">


                {/* left side */}
                <div className="flexcolStart f_left">
                    <img src="./logo2.png" alt="secondlogo" />
                    <br/>
                    <span className='secondaryText4'>
                        Our Vision is to make all people <br/>
                        the best place to live for them.
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