import React, { PropTypes } from 'react';
// import TestChildren from './TestChildren';
import Carousel from 'react-bootstrap/lib/Carousel';
class Appp extends React.Component {
  render () {
    return(
      <Carousel interval={1000}>
          <Carousel.Item>
            <img width={500} height={250} alt="900x500" src="http://odqbihdj1.bkt.clouddn.com/1.jpg"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={500} height={250} alt="900x500" src="http://odqbihdj1.bkt.clouddn.com/1.jpg"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={500} height={250} alt="900x500" src="http://odqbihdj1.bkt.clouddn.com/1.jpg"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


    )
  }
}

export default Appp;
