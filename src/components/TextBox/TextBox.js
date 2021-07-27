import classes from './TextBox.module.css'

const TextBox = (props)=>{
    return (
        <div className={classes.TextBox}>
            <h3>{props.cnf.title}</h3>
            <div className={classes.wrapper}>
                <span>{props.cnf.date}</span>
                <p><b>{props.cnf.bold}</b></p>
                <p>{props.cnf.text}</p>
            </div>
        </div>
    )
}

export default TextBox