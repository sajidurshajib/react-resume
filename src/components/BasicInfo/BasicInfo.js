import classes from './BasicInfo.module.css'

const BasicInfo = (props)=>{
    return (
        <div className={classes.BasicInfo}>
            <h3>{props.cnf.title}</h3>
            
            {props.cnf.arr.map((v,i)=>{
                return <p key={i}><b>{v.t} :</b> {v.b}</p>
            })}
        </div>
    )
}

export default BasicInfo