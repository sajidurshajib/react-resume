import classes from './InputField.module.css'
import React, {useState} from 'react'

const InputField = (props)=>{
    const [toggle, setToggle] = useState(false)

    return (
        <div className={classes.InputField}>
            {toggle ?
            <input type="text" value={props.name} onChange={(e)=>props.handle(e.target.value)} style={props.style}/> 
            :
            <div className={classes.wrapper} onClick={e=>setToggle(true)}>
                {props.children}
            </div>
            }
        </div>
    )
}

export default InputField