import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Createuser from "./component/Createuser";


function App(){
    
        return(
            <Router>
            <Route  path="/" component={Createuser} />
            </Router>
       
            
        );
        }
    
    export default App;
