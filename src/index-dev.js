import React from 'react';
import ReactDOM from 'react-dom';

import StepBar from "./StepBar/StepBar.jsx";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


class Main extends React.Component {
	
	state = { step1: 0, step2:0, step3:2 }
	
	array1 = [	{label:"A"}, {label:"B"}, {label:"C"},	{label:"D"}]
	array2 = [	{label:"XXX"}, {label:"XXX"}, {label:"XXX"}]
	array3 = [	{label:"A"}, {label:"B"}, {label:"C"}, {label:"D"}, {label:"E"},{label:"F"},{label:"G"}]
		
	onChange1 = () =>{
		var i = this.state.step1 < (this.array1.length-1) ? this.state.step1+1 : 0; 	
		this.setState({step1: i});
	}
	
	onChange2 = () =>{
		var i = this.state.step2 < (this.array2.length-1) ? this.state.step2+1 : 0; 	
		this.setState({step2: i});
	}
	
		
	onChange3 = () =>{
		var i = this.state.step3 < (this.array3.length-1) ? this.state.step3+1 : 0; 	
		this.setState({step3: i});
	}
	
	
	render = ()=>{
		return (	

			
			<div className="container">
				<div className="row" >

					<div className="col-xs-12">				
						<div style={{'width':'100%', 'maxWidth':'600px', 'margin':'auto'}}>
							<StepBar index={this.state.step1} array={this.array1}  />
							<button className="btn btn-primary" onClick={this.onChange1}>Next</button>
						</div>	
						<br /><br/> <br />
					</div>		
					
					<div className="col-xs-12">				
						<div style={{'width':'100%', 'maxWidth':'400px', 'margin':'auto'}}>
							<StepBar index={this.state.step2} array={this.array2}  />
							<button className="btn btn-primary" onClick={this.onChange2}>Next</button>
						</div>	
						<br /><br/> <br />
					</div>		
					<div className="col-xs-12">				
						<div style={{'width':'100%', 'maxWidth':'800px', 'margin':'auto'}}>
							<StepBar index={this.state.step3} array={this.array3}  />
							<button className="btn btn-primary" onClick={this.onChange3}>Next</button>
						</div>	
					</div>							
				</div>
			</div>			
			
			
			
			
		)
		
	}
}

ReactDOM.render( <Main />, document.getElementById('app'));

/*

					<div className="col-xs-12">
						<div >
							<StepBar index={this.state.step1} array={this.array1}  />
							<button onClick={this.onChange1}>Next</button>
						</div>
						<br /><br /><br />
					</div>
*/