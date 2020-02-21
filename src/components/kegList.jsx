import React from 'react';
import Kegs from './Keg';

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

function KegList(){
    return (
        <div> 
        {masterKegList.map((keg, index) =>
            <Keg names={keg.names}
             brand={keg.brand}
             price={keg.price}
             key={index}/>
            )}
        <Kegs></Kegs>    
        </div>
    );    
}

export default KegList;