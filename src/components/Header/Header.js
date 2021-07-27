import imgSrc from '../../assets/img/avatar.png'
import classes from './Header.module.css'
import React, {useContext, useState, useEffect} from 'react'
import {Data, SetData} from '../../App'
import InputField from '../../reusable/InputField'
import TextArea from '../../reusable/TextArea'

const Header = ()=>{
    
    const data = useContext(Data)
    const setdata = useContext(SetData)

    //name
    const [name, setName] = useState(data.intro.name)
    useEffect(()=>{
        let a = {...data}
        a.intro.name = name
        setdata(a)
    },[name])

    //position
    const [position, setPosition] = useState(data.intro.position)
    useEffect(()=>{
        let a = {...data}
        a.intro.position = position
        setdata(a)
    },[position])

    //objective
    const [objective, setObjective] = useState(data.intro.objective)
    useEffect(()=>{
        let a = {...data}
        a.intro.objective = objective
        setdata(a)
    },[objective])

    //img
    const [imgt, setImgt] = useState(false)
    const [img, setImg] = useState(data.intro.img)
    useEffect(()=>{
        let a = {...data}
        a.intro.img = img
        setdata(a)
    },[img])

    return (
        <div className={classes.Header}>
            <div className={classes.red}>
                <div className={classes.section}>



                    <div className={classes.imgWrapper}>
                        {data.intro.img===null ? 
                        <div 
                            onClick={e=>setImgt(!imgt)}
                            style={{background:`url(${imgSrc})`}} 
                            className={classes.img} >
                        </div>
                        :
                        <div 
                            onClick={e=>setImgt(!imgt)}
                            style={{background:`url(${data.intro.img})`}} 
                            className={classes.img} >
                        </div>}
                        {imgt ? <input type="text" placeholder="img url" onChange={e=>setImg(e.target.value)} /> : null}
                    </div>



                    <div className={classes.detail}>

                        <InputField 
                            style={{fontSize:'24px', color:'#fff', fontWeight:'bold', margin:'5px 0'}}
                            name={name}
                            handle={setName}
                        >
                            <h2>{data.intro.name}</h2>
                        </InputField>
                        

                        <InputField
                            style={{fontSize:'16px', color:'#fff', margin:'0', fontWeight:'400'}}
                            name={position}
                            handle={setPosition}
                        >
                            <h4>{data.intro.position}</h4>
                        </InputField>
                        

                        <TextArea
                            style={{textAlign:'justify', fontSize:'14px', lineHeight:'18px', color:'#fff',marginTop:'10px', width:'100%'}}
                            name={objective}
                            handle={setObjective}
                            rows={4}
                        >
                            <p>{data.intro.objective}</p>
                        </TextArea>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header