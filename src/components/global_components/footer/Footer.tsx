import React from 'react'
import classes from './Footer.module.css'
import Logo_light from '../../../assets/images/home/Logo_light.svg'
import Image from 'next/image'
import Facebook from '../../../assets/images/home/facebook.svg'
function Footer() {
    return (
        <div className={`${classes.Footer}`}>
            <div className='Containers_main'>
                <div className={`${classes.Footer_bg}`}>
                    <div className='Containers_x'>
                        <div className={`${classes.footer_row} d-block d-md-flex justify-content-between`}>
                            <div className={`${classes.footer_logo} d-flex align-items-center`}>
                                <Image src={Logo_light} alt='Logo' />
                            </div>
                            <div className={`${classes.footer_Locations}`}>
                                <h3>Locations</h3>
                                <ul className='p-0'>
                                    <li>New York</li>
                                    <li>New Jersey</li>
                                    <li>Los Angeles</li>
                                    <li className={`${classes.coming_soon}`}>More coming soon!</li>
                                </ul>
                                <h4>About Us</h4>
                                <h4>Careers</h4>
                            </div>
                            <div className={`${classes.footer_Locations}`}>
                                <h3>Services</h3>
                                <ul className='p-0'>
                                    <li>Private Office Space</li>
                                    <li>Coworking Office Space</li>
                                    <li>Conference Rooms</li>
                                    <li>Corporate Training Venue</li>
                                    <li>Virtual Office and Business Address</li>
                                    <li>Podcast Studios</li>
                                </ul>
                               
                            </div>
                            <div className={`${classes.footer_Locations}`}>
                                <h3>Contact Us</h3>
                                <ul className='p-0'>
                                    <li>support@myWorkSocial.com</li>
                                    <li>1 (800) 888 2342</li>
                                </ul>
                              <div className={`${classes.media_icons} d-flex gap-2`}>
                                <Image src={Facebook} alt='Facebook' />
                                <Image src={Facebook} alt='Facebook' />
                                <Image src={Facebook} alt='Facebook' />
                                <Image src={Facebook} alt='Facebook' />
                                <Image src={Facebook} alt='Facebook' />
                                <Image src={Facebook} alt='Facebook' />
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
