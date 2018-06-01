import React from "react";
import './style.css';

export default class Input extends React.Component {
	render() {
		let { label, name, type, style, value, title } = this.props;
		style = style || {};
		style.borderColor = this.props.isValid === undefined ? "": this.props.isValid ? "green" : "red";
		return(
			<div className="loginRow">
				<label htmlFor={name}>{label}</label>
				<input id={name} type={type} name = {name} value={value} style={style}
				       title={title} onChange={this.props.onChange}/>
			</div>
		);
	}
}