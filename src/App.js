import React from 'react';
import Home from './component/Home/Home';
import SignIn from './component/Sign/SignIn';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
function App() {
// const useStyles = makeStyles({
//   Appbar : {
//     'background-color' : '#aa765a' , 
//     height : '77px'
//   } , 
//   text : {
//     'font-size' : '20px' , 
//      color : 'white' , 
//      'font-weight' : 'bold'


//   }
// })
// const classes = useStyles()
  return (

    <Grid>
      <Router>
        <Switch>
          <Route exact path = "/" component={SignIn}/>
          <Route exact path = "/Home" component={Home}/>
        </Switch>
      </Router>
      
    
    
    </Grid>
  );
}

export default App;














