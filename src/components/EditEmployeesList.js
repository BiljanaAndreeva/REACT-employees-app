import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from 'semantic-ui-react';

class EditEmployeesList extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props);
        const { id,firstName,lastName ,address, email,gender,dateOfBirth }=props.location.state.employee;
        this.state={
            id:id,firstName:firstName,lastName:lastName,address:address,email:email,gender:gender,dateOfBirth:dateOfBirth
        };
    }    

     update = (e) => {
        e.preventDefault();
        if(this.state.firstName==="" || this.state.lastName==="" || this.state.address==="" || this.state.email==="" || this.state.gender==="" || this.state.dateOfBirth===""){
            alert("All fields are mandatory!");
            return;     
        }
        this.props.updateHandler(this.state);
        this.setState({firstName:"",lastName:"",address:"",email:"",gender:"",dateOfBirth:""});
        this.props.history.push("/");


    };
    render() {
    return(
        <div className="ui main">
            <h2>Edit Employee</h2>

            <form className="ui form" onSubmit={this.update}>
                <div className="field">
                    <label>First Name</label>
                    <input 
                    type="text"
                     name="firstName" 
                     placeholder="Edit First Name"
                     value={this.state.firstName}
                     onChange={(e)=>this.setState({firstName:e.target.value})}
                    ></input>
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Edit Last Name"
                    value={this.state.lastName}
                    onChange={(e)=>this.setState({lastName:e.target.value})} ></input>
                </div>
                <div className="field">
                    <label>Address</label>
                    <input type="text" name="address" placeholder="Edit Address"
                    value={this.state.address}
                    onChange={(e)=>this.setState({address:e.target.value})} ></input>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Edit Email"
                    value={this.state.email}
                    onChange={(e)=>this.setState({email:e.target.value})}
                    
                    ></input>
                </div>
                <div className="field">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" type="text" placeholder="Edit First Name"
                    value={this.state.gender}
                    onChange={(e)=>this.setState({gender:e.target.value})} >
                        <option name="izberi" value="prazno"></option>
                        <option name="male" value="male">Male</option>
                        <option name="female" value="female">Female</option>

                    </select>
                </div>
                <div className="field">
                    <label>Date of Birth</label>
                    <input type="date" placeholder="Edit"
                    value={this.state.dateOfBirth}
                    onChange={(e)=>this.setState({dateOfBirth:e.target.value})} ></input>
                </div>
                <button className="ui button blue">Update</button>
            </form>
        </div>
    );
    }

}
export default EditEmployeesList;