import React from 'react'
import classes from './banner.module.css'
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

import Banner_image from '../../../assets/images/home/Home_banner_2.png'    

function Banner() {
    return (
        <div className={`${classes.Banner} `}>
            <div className='Containers_main'>
                <div className={`${classes.Banner_bg}`}>
                    <Image src={Banner_image} className={`${classes.Banner_Image}`} alt="Banner" />
                    <div className={`${classes.Banner_content} pink`}>
                        <h6 className='sub_heading mb-3'>Welcome to WorkSocial</h6>
                        <h1>Feel-good work spaces</h1>
                        <p>Mindful spaces that do good for you & your work.</p>
                        <button className='d-flex button_1 w-100 justify-content-between align-items-center'>Book your spaces<div className='btn_icon orange '><FaArrowRight /></div></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
