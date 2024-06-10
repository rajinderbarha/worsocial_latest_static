import React from 'react'
import classes from './space.module.css'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import Find_space from '../../../assets/images/home/find_space.png'
function Space() {

    return (
        <div className={`${classes.space}`}>

            <div className='Containers_main'>
                <div className={`${classes.space_bg}`}>
                    <Image src={Find_space} className={`${classes.space_Image}`} alt="Banner" />
                    <div className={`${classes.space_content} `}>
                        
                        <h2>Find your space, find what works for you.</h2>
                        <p>Explore our locations to discover the perfect workspace that aligns with your company culture, values, and goals. Get the most of your environment to unleash your potential.</p>
                        <button className='d-flex button_1 w-100 text-white justify-content-between orange align-items-center'>View Locations<div className='btn_icon cream '><FaArrowRight /></div></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Space
