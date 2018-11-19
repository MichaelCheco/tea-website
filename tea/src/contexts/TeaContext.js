import React, { Component } from 'react';
import axios from "axios";
export const Context = React.createContext({});

class TeaProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teas: [],
            tea: '',
            description: '',
            image: '',
            activeItem: null
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:9000/api/teas')
        .then(res => {
            this.setState({teas: res.data})
        })
        .catch(err => console.log(err))
    }
    getItemById = id => {
        axios
          .get(`http://localhost:9000/api/teas/${id}`)
          .then(res => this.setState({ activeItem: res.data }))
          .catch(err => console.log(err))
      }

    routeToItem = (ev, item, props) => {
        ev.preventDefault();
       this.getItemById(item.id)
      
      }

    render() {
        return (
            <Context.Provider value={{state: this.state, actions: {getItem: this.getItemById, routeToItem: this.routeToItem}}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default TeaProvider;