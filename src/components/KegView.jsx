import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const moveCard = {
  paddingLeft:'250px',
  paddingTop:'20px'
}
const useStyles = makeStyles({
  root: {
    minWidth: 365,
    width: '170px',
    height: '400px',
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 1px',
    transform: 'scale(0.3)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 1,
  },
});




function KegView(){
  const classes = useStyles();
    return(
      <div style={moveCard}>
            <Card variant="outlined"className={classes.root} >
                <CardContent>
                <h4>Names:(HardCode)</h4>
                <p>Brand:(HardCode)</p>
                <p>Price:(HardCode)</p>
                <p>AlcoholContent:(HardCode)</p>
                <Button   variant="contained" size="medium" color="secondary"><Link to="/">Return</Link></Button>
                </CardContent>
            </Card>
        </div>
    );    
}

export default KegView;
