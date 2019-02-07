import React, { Component } from 'react';
import './App.css';
// import Scroller from './Scroller';


class Scroller extends React.Component {
  constructor(props){
    super(props);
    this.refScroller = React.createRef();
    this.state = {
      isVisible : false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount(){
    console.log('did mount');
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {   
    this.setState({
      isVisible : true
    })
    console.log(this.state.isVisible);
    
    setTimeout(() => {
      this.setState.isVisible = false
    }, 1000)
  }
  componentWillUnmount(){
  }
  render(){
      return(
          <div ref = {scroller => this.refScroller = scroller}>
           { this.state.isVisible  && "Scrolling"}   
          </div>
      )
  }    
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Scroller />


        </header>
      </div>
    );
  }
}

export default App;
