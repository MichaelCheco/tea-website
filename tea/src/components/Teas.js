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
                    <div>
                    {data.state.teas.map(tea => (
                        <div>
                        <h2>{tea.name}</h2>
                        <img src={tea.message} alt="tea" />
                        <p>{tea.description}</p>
                        </div>
                        )
                        )}                 
                    </div>
                )
                }
            }}
        </Context.Consumer>
    )
}

export default Teas;