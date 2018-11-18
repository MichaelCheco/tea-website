import React, { Component } from 'react';
import axios from "axios";
export const Context = React.createContext({});

class TeaProvider extends Component {
    constructor() {
        super()
        this.state = {
            teas: [],
            tea: '',
            description: '',
            image: ''
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:9000/api/teas')
        .then(res => {
            this.setState({teas: res.data})
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <Context.Provider value={{state: this.state}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default TeaProvider;