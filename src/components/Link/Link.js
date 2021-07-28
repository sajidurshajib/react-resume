import classes from './Link.module.css'
import {Data, SetData} from '../../App'
import InputField from '../../reusable/InputField'
import React, {useState, useEffect, useContext} from 'react'

const Link = (props)=>{

    const data = useContext(Data)
    const setdata = useContext(SetData)

    const [title, setTitle] = useState(props.cnf.title)
    useEffect(()=>{
        if(props.cnf.id==='g'){
            let a = {...data}
            a.glink.title = title
            setdata(a)
        }
        else if(props.cnf.id==='j'){
            let a = {...data}
            a.jlink.title = title
            setdata(a)
        }
    },[title])

    return (
        <div className={classes.Link}>
            <InputField
                name={title}
                handle={setTitle}
            >
                <p>&#10004; {props.cnf.title}:</p>
            </InputField>
            <a href={props.cnf.href}>{props.cnf.text}</a>
        </div>
    )
}

export default Link