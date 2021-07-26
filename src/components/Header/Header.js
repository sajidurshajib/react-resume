import img from '../../assets/img/avatar.png'
import config from '../../assets/config.json'
import classes from './Header.module.css'

const Header = ()=>{
    return (
        <div className={classes.Header}>
            <div className={classes.red}>
                <div className={classes.section}>
                    <div>
                        <div 
                            style={{background:`url(${img})`}} 
                            className={classes.img} >
                        </div>
                    </div>
                    <div className={classes.detail}>
                        <h2>{config.name}</h2>
                        <h4>{config.position}</h4>
                        <p>{config.objective}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header