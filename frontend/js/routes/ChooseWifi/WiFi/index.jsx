import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Lock from '@material-ui/icons/Lock';

import WiFiStrength1 from '@material-ui/icons/SignalWifi1BarOutlined';
import WiFiStrength2 from '@material-ui/icons/SignalWifi2BarOutlined';
import WiFiStrength3 from '@material-ui/icons/SignalWifi3BarOutlined';
import WiFiStrength4 from '@material-ui/icons/SignalWifi4BarOutlined';

import LockedWiFiStrength1 from '@material-ui/icons/SignalWifi1BarLock';
import LockedWiFiStrength2 from '@material-ui/icons/SignalWifi2BarLock';
import LockedWiFiStrength3 from '@material-ui/icons/SignalWifi3BarLock';
import LockedWiFiStrength4 from '@material-ui/icons/SignalWifi4BarLock';

const wifi = [
  <WiFiStrength1 />,
  <WiFiStrength2 />,
  <WiFiStrength3 />,
  <WiFiStrength4 />,
];

const lockedWifi = [
  <LockedWiFiStrength1 />,
  <LockedWiFiStrength2 />,
  <LockedWiFiStrength3 />,
  <LockedWiFiStrength4 />,
]

export default function WiFi({ name, hasPassword, strength }) {
  return (
    <ListItem button divider>
      <ListItemText primary={name} />
      <ListItemIcon>
        { hasPassword ? lockedWifi[strength - 1] : wifi[strength - 1] }
      </ListItemIcon>
    </ListItem>
  );
}

WiFi.propTypes = {
  name: PropTypes.string.isRequired,
  hasPassword: PropTypes.bool.isRequired,
  strength: PropTypes.number.isRequired,
};
