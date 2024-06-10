import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import classes from './Places.module.css'
import Image from 'next/image'
import New_Jersey from '../../../assets/images/home/New Jersey.png'
import { FaArrowRight } from "react-icons/fa";
function Places() {
    const [display, setDisplay] = useState(true);
    //   const [width, setWidth] = useState(600);
    console.log(setDisplay)
      const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.1,
              centerMode: true,
              slidesToScroll: 1,
              initialSlide: 1.1
            }
          }
        ]
      };
    return (
        <div className={`${classes.Places}`}>
            <div className={`${classes.Places_r} Containers_main  pink`}>
                <div className='Containers_x'>
                    <h2 className='text-center mb-4'>We take your work, places.</h2>
                    <p className='text-center'>Discover our thoughtfully designed work spaces in prominent locations like New York and New Jersey.</p>

                    <div className={`${classes.places_area_slider}`}
        style={{
       
          display: display ? "block" : "none",
          margin: "0 auto",
        
        }}
      >
        <Slider {...settings}>
        <div className={`${classes.places_area} position-relative`}>
                        <div className={`${classes.places_card}`}>
                            <Image src={New_Jersey} alt="New Jersey" />
                            <div className={`${classes.places_card_footer}`}>
                                <button>New Jersey, USA</button>
                                <div className={`btn_icon bg-white`}>
                                    <FaArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${classes.places_area} position-relative`}>
                        <div className={`${classes.places_card}`}>
                            <Image src={New_Jersey} alt="New Jersey" />
                            <div className={`${classes.places_card_footer}`}>
                                <button>New Jersey, USA</button>
                                <div className={`btn_icon bg-white`}>
                                    <FaArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${classes.places_area} position-relative`}>
                        <div className={`${classes.places_card}`}>
                            <Image src={New_Jersey} alt="New Jersey" />
                            <div className={`${classes.places_card_footer}`}>
                                <button>New Jersey, USA</button>
                                <div className={`btn_icon bg-white`}>
                                    <FaArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
          
        </Slider>
      </div>



                    {/* <div className={`${classes.places_area} position-relative`}>
                        <div className={`${classes.places_card}`}>
                            <Image src={New_Jersey} alt="New Jersey" />
                            <div className={`${classes.places_card_footer}`}>
                                <button>New Jersey, USA</button>
                                <div className={`btn_icon bg-white`}>
                                    <FaArrowRight />
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Places
