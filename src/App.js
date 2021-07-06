import './App.css';
import { Grid , AppBar , Toolbar , Typography , makeStyles } from '@material-ui/core'
function App() {
const useStyles = makeStyles({
  Appbar : {
    'background-color' : '#cb997e' , 
    height : '77px'
  } , 
  text : {
    'font-size' : '20px' , 
     color : 'black' , 
     'font-style' : 'bold'


  }
})
const classes = useStyles()
  return (

    <Grid>
      <AppBar className={classes.Appbar}>
        <Toolbar>
          <Typography className = {classes.text}>Healthy lifestyle</Typography>
        </Toolbar>
         </AppBar>
    
    </Grid>
  );
}

export default App;
