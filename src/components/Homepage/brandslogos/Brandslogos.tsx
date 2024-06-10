import React from 'react'
import classes from './brandslogos.module.css'
import Image from 'next/image'
import Amazon from '../../../assets/images/home/Amazon.png'
function Brandslogos() {
    return (
        <div className={`${classes.Brandslogos} `}>
            <div className="Containers_x">
                <h2>Home to leading brands and innovators</h2>
                <p>Join the ranks of industry leaders and innovators who have chosen WorkSocial as their preferred workspace partner. Experience the difference of working alongside like-minded professionals.</p>

            </div>
            <div className="Containers_main">
                
                <div className={`${classes.Brandslogos_box}`}>
                       <Image src={Amazon} alt="Amazon" />
                       <Image src={Amazon} alt="Amazon" />
                       <Image src={Amazon} alt="Amazon" />
                       <Image src={Amazon} alt="Amazon" />
                       <Image src={Amazon} alt="Amazon" />
                       <Image src={Amazon} alt="Amazon" />
                       <Image src={Amazon} alt="Amazon" />
                       <Image src={Amazon} alt="Amazon" />
                       <Image src={Amazon} alt="Amazon" />
                       <Image src={Amazon} alt="Amazon" />
                </div>
            </div>
        </div>
    )
}

export default Brandslogos
