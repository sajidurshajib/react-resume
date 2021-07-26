import classes from './TextBox.module.css'

const TextBox = (props)=>{
    return (
        <div className={classes.TextBox}>
            <h3>{props.cnf.title}</h3>
            <p>{props.cnf.text}</p>
        </div>
    )
}

export default TextBox