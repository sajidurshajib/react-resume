import classes from './Child.module.css'

const Child = (props)=>{
    return (
        <div className={props.border ? classes.Child : classes.ChildB}>
            <span>{props.c.y}</span>
            <h4>{props.c.t}</h4>
            <p>{props.c.b}</p>
        </div>
    )
}

export default Child