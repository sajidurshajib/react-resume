import classes from './Header.module.css'
import React, {useState} from 'react'

const Header = ()=>{
    return (
        <div className={classes.Header}>
            <div className={classes.red}>
                <div className={classes.section}>
                    <div>
                        <div className={classes.img}>
                        </div>
                    </div>
                    <div className={classes.detail}>
                        <h2>Jhon Doe</h2>
                        <h4>Software Engineer</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header