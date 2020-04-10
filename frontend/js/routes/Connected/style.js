const style = (theme) => ({
  container: {
    padding: theme.spacing(2),
    height: '100%',
  },
  title: {
    fontWeight: 700,
  },
  button: {
    width: 400,
    padding: theme.spacing(2),
    fontSize: theme.spacing(3),
  },
  check: {
    fontSize: theme.spacing(20),
    color: theme.palette.success[400],
  },
});

export default style;
