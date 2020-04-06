import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';

import Close from '@material-ui/icons/Close';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { makeStyles } from '@material-ui/styles';

import styles from './style';

const useStyles = makeStyles(styles);

export default function EnterPassword({ open, name, handleClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const classes = useStyles();

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
            Enter Password
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="h6">
            for
            {' '}
            {name}
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.password}>
          <TextField
            color="secondary"
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    { showPassword ? <VisibilityOff /> : <Visibility /> }
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={10}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
          >
            Connect
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
}

EnterPassword.propTypes = {
  open: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
