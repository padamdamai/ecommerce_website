import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import{BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <div className="c_wrapper">
        <div className="paddings innerWidth flexCenter c_contaiiner">
            {/* left side */}
            <div className="c_left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact us</span>
                <span className='secondaryText2'>We are always ready to help by providing the best  service <br/> that believe 
                a good place to live can make your better </span>
            
            <div className="flexColStart contactModes">
                {/* first row */}
               <div className="flexColStart row">
               <div className="flexColStart mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size={25}/>
                        </div>
                        <div className=" flexColStart details">
                            <span className='primaryText'>Call</span>
                            <span className='number'>021 123 134 14</span>
                        </div>
                    </div>
                    <div className='button'>Call now</div>
                </div>

                {/* second row */}
                <div className="mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className=" flexColStart details">
                            <span className='primaryText'>Video</span>
                            <span className='number'>021 123 134 14</span>
                        </div>
                    </div>
                    <div className='button'>Video Call</div>
                </div>



                {/* fourth mode */}
                <div className="flexColStart mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size={25}/>
                        </div>
                        <div className=" flexColStart details">
                            <span className='primaryText'>Message</span>
                            <span className='number'>021 123 134 14</span>
                        </div>
                    </div>
                    <div className='button'>Message Call</div>
                </div>


                {/* second mode */}
                <div className="flexColStart mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className=" flexColStart details">
                            <span className='primaryText'>Chat</span>
                            <span className='number'>021 123 134 14</span>
                        </div>
                    </div>
                    <div className='button'>Chat now</div>
                </div>
               </div>
            </div>
            
            </div>
            {/* right side */}
            <div className="c_right">
                <div className="image_container">
                    <img src="./contact.png" alt="contact image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact