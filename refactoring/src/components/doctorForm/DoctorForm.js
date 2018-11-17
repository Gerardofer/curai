import React, { Component } from "react";
import states from "./states";
import "./doctorForm.css";

class DoctorForm extends Component{
    state = {
        age: "",
        gender: "",
        location: ""
    }
    
    handleChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        });
        
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        
        this.setState({
            age: "",
            gender: "",
            location: ""
        });
        
        console.log(this.state);
    }
    
    render(){
        
        const { age, gender, location } = this.state;
        
        const estado = states.map((i, e) => {
            return (<option key={e} value={i}>{i}</option>);
        });
        
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
                        name="gender"
                        value={gender}
                        onChange={this.handleChange}>
                            <option value=""></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <select 
                        className="custom-select"
                        name="location"
                        value={location}
                        onChange={this.handleChange}>
                            {estado}
                        </select> 
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-outline-light">TALK TO A DOCTOR NOW</button>
                    </div>
                </div>
            </form>
            <div>
                <i class="fa fa-play-circle-o" aria-hidden="true"></i>
             <a className="video-link" href="https://www.youtube.com/embed/lP0Mp-R5zvw?autoplay=1"><p>Watch the Video</p></a> 
            </div>
        </div>    
        );
    }
}

export default DoctorForm;

