import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import Refresh from '@material-ui/icons/Refresh';

import { makeStyles } from '@material-ui/styles';

import WiFi from './WiFi';

import style from './style';

const useStyles = makeStyles(style);

export default function Home() {
  const classes = useStyles();

  const [networks, setNetworks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNetworks = async () => {
    // try {
    //   setLoading(true);

    //   const request = await fetch('http://192.168.1.1/networks');

    //   const json = await request.json();

    //   setLoading(false);

    //   if (json.networks) {
    //     json.networks.sort((a, b) => b.strength - a.strength);
    //     setNetworks(json.networks);
    //   }
    // } catch (err) {
    //   setLoading(false);

    //   console.error(err);
    // }

    setLoading(false);

    setNetworks([
      {
        name: 'Test Network',
        hasPassword: true,
        strength: 4,
      },
      {
        name: 'The Promise LAN 2.4Ghz_EXT',
        hasPassword: true,
        strength: 3,
      },
    ]);
  };

  useEffect(() => {
    getNetworks();
  }, []);

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
      {
        !loading
        && (
          <Grid item>
            <IconButton onClick={getNetworks}>
              <Refresh />
            </IconButton>
          </Grid>
        )
      }
      {
        networks.length > 0
        && (
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
              networks.map((n) => <WiFi key={n.name} {...n} />)
            }
            </List>
          </Grid>
        )
      }
      {
        !loading && networks.length === 0
        && (
          <Grid item xs={12}>
            <Typography align="center" variant="subtitle1">
              No networks found.
            </Typography>
          </Grid>
        )
      }
    </Grid>
  );
}
