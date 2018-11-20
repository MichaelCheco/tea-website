import React, { Component } from 'react';
// all of your functions are imported from here
import * as actions from './actions';

const Context = React.createContext();

export const Consumer = Context.Consumer;

export class Provider extends Component {
	state = {
		teas: [],
		teaware: [],
		tea: '',
		description: '',
		message: '',
		activeItem: null,
		toggle: false
	};

	// this function gets passed your actions as an object, iterates through each of them and binds them to this component
	attachMethods = (data_obj) => {
		return Object.keys(data_obj).reduce((obj, prop) => {
			obj[prop] = data_obj[prop].bind(this);
			return obj;
		}, {});
	};

	render() {
		return (
			<Context.Provider
				value={{
					// spreading in state and functions so that you don't have to manually do it every time you add something
					...this.state,
					...this.attachMethods(actions)
				}}
			>
				{this.props.children}
			</Context.Provider>
		);
	}
}

// this HOC will allow you to pass in your component name as the argument ex connectStore(Tea)
// that gives it access to everything you have in the store by stating this.props
export const connectStore = (DependentComponent) => {
	return class extends Component {
		render() {
			return <Consumer>{(context) => <DependentComponent {...context} />}</Consumer>;
		}
	};
};
