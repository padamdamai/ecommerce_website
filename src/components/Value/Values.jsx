import {React,useState} from 'react'
import data from '../../utils/accordion'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import './Values.css';

const Values = () => {

  const [className,setClassName] = useState(null)

  return (
    <section className='v_wrapper'>
    <div className="paddings innerWidth flexCenter v_container">
      {/* left side  */}
      <div className="v_left">
        <div className="image_container image_holder ">
          <img src="./value.png" alt="value image" />
        </div>
      </div>
      {/* right side */}
      <div className="v_right">
        <span className='orangeText'>Our Value</span><br/>
        <span className='primaryText'>Value we give to you</span><br/>
        <span className='wantedText'>We always ready to help by providing the best service for you
        <br/>
        We believe a good place to live can make your life better 
        </span>

        <Accordion
          className="accordion"
          allowMuntipleExpanded={false}
          preExpanded={[0]}
        >
           {
            data.map((item ,i) =>{
              
              return(
                <AccordionItem className={`accordionItem ${className}`} key={1} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionButton'>
                      
                      <AccordionItemState>
                        {({expanded})=> 
                        expanded
                         ? setClassName("expanded") 
                         : setClassName("collapsed")
                         }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className='primaryText'>{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20}/>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                     <p className="secondaryText2">
                      {item.detail}
                     </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })
          } 

      </Accordion>
      </div>
    </div>
  </section>
  )
}

export default Values


 