import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button } from './components/Button';
import * as serviceWorker from './serviceWorker';


class Random extends React.Component {
  constructor(props){
    super(props);
    this.state = {color: [21, 134, 125]};
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  handleClick() {
    this.setState({
      color: this.chooseColor()
    });
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
        Your color is {this.formatColor(this.state.color)} 
        </h1>
        <Button 
        light={this.isLight()} 
        onClick={this.handleClick}/>
      </div>
    );
  }
}


ReactDOM.render(
  <Random />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
