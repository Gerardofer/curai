import React, { Component } from "react";
import states from "./states";

class Location extends Component {
    state = {
        location: ""
    }
    
    handleChange = (event) => {
        this.setState({
            location: event.target.value
        });
        
        console.log(this.state);
    }
    
    render(){
        const location = this.state;
        
        const estado = states.map((i, e) => {
            return (<option key={e} value={i}>{i}</option>);
        });
        
        return(
            <select 
            className="custom-select"
            value={location}
            onChange={this.handleChange}>
                {estado}
            </select>    
        );
    }
}

export default Location;