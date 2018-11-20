import axios from 'axios';

export function getTea() {
	axios
		.get('http://localhost:9000/api/teas')
		.then((res) => {
			this.setState({ teas: res.data });
		})
		.catch((err) => console.log(err));
	axios
		.get('http://localhost:9000/api/teaware')
		.then((res) => {
			this.setState({ teaware: res.data });
		})
		.catch((err) => console.log(err));
}

export function handleChange(e) {
	this.setState({ [e.target.name]: e.target.value });
}

export function addTea(e) {
	e.preventDefault();
	const info = {
		name: this.state.name,
		description: this.state.description,
		message: this.state.message
	};
	axios.post('http://localhost:9000/api/teas', info).then((res) => console.log(res)).catch((err) => console.log(err));
	this.setState({ toggle: !this.state.toggle });
	setTimeout(() => this.setState({ toggle: false }), 1000);
}
