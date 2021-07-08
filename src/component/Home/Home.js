import React , {useState} from 'react';
import Apple from '../../assets/logo.png';
import Header from '../Header';
import FoodObese from '../Food/FoodObese'
import './Home.css'
import { Grid , Card , CardContent , makeStyles , Typography , TextField , AppBar , Toolbar , Button } from '@material-ui/core'
const Home = () => {
  const useStyles = makeStyles({
    Appbar : {
      'background-color' : '#aa765a' , 
      height : '77px'
    } , 
    text : {
      'font-size' : '20px' , 
       color : 'white' , 
       'font-weight' : 'bold'
    } , 
    container : {
      display : 'flex' ,
      flexDirection : 'column' , 
      alignItems  : 'center' , 
      
    } ,  
    Card : {
      width : '450px' , 
      'background-color' : '#aa765a' ,
      'border-radius'  : '20px' , 
      border : '3px' ,  
      padding : '10px' ,
      display : 'flex' , 
      'flex-direction' : 'column'  , 
      'align-items' : 'flex-start'




    } , 
    inputs : {
      width : '400px'  , 
      margin : '5px' ,        
  } , 
  text : {
      'font-weight' : 'bold' , 
      fontSize : '25px' , 
      margin : '5px'
      
  } ,
  button : {
    width : '400px' , 
    color : 'white' , 
    'background-color': '#4B4948' , 
    'margin-top' : '30px' , 
    margin : '10px'
}  , 
texts : {
  'font-size' : '20px' , 

} , 
img : {
  'margin-left'  :'1100px' , 
  'margin-top' : '100px'
  // display : 'flex' , 
  // flexDirection : 'row' , 
  // justifyContent : 'flex-end' 

}



  })
  const classes = useStyles()
  const [Height, SetHeight ] = useState(null)
  const [Weight , SetWeight] = useState(null)
  const [Click , setClick]= useState('')
   let sentence = ''
    const HeightHandler = (e) => {
    SetHeight(e.target.value)
  }

  const WeigthHandler = (e) => {
    SetWeight(e.target.value)
  }

  const num = (Weight/100)*(Weight/100)

  let sum = Height/num

  
  if(sum >= 18 & sum <= 25 & sum !== 0)  {
    sentence = ' Your BMI is Normal weight . GOOD JOB . Follow our Workout section to keep FIT and maitain your weight according to a appropriate deit '
  }

  if(sum <= 18 & sum !== 0) {
    sentence = ' Your BMI is Under weight , You MUST gain weight by increasing healthy food & workout daily . Follow our website sections and you will SET A RECORD WITH US !! '
  }

  if(sum >= 25 & sum !== 0) {
    sentence = ' Your BMI is Obese ,You MUST lose weight . Follow our website sections And you will SET A RECORD WITH US !! '
  }
  const show = () => {
    setClick(sentence)
}

 return (
   <Grid>
   <Header />

 
        <Grid>
          <img className = {classes.img} src={Apple} width = {200}/>
    
        </Grid>
        <Grid >
      <Typography className = {classes.Card}>In our website you can calculate your BMI (Body Mass Index) and you'll find what suits you from food and workout to get your body goal </Typography>
      </Grid>


      
      <Grid container className = {classes.container} > 
          
        <TextField className = {classes.inputs}
            id="outlined-password-input"
            label="Weight"
            type="text"
            autoComplete="current-password"
            variant="outlined" 
            onChange = {WeigthHandler}
            />
         <TextField className = {classes.inputs}
            id="outlined-password-input"
            label="Height"
            type="text"
            autoComplete="current-password"
            variant="outlined"
            onChange = {HeightHandler}
            />
        <Button className = {classes.button} onClick={show}> Submit </Button>
        <p>{Click}</p>
      </Grid>
    </Grid>
  

)
}
export default Home ;
