import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';

import Close from '@material-ui/icons/Close';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { makeStyles } from '@material-ui/styles';

import styles from './style';

const useStyles = makeStyles(styles);

export default function ConnectModal({ hasPassword, open, name, handleClose }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const connect = async () => {
    try {
      setLoading(true);
      const form = new FormData();

      form.set('ssid', name);
      form.set('password', password);

      const resp = await fetch('http://192.168.1.1/connect', {
        method: 'POST',
        body: form,
      });

      const data = resp.json();

      window.localStorage.setItem('uid', data.uid);

      window.location = '/connected';
    } catch (err) {
      console.error(err);

      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open && !hasPassword) {
      connect();
    }
  }, [open]);

  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Grid container justify="flex-end">
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="h4">
            Connect
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="h6">
            to
            {' '}
            {name}
          </Typography>
        </Grid>
        {
          !loading && hasPassword
          && (
            <>
              <Grid item xs={10} className={classes.password}>
                <TextField
                  color="secondary"
                  fullWidth
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  variant="filled"
                  value={password}
                  error={error}
                  helperText={error && 'Incorrect password, please try again'}
                  onChange={({ target: { value } }) => setPassword(value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          { showPassword ? <VisibilityOff /> : <Visibility /> }
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={10}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={connect}
                >
                  Connect
                </Button>
              </Grid>
            </>
          )
        }
        {
          loading
          && (
            <Grid item xs={12}>
              <Grid container justify="center" alignItems="center" className={classes.loading}>
                <CircularProgress color="secondary" />
                <Grid item xs={12}>
                  <Typography variant="body2" align="center">
                    Connecting...
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )
        }
      </Grid>
    </Dialog>
  );
}

ConnectModal.propTypes = {
  hasPassword: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
