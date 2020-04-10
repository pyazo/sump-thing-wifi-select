import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Check from '@material-ui/icons/Check';

import { makeStyles } from '@material-ui/styles';

import style from './style';

const useStyles = makeStyles(style);

export default function Connected() {
  const classes = useStyles();

  const uid = window.localStorage.getItem('uid');

  useEffect(() => {
    fetch('http://192.168.1.1/stop-wifi');
  }, []);

  return (
    <Grid container justify="center" alignItems="center" className={classes.container}>
      <Grid item xs={12}>
        <Grid contianer justify="flex-start">
          <Grid item xs={12}>
            <Typography align="left" variant="h3" className={classes.title}>Ready...</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="left" variant="h3" className={classes.title}>Set...</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="left" variant="h3" className={classes.title}>Go!</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Check className={classes.check} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" alignItems="flex-end">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              window.localStorage.clear();

              window.open(`https://sump-thing.com/register?uid=${uid}`, '_self');
            }}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
