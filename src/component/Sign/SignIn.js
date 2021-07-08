import React , { useState } from 'react';
import { useHistory } from "react-router-dom";
import Home from '../Home/Home'
import HealthyLifestyle from '../../assets/HealthyLifestyle.jpg'
import { Grid , Typography , TextField , makeStyles , Button } from '@material-ui/core'
const SignIn = () => {
    let history = useHistory(['']);

    const [Signup , SetSignup] = useState(false)
    const [Username , Setusername] = useState('')
    const [Password , Setpassword] = useState('')
    const SignupHandler = () => {
        SetSignup(true)
    }
    const Usernamehandler = (event) => {
        Setusername(event.target.value)
    }
    const Passwordhandler = (event) => {
        Setpassword(event.target.value)
    }
    let condition = ''
    const useStyles = makeStyles({
        container : {
            display : 'flex' , 
            flexDirection  :'column' , 
            alignItems : 'center'
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
        img : {
            width : '300px' , 
            height : '125px' ,


        } , 
        inputcontainer : {
            flex: 'block' , 
            flexDirection : 'column' , 
            alignItems : 'center ' , 
        } , 
        button : {
            width : '400px' , 
            color : 'white' , 
            'background-color': '#4B4948' , 
            'margin-top' : '30px' , 
            margin : '10px'
        } , 
        a : {
            color : 'blue' , 
            'background-color' : '#ffe8d6' , 
            'font-weight'  : 'bold' , 
            'font-size'  : '20px'
        } , 

    }) 
    const classes = useStyles()
    if (Signup) {
        condition =
        <form>
         <Grid container  className = {classes.inputcontainer}>
            <TextField className = {classes.inputs}
            id="outlined-password-input"
            label="Email"
            type="text"
            autoComplete="current-password"
            variant="outlined"
            />
            <TextField
             className = {classes.inputs}
            id="outlined-password-input"
            label="Username"
            type="text"
            autoComplete="current-password"
            variant="outlined"
            />   
            <TextField className = {classes.inputs}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            />
            <Button onClick = {() => { history.push("/Home");}} className = {classes.button}>save</Button>


        </Grid>
        </form>
    }
    return (
        <form>
        <Grid container className = {classes.container} >
            <Grid className = {classes.imgcontainer}>
            <img className = {classes.img} src = {HealthyLifestyle}/>
            </Grid>
            <Grid container  className = {classes.inputcontainer}>  
            <TextField
             className = {classes.inputs}
            id="outlined-password-input"
            label="Username"
            type="text"
            autoComplete="current-password"
            variant="outlined"
            />   
            <TextField className = {classes.inputs}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            />
            </Grid> 
            <Button  onClick = {() => { history.push("/Home");}} className = {classes.button}>Log In </Button>
            <Typography className = {classes.text}>Don't have an account?<Button onClick = {SignupHandler} className = {classes.a}>Sign up</Button> </Typography>
            {condition}
            
    
        </Grid>
        </form>

    )
}


export default SignIn;
