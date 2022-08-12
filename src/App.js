
import './App.css';
 import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea'
import Alert from './components/Alert'
import React,{useState} from 'react'
import { BrowserRouter as Router, 
  Routes, 
  Route } from "react-router-dom";


function App() {

  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const Tooglemode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#323232';
       showalert("Dark mode is enabled","success")
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
       showalert("Light mode is enabled","success")

    }
    }

    const showalert = (message,type)=>{
        setAlert({
          msg : message,
          tp : type
        })

        setTimeout(() => {
          setAlert(null);
        }, 2000);
    }

  return (
    <>
  
      <Router>
<Navbar title="TextUtils" abouttext="AboutTextUtils" mode={mode} Tooglemode={Tooglemode}/>
<div className="container">

<Alert alert={alert}/>

      {/* <Aboutus/> */}
      {/* <Textarea showalert={showalert} heading="Enter the text to analyze" mode={mode}/> */}


    <Routes>
        <Route exact path="/Aboutus" element={<Aboutus mode={mode} />} />
        <Route exact path="/Home" element={<Textarea showalert={showalert} heading="Enter the text to analyze" mode={mode}/>} />
        <Route exact path="/textutils" element={<Textarea showalert={showalert} heading="Enter the text to analyze" mode={mode}/>}  />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
