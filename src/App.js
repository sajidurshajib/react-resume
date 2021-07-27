import React, {createContext, useState, useEffect} from 'react'
import config from './assets/config.json'
import classes from './App.module.css'
import Home from './pages/Home/Home'


export const Data = createContext()
export const SetData = createContext()

//get localStorage data
const getData = ()=>{
    let data = localStorage.getItem('resume_sjdr')
    if(data){
        return JSON.parse(localStorage.getItem('resume_sjdr'))
    }
    else{
        localStorage.setItem('resume_sjdr',JSON.stringify(config))
        return JSON.parse(localStorage.getItem('resume_sjdr'))
    }
}


const App = ()=>{

    //Store data
    const [resume, setResume] = useState(getData())

    useEffect(() => {
        localStorage.setItem('resume_sjdr',JSON.stringify(resume))
    }, [resume])

    console.log(resume)
    return (
        <div className={classes.App}>
            <Data.Provider value={resume}>
                <SetData.Provider value={setResume}>
                    <Home />
                </SetData.Provider>
            </Data.Provider>
        </div>
    )
}

export default App;
