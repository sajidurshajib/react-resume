import classes from './TextArea.module.css'
import React, {useState} from 'react'

const TextArea = (props)=>{
    const [toggle, setToggle] = useState(false)

    return (
        <div className={classes.TextArea}>
            {toggle ?
            <textarea rows={props.rows} onChange={(e)=>props.handle(e.target.value)} style={props.style}>{props.name}</textarea> 
            :
            <div className={classes.wrapper} onClick={e=>setToggle(true)}>
                {props.children}
            </div>
            }
        </div>
    )
}

export default TextArea