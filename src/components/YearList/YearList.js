import classes from './YearList.module.css'
import Child from './Child'

const YearList = (props)=>{
    return (
        <div className={classes.YearList}>
            <h3>{props.cnf.title}</h3>
            {props.cnf.arr.map((v,i,arr)=>{
                if(arr.length - 1 === i){
                    return <Child c={v} border={false} key={i} />
                }
                else {
                    return <Child c={v} border={true} key={i} />
                }
            })}
        </div>
    )
}

export default YearList