import React from 'react';
import ReactDOM from 'react-dom';

import StepBar from "./StepBar/StepBar.jsx";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


class Main extends React.Component {
	
	state = {step: 0 }
	
	array = [
		{label:"Customer Info"},
		{label:"Order Info"},
		{label:"Done"}
	]
	
		
	onChange = () =>{
		var i = this.state.step < 2 ? this.state.step+1 : 0; 	
		this.setState({step: i});
	}

	
	render = ()=>{
		return (	
			<div style={{'width':'500px', 'margin':'auto'}}>
				<StepBar index={this.state.step} array={this.array} />
				<button onClick={this.onChange}>Next</button>
			</div>
		)
		
	}
}


ReactDOM.render( <Main />, document.getElementById('app'));

