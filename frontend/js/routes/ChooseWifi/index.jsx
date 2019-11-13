import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import { makeStyles } from '@material-ui/styles';

import WiFi from './WiFi';

import style from './style';

const useStyles = makeStyles(style);

const data = [
  {
    name: 'The Promise LAN',
    hasPassword: true,
    strength: 4,
  },
  {
    name: 'The Promise LAN 2.4GHz',
    hasPassword: true,
    strength: 2,
  },
  {
    name: 'xfinity',
    hasPassword: false,
    strength: 4,
  },
];

export default function Home() {
  const classes = useStyles();

  const [networks, setNetworks] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <Grid container justify="center">
      <Grid item xs={12} className={classes.main}>
        <Grid item sm={8} xs={12}>
          <Typography align="left" variant="h3" className={classes.title}>Lets get</Typography>
          <Typography align="left" variant="h3" className={classes.title}>connected.</Typography>
        </Grid>
      </Grid>
      {
        loading
        && (
          <>
            <Grid item className={classes.loading}>
              <CircularProgress color="secondary" />
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">
                Scanning for networks...
              </Typography>
            </Grid>
          </>
        )
      }
      <Grid item xs={12}>
        <List
          className={classes.wifiList}
          subheader={(
            <ListSubheader>
            Select a wifi network
            </ListSubheader>
        )}
        >
          {
            data.map((d) => <WiFi {...d} />)
          }
        </List>
      </Grid>
    </Grid>
  );
}
