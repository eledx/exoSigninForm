import React, { Component } from 'react';

class Signup extends Component {

	state = {
		email : '',
		password : '',
		passwordBis : '',
		firstName : '',
		lastName: ''
	}



	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = (e) => {
		console.log(this.state)
		e.preventDefault()
	}

	render() {
		return (
			<div >
				<h1>{JSON.stringify(this.state,1,1)}</h1>
				<form onSubmit={this.handleSubmit}>
					<label>email</label>
					<input type='text' name='email' value ={this.state.email} onChange={this.handleChange}/>
					<label>password</label>
					<input type='text' name='password' value ={this.state.password} onChange={this.handleChange}/>
					<label>password confirmation</label>
					<input type='text' name='passwordBis' value ={this.state.passwordBis} onChange={this.handleChange}/>
					<label>firstname</label>
					<input type='text' name='firstName' value ={this.state.firstName} onChange={this.handleChange}/>
					<label>lastname</label>
					<input type='text' name='lastName' value ={this.state.lastName} onChange={this.handleChange}/>
					<input type="submit" value="Soumettre"/>
				</form>
			</div>
		);
	}
}

export default Signup;