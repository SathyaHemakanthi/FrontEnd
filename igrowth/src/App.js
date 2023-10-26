import React from "react"
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import { ScheduleComponent } from "@syncfusion/ej2-react-schedule";      
import Navbar from './component/Navbar';
import Header from './component/Header';
import News from './Pages/Parent/News';
import Growth from "./Pages/Parent/Growth";
import Develop from "./Pages/Parent/Develop";
import Vaccination from"./Pages/Parent/Vaccination";
import Health from"./Pages/Parent/Health";
import Consultation from"./Pages/Parent/Consultation";

function App() {
  return(
   <div>
     

   <Router>
      <Header/>
      <Navbar/>
      
   <Routes>
      
      <Route exat path ='/news' element ={<News/>}/>
      <Route exat path ='/growth' element ={<Growth/>}/>
      <Route exat path ='/develop' element ={<Develop/>}/>
      <Route exat path ='/vaccination' element ={<Vaccination/>}/>
      <Route exat path ='/health' element ={<Health/>}/>
      <Route exat path ='/consultation' element ={<Consultation/>}/>

      
      </Routes>
      </Router>
      </div>
  );
}

export default App;