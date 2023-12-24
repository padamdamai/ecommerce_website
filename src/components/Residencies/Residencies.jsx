import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import "swiper/css"
import './Residencies.css';
import data from '../../utils/Slider.json';
import {slideSettings} from '../../utils/comman';
const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings inner-width r_container ">
            <div className="r_head">
                <span className='orangeText'>Best Choices</span><br />
                <span className='primaryText'>Popular Residencies</span>
            </div>
            <Swiper  className='swiper' {...slideSettings}>
                <SliderButtons/>
             {
                   data.map((card,id) => (
                    <SwiperSlide key={id}>
                        <div className="r_card">
                            <img src={card.image} alt='home'/>  
                            <span className="secondaryText r_price">
                                <span style={{color:"orange",fontSize:"1rem"}}>$</span>
                                <span>{card.price}</span>
                            </span>
                            <span className='primaryText'>{card.name}</span>
                            <span className='secondaryText'>{card.details}</span>
                        </div>
                    </SwiperSlide>
                ))
             }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies;

const SliderButtons = ()=> {
    const swiper = useSwiper();
    return (
        <div className=" flexCenter r_buttons">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    );
}