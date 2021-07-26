import classes from './BasicInfo.module.css'

const BasicInfo = (props)=>{
    return (
        <div className={classes.BasicInfo}>
            <h3>{props.title}</h3>
            <br />
            <p><b>{props.one.t} :</b> {props.one.b}</p>
            <p><b>{props.two.t} :</b> {props.two.b}</p>
            <p><b>{props.three.t} :</b> {props.three.b}</p>
            <p><b>{props.four.t} :</b> {props.four.b}</p>
            <p><b>{props.five.t} :</b> {props.five.b}</p>
        </div>
    )
}

export default BasicInfo