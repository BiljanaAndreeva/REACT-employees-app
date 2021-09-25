import React , { useState, useEffect } from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/employees";
import './App.css';
import Header from "./Header";
import AddEmployee from "./AddEmployee";
import EmployeesList from "./EmployeesList";
import EditEmployeesList from "./EditEmployeesList";

function App() {
  const LOC_KEY="employees";
  const [employees, setEmployees]=useState([]);
  const [searchTerm, setSearchTerm]=useState("");
  const [searchResults, setSearchResult]=useState([]);
  const retrieveEmployees = async () => {
    const response = await api.get("/employees");
    return response.data;
  };


  const AddEmployeeHandler= async (employee) => {
    console.log(employee);
    const request={
      id:uuid(),
      ...employee
    };
    const response = await api.post("/employees", request);
    console.log(response);
    setEmployees([...employees, response.data]); 
    
    //setEmployees([...employees,{id:uuid(),...employee}]); 
  };

  const updateHandler = async (employee) => {
    const response= await api.put(`/employees/${employee.id}`, employee);
     const {id,firstName, lastName, address, 
     email, gender, dateOfBirth}=response.data;
    setEmployees(
      employees.map((employee)=>{
        return employee.id===id ? {...response.data } : employee;
      })
    );  
    
    };

  const removeEmployeeHandler= async (id)=>{
    await api.delete(`/employees/${id}`);
    const NewList = employees.filter((employee)=>{
      return employee.id!=id;
     });
     setEmployees(NewList);
  };

  const searchHandler=(searchTerm)=>{
    setSearchTerm(searchTerm);
    if(searchTerm!== ""){
      const newEmployeesList= employees.filter((employee)=>{
        return Object.values(employee)
        .join()
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newEmployeesList);
    }else{
      setSearchResult(employees);

    }
  };

  useEffect(()=>{

  //  const retrieveEmployees=JSON.parse( localStorage.getItem(LOC_KEY));
  //  setEmployees(retrieveEmployees);

  const getEmployees = async () => {
    const getAllEmployees = await retrieveEmployees();
    if(getAllEmployees) setEmployees(getAllEmployees);
  };
   getEmployees();
  },[]);

  useEffect(()=>{
    //localStorage.setItem(LOC_KEY, JSON.stringify(employees))
  },[employees]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={(props) => (<EmployeesList {...props} employees={searchTerm<1 ? employees : searchResults} getEmployeeId={removeEmployeeHandler} 
              term={searchTerm}
              searchKeyWord={searchHandler} />)}/>

          <Route path="/add" render={(props) => (<AddEmployee {...props} AddEmployeeHandler={AddEmployeeHandler}/>)}/>
          <Route path="/edit" render={(props) => (<EditEmployeesList {...props} updateHandler={updateHandler}/>)}/>
          
        </Switch>
        
          { /* <AddEmployee AddEmployeeHandler={AddEmployeeHandler}/>
            <EmployeesList employees={employees} removeById={removeEmployyeHandler}/> */}
      </Router>
    </div>
  );
}

export default App;
