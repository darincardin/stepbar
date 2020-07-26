import React from "react";
import PropTypes from 'prop-types';

import './styles.scss';

class StepBar extends React.Component{
	
    render() {
		return (
			<div className="step-bar" > 
				<ul>
				{
					this.props.array.map((v,i)=>(
						<li key={i} className={this.props.index==i?'active':''}>{v.label}</li>
					))
				}
			    </ul>
			</div> 
			)
	}
}


StepBar.propTypes = {
    index: PropTypes.number.isRequired,
    array: PropTypes.array.isRequired
};

export default StepBar;



