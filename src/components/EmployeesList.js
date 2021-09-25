import React, { useRef } from "react";
import {Link} from "react-router-dom";
import EmployeeCard from "./EmployeeCard";

const EmployeesList = (props) => {
//    console.log(props);

    const inputEl = useRef("");
    
    const deleteEplHandler = (id) => {
        props.getEmployeeId(id);
    };

    const renderEmployeesList=props.employees.map((employee)=>{
        return (
            <EmployeeCard 
            employee={employee} 
            clicking={deleteEplHandler} 
            key={employee.id} />
        );
    }
    );

    const getSearchTerm=()=>{
        props.searchKeyWord(inputEl.current.value)
     //   console.log(inputEl.current.value);
    };
    
    return (
        <div className="main">
            <h2>Employees List 
                <Link to="/add">
                    <button className="ui button blue right"> AddEmployee </button>
                </Link>    
            </h2>

            <div className="ui search">
                <div className="ui icon input">
                    <input
                        ref={inputEl} 
                        type="text" 
                        placeholder="Search employee" 
                        className="prompt"
                        value={props.searchTerm}
                        onChange={getSearchTerm}
                         ></input>
                    <i className="search icon"></i>
                </div>
            </div>
            
        
            <div className="ui celled list">{renderEmployeesList.length >0 ? renderEmployeesList: "No employee whit that term" } </div>
        </div>
    );
};

export default EmployeesList;