import React from 'react'
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import './Hero.css';
const Hero = () => {
  return (
		<section className="hero-wrapper">
			<div className="hero_container paddings">
				{/* left side */}
				<div className="hero-left">
					<div className="orange_circle"/>
					<div className="hero_title">
						<h1>DISCOVER <br/>MOST SUITABLE <br/>PROPERTY</h1>
					</div>
					<div className="hero_desc">
						<span className='secondary_text'>Find variety of properties that suite you very easily</span><br/>
						<span className='secondary_text'>Forgot all difficulties in finding of residence for you</span>
					</div>
					  <div className="search_bar">
						<HiLocationMarker  color="blue" size={25}/>
						<input type='text'/>
						<button className='button'>Search</button>
					</div>
					<div className="flexCenter stats">
						<div className="stat">
							<span>
								<CountUp start={8800} end={9000} duration={4}/>
								<span>+</span>
							</span><br/>
							<span>Premium Products</span>
						</div>

						<div className="stat">
							<span><CountUp start={1950} end={2000} duration={4}/>
								<span>+</span>
							</span><br/>
							<span>Happy Costumers</span>
						</div>

						<div className="stat">
							<span><CountUp end={28}/>
								<span>+</span>
							</span><br/>
							<span>Award Winning</span>
						</div>
					</div> 
				</div>
				{/* right side */}
				<div className="flexCenter hero-right">
					<div className="image_container">
						<img src="heroImge.png" alt="hero_image" />
					</div>


				</div>
			</div>
		</section>
  )
}

export default Hero