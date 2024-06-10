import React from 'react'
import classes from './workspaces.module.css'
function Workspaces() {
    return (
        <div className={`${classes.Workspaces}`}>
            <div className="Containers_x">
                <h2>Workspaces that help you thrive.</h2>
                <p>Hear directly from our happy clients about their transformative experiences, and discover why businesses of all sizes trust us.</p>
                <div className={`${classes.Workspaces_card}`}>
                    <h4>“WorkSocial feels like my new family”</h4>
                    <p>“The perfect space to work with a refreshing environment. All the modern facilities are provided and have good furnishing”</p>
                </div>
            </div>
        </div>
    )
}

export default Workspaces
