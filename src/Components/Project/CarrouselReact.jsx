import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function CarrouselReact({images}) {
    const arrayImages= [...images]
    console.log("imagenes carrousel", arrayImages)


  return (
    <div>CarrouselReact
           <Carousel>
            {/* <> */}
            {
                arrayImages[0]?.map((e, index)=>{
                <div>
                    {/* <img src={e} alt="" key={index}  /> */}
                    {/* <p className="legend">Legend 1</p>s */}
                </div>

                })
            }

            {/* </> */}
                
            </Carousel>
    </div>
  )
}



// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>