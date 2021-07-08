import React from 'react';
import { Link } from 'react-router-dom';
import { Grid   , makeStyles , Typography  , AppBar , Toolbar , Button } from '@material-ui/core'
const Header = () => {
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

           li : {
            display: 'inline-block' , 
            color : 'white' , 
            padding :'30px' , 
            'font-size': '20px' ,
            'font-weight': 'bold'
          
        }
        
    })
    const classes = useStyles()
    return(
        <Grid container>
        <AppBar className={classes.Appbar}>
          <Toolbar>
          <nav>
       
       <ul >
         <Link to ='/'>
           <li className = {classes.li}>Home</li>
         </Link>
         <Link to ='/food'>
           <li className = {classes.li} >Food</li>
         </Link>
         <Link to ='/workout'>
           <li className = {classes.li} >Workout</li>
         </Link>
         <Link to ='/profile'>
           <li className = {classes.li} >Profile</li>
         </Link>
       </ul>
   
   </nav>

          </Toolbar>
          </AppBar>
        </Grid>
    )

}



export default Header;