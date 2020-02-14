import React from 'react';


const backgroundStyle = {
    backgroundPosition: 'center center',
    height: '100vh',
    display: 'inlineBlock',
    zIndex: '-1',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    flex: 1,
    resizeMode: 'cover',
    backgroundImage: "url(" + 'https://img.mshanken.com/d/wso/Articles/2019/PC_BuiltToAge073119A_1600.jpg' + ")"
   
}

function KegList(){
    return (
        <div style={backgroundStyle}>     
        </div>
    );    
}

export default KegList;