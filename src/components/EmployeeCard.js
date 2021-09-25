import React from "react";
import user from '../images/user.png';
import { Link } from "react-router-dom";

const EmployeeCard = (props) =>{
    
    const {id, firstName, lastName, address, email, gender, dateOfBirth}= props.employee;
    console.log(props);
    return (

        <div className="item">
            <img className="ui avatar image" alt="user" src={user}/>
            <div className="content">
                <div className="header"><h3>{firstName} {lastName}</h3></div>
                <div>address: {address}</div>
                <div>email: {email}</div>
                <div>gender: {gender}</div>
                <div>date of birth: {dateOfBirth}</div>

            </div>

            <i className="trash alternate outline icon" 
            style={{ color: "red", marginTop: "7px", marginLeft: "10px" }} 
             onClick={() => props.clicking(id)}></i>

            <Link to={{ pathname: `/edit` , state: { employee: props.employee} }}>
            <i className="edit alternate outline icon"
            style={{ color: "blue", marginTop: "7px" }}></i>
            </Link>

            
        </div>
    );

};    
export default EmployeeCard;        