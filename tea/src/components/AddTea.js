import React from 'react';
import { Context } from "../contexts/TeaContext"
const AddTea = () => (
    <Context.Consumer>
        {data => {
            return (
                <form onSubmit={data.actions.addTea}>
                <input 
                type="text"
                name="name"
                placeholder="name"
                value={data.state.name}
                onChange={data.actions.handleChange}
                />
                <input 
                type="text"
                name="description"
                placeholder="description"
                value={data.state.description}
                onChange={data.actions.handleChange}
                />
                <input 
                type="text"
                name="message"
                placeholder="paste image address here"
                value={data.state.message}
                onChange={data.actions.handleChange}
                />
                <button type="submit" onClick={data.actions.addTea}>{data.state.toggle ? "Success!" : "Add"}</button>
                </form>
            )
        }}
    </Context.Consumer>
)
 
export default AddTea;