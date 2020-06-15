import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 200,
    minHeight: 200,
    maxHeight: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Module = (props) => {
  const { name, icon } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href="/rpi">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {name}
          </Typography>
          {icon}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Module;
