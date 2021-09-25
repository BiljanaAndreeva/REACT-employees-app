import React from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from 'semantic-ui-react';

class AddEmployee extends React.Component{
    state = {firstName:"",lastName:"",address:"",email:"",gender:"",dateOfBirth:"" 
    };
    add = (e) => {
        e.preventDefault();
        if(this.state.firstName==="" || this.state.lastName ==="" || this.state.address==="" 
        || this.state.email==="" ||  this.state.gender==="" ||  this.state.dateOfBirth==="" ){
            alert("All fields are mandatory!");
            return;
        }
        this.props.AddEmployeeHandler(this.state);
        this.setState({firstName:"",lastName:"",address:"",email:"",gender:"",dateOfBirth:""});
        this.props.history.push("/");


    };
    render() {
    return(
        <div className="ui container">
            <h2>Add Employee</h2>

            <form className="ui form" onSubmit={this.add}>
                <div className="equal width fields">
                    <div className="field">
                        <label>First Name</label>
                        <input 
                        type="text" 
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={(e)=> this.setState({firstName: e.target.value}) }></input>
                        
                    </div> 
                    <div className="field">   
                        <label>Last Name</label>
                        <input 
                        type="text" 
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={(e)=>this.setState({lastName: e.target.value})} ></input>
                    </div>

                    <div className="field">   
                        <label>Address</label>
                        <input  
                        type="text" 
                        placeholder="Address"
                        value={this.state.address}
                        onChange={(e)=> this.setState({address: e.target.value})} ></input>
                    </div>
                </div>

                <div className="equal width fields">

                    <div className="field">   
                        <label>Email</label>
                        <input 
                        type="email" 
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e)=>this.setState({email: e.target.value})} ></input>
                    </div>
                
                <div className = "ui field">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" name="gender" placeholder="ccccc"
                        value={this.state.gender}
                         onChange={(e)=>this.setState({gender: e.target.value})} >
                             <option key="izberi" name="izberi" value="izberi"> </option>
                            <option key="male" name="male" value="male">Male</option>
                            <option  key="female" name="female" value="female">Female</option>
                        </select>
                    </div>    
                    <div className = "ui field">
                        <label>Date of Birth</label>
                        <input type="date" placeholder="Date of Birth"
                        value={this.state.dateOfBirth}
                         onChange={(e)=>this.setState({dateOfBirth: e.target.value})} ></input>
                    </div>
                </div>
                
                    <button className="ui button blue">Add Employee</button>  
            
            </form>


        </div>

        
    );
    }
}

export default AddEmployee;