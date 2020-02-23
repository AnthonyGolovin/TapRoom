import { Switch, Route, } from 'react-router-dom';
import React from 'react';
import KegList from './components/KegList';
import KegView from './components/KegView';
import Error404 from './components/Error404';
import './App.css';
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

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      darkmode : true
    }
    this.changemode = this.changemode.bind(this);
  }

  changemode(){
    if(this.state.darkmode) {
      this.setState({darkmode: false})
    } else {
      this.setState({darkmode: true})
    }
  }
  
  render(){
    let mode = null;
    let lights = null;
    if (this.state.darkmode){
      mode = 'darkmode';
      lights = 'Lights off!';
    } else {
      mode = 'lightmode';
      lights = 'Lights on!';
    }
  return (
    
    <div className={mode} style={backgroundStyle}>
      <input type="checkbox" onClick={this.changemode}></input>
      <Switch>
      <Route exact path='/' component={KegList} /> 
      <Route path='/KegView' component={KegView} />
      <Route component={Error404} />
      </Switch> 
    </div>
    
  );
}
}
export default App;
