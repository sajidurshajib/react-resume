import classes from './App.module.css'
import Header from './components/Header/Header'
import BasicInfo from './components/BasicInfo/BasicInfo'

const App = ()=>{
  return (
    <div className={classes.App}>
      <div className={classes.container}>
        <Header />

        <BasicInfo 
          title="Basic Info"
          one={{"t":"Languages","b":"C/C++, C#, Java, Php, Javascript, Python, Shell"}}
          two={{"t":"Frontend", "b":"React, Next.js, Vue, Redux"}}
          three={{"t":"Backend","b":"Node.js, Express.js, Flask, Lumen"}}
          four={{"t":"FullStack","b":"MERN, Codeigniter, Laravel"}}
          five={{"t":"Databases","b":"MySQL, PostgreSQL, MongoDB"}}
        />

        <BasicInfo 
          title="Skills"
          one={{"t":"Languages","b":"C/C++, C#, Java, Php, Javascript, Python, Shell"}}
          two={{"t":"Frontend", "b":"React, Next.js, Vue, Redux"}}
          three={{"t":"Backend","b":"Node.js, Express.js, Flask, Lumen"}}
          four={{"t":"FullStack","b":"MERN, Codeigniter, Laravel"}}
          five={{"t":"Databases","b":"MySQL, PostgreSQL, MongoDB"}}
        />

      </div>
    </div>
  )
}
export default App;
