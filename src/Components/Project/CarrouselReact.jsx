import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function CarrouselReact({images}) {
    const arrayImages=  images
    console.log("imagenes carrousel", images)
    // arrayImages?.map((e, index)=>{console.log("eeeeee===>", e)})
    const createCarouselItemImage = (index, options = {}) => (
        <div key={index} className="imagesCarousel">
            <img src={`${index}`} width="300px" />
            {/* <p className="legend">Legend {index}</p> */}
        </div>
    );
    
    const baseChildren = <div className='imgDonde'>{arrayImages?.map(createCarouselItemImage)}</div>;
    console.log('basechild', baseChildren);

  return (
    <div className='CarouselBajda'>CarrouselReact
           <Carousel className='crsl'>
           
            {
                
              baseChildren.props.children
                
            }

           
                
            </Carousel>
    </div>
  )
}



// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>