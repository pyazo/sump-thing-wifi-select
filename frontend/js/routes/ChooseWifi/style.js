const styles = theme => ({
  main: {
    color: theme.palette.primary.contrastText,
    paddingTop: theme.spacing(6),
    paddingLeft: theme.spacing(2),
  },
  title: {
    fontWeight: 700,
  },
  loading: {
    paddingTop: theme.spacing(10),
    marginBottom: theme.spacing(1),
  },
  wifiList: {
    width: '100%',
  },
});

export default styles;
