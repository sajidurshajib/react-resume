import classes from './TextBox.module.css'
import React, {useContext, useState, useEffect} from 'react'
import {Data, SetData} from '../../App'
import InputField from '../../reusable/InputField'
import TextArea from '../../reusable/TextArea'

const TextBox = (props)=>{

    const data = useContext(Data)
    const setdata = useContext(SetData)

    //Education date
    const [date, setDate] = useState(props.cnf.date)
    useEffect(()=>{
        if(props.cnf.title==='Education'){
            let a = {...data}
            a.education.date = date
            setdata(a)
        }
    },[date])

    const [bold, setBold] = useState(props.cnf.bold)
    useEffect(()=>{
        if(props.cnf.title==='Education'){
            let a = {...data}
            a.education.bold = bold
            setdata(a)
        }
    },[bold])

    const [text, setText] = useState(props.cnf.text)
    useEffect(()=>{
        if(props.cnf.title==='Education'){
            let a = {...data}
            a.education.text = text
            setdata(a)
        }
        else if(props.cnf.title==='Journal'){
            let a = {...data}
            a.journal.text = text
            setdata(a)
        }
    },[text])
    

    return (
        <div className={classes.TextBox}>
            
            <h3>{props.cnf.title}</h3>
            
            <div className={classes.wrapper}>
                <InputField
                    name={date}
                    handle={setDate}
                >
                    <span>{props.cnf.date}</span>
                </InputField>
                

                <InputField
                    style={{width:'120%', fontWeight:'bold', fontSize:'14px'}}
                    name={bold}
                    handle={setBold}
                >
                    <p><b>{props.cnf.bold}</b></p>
                </InputField>
                
                <TextArea
                    style={{width:'100%'}}
                    name={text}
                    handle={setText}
                    rows={'4'}
                >
                    <p>{props.cnf.text}</p>
                </TextArea>
            </div>
        </div>
    )
}

export default TextBox