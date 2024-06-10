import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './perfectspace.module.css'
import Image from 'next/image'
import Perfectspace_card_image from '../../../assets/images/home/Perfectspace_card_image.png'

function Perfectspace() {
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
        <div className={`${classes.perfectspace}`}>
            <div className='Containers_x'>
                <h2 >Finding the perfect space couldn't be easier.</h2>
                <p>Schedule a tour today with this easy guide to find your space to thrive. It’s hassle-free and hands-on, so you can truly understand how we could help your business. </p>
                <div
                    style={{

                        display: display ? "block" : "none",
                        margin: "0 auto"
                    }}
                >
                    <Slider {...settings}>
                        <div className="">
                            <div className={`${classes.perfectspace_card} mx-2`}>
                                <div className={`${classes.perfectspace_card_text}`}>
                                    <h6>1</h6>
                                    <h4>Schedule a tour with us</h4>
                                    <p>Visit us to gauge your office space needs.</p>
                                    <p className='text-decoration-underline'><b>Click here to schedule a tour</b></p>

                                </div>
                                <Image src={Perfectspace_card_image} alt='Perfectspace_card_image' />
                            </div>
                        </div>
                        <div className="">
                            <div className={`${classes.perfectspace_card} mx-2`}>
                                <div className={`${classes.perfectspace_card_text}`}>
                                    <h6>2</h6>
                                    <h4>Schedule a tour with us</h4>
                                    <p>Visit us to gauge your office space needs.</p>
                                    <p className='text-decoration-underline'><b>Click here to schedule a tour</b></p>

                                </div>
                                <Image src={Perfectspace_card_image} alt='Perfectspace_card_image' />
                            </div>
                        </div>
                        <div className="">
                            <div className={`${classes.perfectspace_card} mx-2`}>
                                <div className={`${classes.perfectspace_card_text}`}>
                                    <h6>3</h6>
                                    <h4>Schedule a tour with us</h4>
                                    <p>Visit us to gauge your office space needs.</p>
                                    <p className='text-decoration-underline'><b>Click here to schedule a tour</b></p>

                                </div>
                                <Image src={Perfectspace_card_image} alt='Perfectspace_card_image' />
                            </div>
                        </div>


                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Perfectspace
