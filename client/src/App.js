import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap-css';
import './Services/auth'
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { routes } from './routing';
import Auth from "./Services/auth";

export default class App extends React.Component{

	tick() {
		let auth = Auth.isAuth();
		if (auth !== this.state.auth) {
			this.setState({auth: auth});
		}
	}

	componentWillMount () {
		this.setState({auth: Auth.isAuth()});
		setInterval(this.tick.bind(this), 5000)
	}

	componentWillUnmount(){
		clearInterval(this.timer);
	}

	render() {
		return (
			<BrowserRouter>
				<Layout>
					{
						routes.map(route => (
							<Route path={route.path} component={route.component} exact key={route.path}/>
						))
					}
				</Layout>
			</BrowserRouter>
		);
	}
};
