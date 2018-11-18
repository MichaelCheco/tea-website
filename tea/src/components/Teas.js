import React from 'react';
import { Context } from "../contexts/TeaContext";

const Teas = () => {
    return (
        <Context.Consumer>
            {data => {
                if (!data.state.teas) {
                    return <h3>Loading</h3>
                }else {
                return (
                    <h2>{data.state.teas.map(tea => <h2>{tea.name}</h2>)}</h2>
                )
                }
            }}
        </Context.Consumer>
    )
}

export default Teas;