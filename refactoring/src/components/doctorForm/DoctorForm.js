import React, { Component } from "react";
import Location from "../Location/Location";
import "./doctorForm.css";



//I need to keep the state here and pass it down as props to the other components.

class DoctorForm extends Component{
    state = {
        age: "",
        gender: ""
    }
    
    handleChange = (event) => {
        
        this.setState({
            age: event.target.value,
            gender: event.target.value
        });
        console.log(this.state);
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            age: 0,
            gender: ""
        });
        
        console.log(this.state);
    }
    
    render(){
        
        const { age, gender } = this.state;
        
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-sm-2">
                        <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Age"
                        name="age"
                        value={age}
                        onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-2">
                        <select 
                        className="custom-select"
                        value={gender}
                        onChange={this.handleChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                       <Location />
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-outline-light">TALK TO A DOCTOR NOW</button>
                    </div>
                </div>
            </form>
        </div>    
        );
    }
}

export default DoctorForm;

