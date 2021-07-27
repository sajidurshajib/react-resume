import classes from './Child.module.css'

const Child = (props)=>{
    return (
        <div className={classes.Child}>
            <h4><span>&#10004;</span> {props.c.t} <span> - {props.c.y}</span> </h4>
            <p>{props.c.b}</p>
        </div>
    )
}

export default Child