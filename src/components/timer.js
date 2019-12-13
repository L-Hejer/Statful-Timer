import React from 'react';
import ReactDOM from 'react-dom';

const seconds = (x) => (Math.floor((x / 1000) % 60) < 10) ?"0" + Math.floor((x / 1000) % 60) :Math.floor((x / 1000) % 60);
const minutes = (x) => (Math.floor((x / (1000 * 60)) % 60) <10) ?"0" + Math.floor((x / (1000 * 60)) % 60) :Math.floor((x / (1000 * 60)) % 60);
const hours = (x) => (Math.floor((x / (1000 * 60 * 60)) % 24)<10) ?"0" + Math.floor((x / (1000 * 60 * 60)) % 24) :Math.floor((x / (1000 * 60 * 60)) % 24);

class MainTimer extends React.Component {
 constructor(props){
     super(props)
      this.state = {timeStarted: false, timeStopped: true, clock:0, name:'Hour',
       name2:'Minute', name3:'Second', separation:":", bouton:'Start-Button', change:'Start'}
       }


handleTime(e) {
  e.preventDefault();


 if (this.state.timeStopped){
       this.timer = setInterval(
()=>{
     this.setState({ timeStarted: true, timeStopped:false, bouton:'pause-button', change:'Pause'});
    
     if (this.state.timeStarted){
         this.setState({
          clock: this.state.clock +1000})

       

      }
         },1000)
        }
 if(this.state.timeStarted){
  this.setState({ timeStarted: false, timeStopped:true, bouton:'Start-Button', change:'Start'});
  clearInterval(this.timer);
 }
}
//  reset button
stopTime(e){
  e.preventDefault();

  this.setState({clock:0, bouton:'Start-Button', change:'Start'});
  clearInterval(this.timer);
}

        
             
 render(){
   return(
   <div><div className="clock">
           <div className="hour"><h1>{hours(this.state.clock)}</h1> <p>{this.state.name}</p></div> <h1>{this.state.separation}</h1>
           <div className="minute"><h1>{minutes(this.state.clock)}</h1> <p>{this.state.name2}</p></div><h1>{this.state.separation}</h1>
           <div className="second"><h1>{seconds(this.state.clock)}</h1> <p>{this.state.name3}</p></div>
        </div>  
           <div className="buttons"><button className={this.state.bouton} onClick={this.handleTime.bind(this)}>{this.state.change}</button><button className="Reset-Button" onClick={this.stopTime.bind(this)}>Reset</button></div>
       
   </div>
 )}
}


ReactDOM.render(<MainTimer/>, document.getElementById('root'));
export default MainTimer;

