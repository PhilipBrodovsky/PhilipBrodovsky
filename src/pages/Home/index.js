import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   page: {
      minHeight: '100vh',
      background: 'url(home-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
   },
   header: {
      flexGrow: 1
   },
   joinCourse: {
      flexGrow: 4
   },
   card: {
      color: 'white',
      border: '1px solid',
      height: '300px',
   }
}));

export default ({ props }) => {
   const classes = useStyles();
   return (
      <Grid className={classes.page} direction='column' container>
         <Grid className={classes.header} item container justify='center' alignItems='center'>
            Philip Brodovsky Full Stack Web Developer
         </Grid>
         <Grid className={classes.joinCourse} item container justify='center' alignItems='center'>
            <Grid className={classes.card} item>
               <Typography variant='h6'>Full Stack Developer Course</Typography>
               <Button color='primary' variant='contained'>register</Button>
            </Grid>
         </Grid>
      </Grid>
   );
};
