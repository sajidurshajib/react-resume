import classes from './TickList.module.css'
import Child from './Child'

const TickList = (props)=>{
    return (
        <div className={classes.TickList}>
            <h3>{props.cnf.title}</h3>
            {props.cnf.arr.map((v,i)=>{
                return <Child c={v} key={i} />
            })}
        </div>
    )
}

export default TickList