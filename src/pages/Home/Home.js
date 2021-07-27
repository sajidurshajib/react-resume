import config from '../../assets/config.json'
import Header from '../../components/Header/Header'
import BasicInfo from '../../components/BasicInfo/BasicInfo'
import YearList from '../../components/YearList/YearList'
import TickList from '../../components/TickList/TickList'
import Link from '../../components/Link/Link'
import TextBox from '../../components/TextBox/TextBox'
import classes from './Home.module.css'

const Home = ()=>{
    return (
        <div className={classes.Home}>
            <div className={classes.container}>

                <Header />
                <div className={classes.half_grid}>
                    <div>
                        <BasicInfo cnf={config.info}/>
                        <BasicInfo cnf={config.skills}/>
                        <YearList cnf={config.projects} />
                        <Link cnf={config.glink} />
                    </div>
                    <div>
                        <TextBox cnf={config.journal} />
                        <Link cnf={config.jlink} />
                        <TickList cnf={config.achivements}/>
                        <YearList cnf={config.experience} />
                        <TextBox cnf={config.education} />
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Home