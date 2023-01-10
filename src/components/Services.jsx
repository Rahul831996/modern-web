import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../images/6.jpg";
import img2 from "../images/3.webp";
import img3 from "../images/4.webp";
import img4 from "../images/5.png";


const About = () => {
  return (
    <div className='services'>

           <Carousel infiniteLoop autoPlay showStatus={false}  showThumbs={false} interval={1000}>

            
            <div>
              <img src={img1} alt="item1" />
            </div>
            <div>
              <img src={img2} alt="itwm2" />
              <p className='legend'>Front End Developemnt</p>
            </div>
            <div>
              <img src={img3} alt="item3" />
              <p className='legend'>Back End Developemnt</p>
            </div>
            <div>
              <img src={img4} alt="item4" />
              <p className='legend'>Full Stack Developemnt</p>
            </div>
            </Carousel>      
    </div>
  )
}

export default About;