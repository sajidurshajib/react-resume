import classes from './Link.module.css'

const Link = (props)=>{
    return (
        <div className={classes.Link}>
            <p>&#10004; {props.cnf.title}:</p>
            <a href={props.cnf.href}>{props.cnf.text}</a>
        </div>
    )
}

export default Link