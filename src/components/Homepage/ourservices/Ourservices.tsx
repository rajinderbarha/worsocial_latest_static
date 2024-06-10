import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './Ourservices.module.css'
import { FaArrowRight } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import Coworking_Space from '../../../assets/images/home/Coworking_Space.svg'
import Image from 'next/image';
function Ourservices() {
    const [display, setDisplay] = useState(true);
    //   const [width, setWidth] = useState(600);
    console.log(setDisplay)
    const settings = {
        infinite: true,
        slidesToShow: 4,
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
        <>
            <div className={`${classes.Ourservices}`}>
                <div className='Containers_main'>
                    <h2 className='mb-4 text-center'>Our Services</h2>
                    <p className={`${classes.Ourservices_p} text-center `}>Elevate your work experience with our comprehensive suite of <b>premium services,</b> tailored to <b> meet the needs of businesses of all scales.</b></p>

                    <div
                        style={{

                            display: display ? "block" : "none",
                            margin: "0 auto"
                        }}
                    >
                        <Slider {...settings}>
                            <div>
                                <div className={`${classes.cards}`}>
                                    <div className={`${classes.cards_header}`}>
                                        <div className=''>
                                            <h5>Private Office</h5>
                                            <p>Private, fully furnished,all-inclusive office</p>
                                            <div className={`${classes.users} pink w-max`}>
                                                <LuUsers /> 1-2
                                            </div>
                                        </div>
                                        <div className={`${classes.cards_icon} text-white orange d-flex align-items-center justify-content-center`} >
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                    <Image src={Coworking_Space} alt="Image" />
                                </div>

                            </div>
                            <div>
                                <div className={`${classes.cards}`}>
                                    <div className={`${classes.cards_header}`}>
                                        <div className=''>
                                            <h5>Private Office</h5>
                                            <p>Private, fully furnished,all-inclusive office</p>
                                            <div className={`${classes.users} pink w-max`}>
                                                <LuUsers /> 1-2
                                            </div>
                                        </div>
                                        <div className={`${classes.cards_icon} text-white orange d-flex align-items-center justify-content-center`} >
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                    <Image src={Coworking_Space} alt="Image" />
                                </div>

                            </div>
                            <div>
                                <div className={`${classes.cards}`}>
                                    <div className={`${classes.cards_header}`}>
                                        <div className=''>
                                            <h5>Private Office</h5>
                                            <p>Private, fully furnished,all-inclusive office</p>
                                            <div className={`${classes.users} pink w-max`}>
                                                <LuUsers /> 1-2
                                            </div>
                                        </div>
                                        <div className={`${classes.cards_icon} text-white orange d-flex align-items-center justify-content-center`} >
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                    <Image src={Coworking_Space} alt="Image" />
                                </div>

                            </div>
                            <div>
                                <div className={`${classes.cards}`}>
                                    <div className={`${classes.cards_header}`}>
                                        <div className=''>
                                            <h5>Private Office</h5>
                                            <p>Private, fully furnished,all-inclusive office</p>
                                            <div className={`${classes.users} pink w-max`}>
                                                <LuUsers /> 1-2
                                            </div>
                                        </div>
                                        <div className={`${classes.cards_icon} text-white orange d-flex align-items-center justify-content-center`} >
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                    <Image src={Coworking_Space} alt="Image" />
                                </div>

                            </div>
                            <div>
                                <div className={`${classes.cards}`}>
                                    <div className={`${classes.cards_header}`}>
                                        <div className=''>
                                            <h5>Private Office</h5>
                                            <p>Private, fully furnished,all-inclusive office</p>
                                            <div className={`${classes.users} pink w-max`}>
                                                <LuUsers /> 1-2
                                            </div>
                                        </div>
                                        <div className={`${classes.cards_icon} text-white orange d-flex align-items-center justify-content-center`} >
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                    <Image src={Coworking_Space} alt="Image" />
                                </div>

                            </div>
                            <div>
                                <div className={`${classes.cards}`}>
                                    <div className={`${classes.cards_header}`}>
                                        <div className=''>
                                            <h5>Private Office</h5>
                                            <p>Private, fully furnished,all-inclusive office</p>
                                            <div className={`${classes.users} pink w-max`}>
                                                <LuUsers /> 1-2
                                            </div>
                                        </div>
                                        <div className={`${classes.cards_icon} text-white orange d-flex align-items-center justify-content-center`} >
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                    <Image src={Coworking_Space} alt="Image" />
                                </div>

                            </div>
                        </Slider>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Ourservices