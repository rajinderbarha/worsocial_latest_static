import React from 'react'
import classes from './workbetter.module.css'
import Image from 'next/image'
import WiFi from '../../../assets/images/home/wifi@4x.png'
function Workbetter() {
  return (
    <div className={`${classes.Workbetter} pink`}>
      <h2 className='text-center'>Work better, <br /> work uninterrupted.</h2>
      <div className={`${classes.Workbetter_Icon_boxs}`}>

        <div className='row '>

          <div className='col-md-3 col-6 px-1 mb-2'>
            <div className={`${classes.Workbetter_boxs} ${classes.teal} text-center rounded_border `}>
              <Image src={WiFi} alt='WiFi' className='mx-auto' />
              <p>Free High Speed WiFi</p>
            </div>
          </div>

          <div className='col-md-3 col-6 px-1 mb-2'>
            <div className={`${classes.Workbetter_boxs} ${classes.orange_1} text-center `}>
              <Image src={WiFi} alt='WiFi' className='mx-auto' />
              <p>Free High Speed WiFi</p>
            </div>
          </div>

          <div className='col-md-3 col-6 px-1 mb-2'>
            <div className={`${classes.Workbetter_boxs} ${classes.tra } text-center rounded_border`}>
              <Image src={WiFi} alt='WiFi' className='mx-auto' />
              <p>Free High Speed WiFi</p>
            </div>
          </div>
          <div className='col-md-3 col-6 px-1 mb-2'>
            <div className={`${classes.Workbetter_boxs} ${classes.brown} text-center `}>
              <Image src={WiFi} alt='WiFi' className='mx-auto' />
              <p>Free High Speed WiFi</p>
            </div>
          </div>
          <div className='col-md-3 col-6 px-1 mb-2'>
            <div className={`${classes.Workbetter_boxs} ${classes.brown} text-center `}>
              <Image src={WiFi} alt='WiFi' className='mx-auto' />
              <p>Free High Speed WiFi</p>
            </div>
          </div>

          <div className='col-md-3 col-6 px-1 mb-2'>
            <div className={`${classes.Workbetter_boxs} ${classes.tra} text-center rounded_border`}>
              <Image src={WiFi} alt='WiFi' className='mx-auto' />
              <p>Free High Speed WiFi</p>
            </div>
          </div>

          <div className='col-md-3 col-6 px-1 mb-2'>
            <div className={`${classes.Workbetter_boxs} ${classes.orange_1} text-center `}>
              <Image src={WiFi} alt='WiFi' className='mx-auto' />
              <p>Free High Speed WiFi</p>
            </div>
          </div>

          <div className='col-md-3 col-6 px-1 mb-2'>
            <div className={`${classes.Workbetter_boxs} ${classes.teal} text-center rounded_border`}>
              <Image src={WiFi} alt='WiFi' className='mx-auto' />
              <p>Free High Speed WiFi</p>
            </div>
          </div>

          
        </div>

      </div>
    </div>
  )
}

export default Workbetter
