import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
   root: {
      flexGrow: 1
   },
   menuButton: {
      marginRight: theme.spacing(2)
   },
   title: {
      flexGrow: 1
   }
}));

const Header = props => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <AppBar position='static'>
            <Toolbar>
               <Button color='inherit'>PhilBro</Button>
               <Button color='inherit'>Home</Button>
               <Button color='inherit'>About</Button>
               <Button color='inherit'>Courses</Button>
               <Button color='inherit'>How To</Button>
               <Button color='inherit'>Login</Button>
               <Button color='inherit'>Contact</Button>
            </Toolbar>
         </AppBar>
      </div>
   );
};

export default Header;
