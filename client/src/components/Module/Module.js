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
    maxWidth: 200,
    maxHeight: 200,
  }
});

const Module = (props) => {
  const { name, icon, path } = props;
  const classes = useStyles();

  return (
    
      <Card className={classes.root}>
      <CardActionArea href={path}>
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
