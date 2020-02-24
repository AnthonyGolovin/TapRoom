import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

var masterKegList = [
    {
      names: 'Vodka',
      brand: 'VodiiRuski Sver',
      price: '$40',
      alcoholContent:'Yes'
    },
    {
      names: 'Lean',
      brand: 'Sprite',
      price: '$2',
      alcoholContent:'Yes'
    },
    {
      names: 'Beer',
      brand: 'Beerlight Bud',
      price: '0.50',
      alcoholContent:'Yes'
    }
  ];

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

  export default function Kegs() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

  return (
      <div style={moveCard}>
    <Card className={classes.root} className="modeHolder" variant="outlined">
    <CardContent className="modeHolder">
    
    <form>
        <h3>Kegs:</h3>
            <TextField id="filled-basic" label="Search Kegs" variant="filled" />
      </form> 
            
            {masterKegList.map((Keg, index) =>
            <div>
            <p>{Keg.names}&emsp;<Button  variant="contained" size="small" color="secondary"><Link to="/KegView">View</Link></Button></p>
            </div>
      )}
    </CardContent>
    
    <CardActions className="modeHolder">
      <Button   variant="contained" size="medium" color="secondary">Add to Cart</Button>
    </CardActions>
  </Card>
 
   
    </div>
  );
}