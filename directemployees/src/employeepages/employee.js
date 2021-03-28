import React from "react";
import axios from "axios";
import EmployeeData from "./EmployeeData";

class Employee extends React.Component{
    state = {
        employeeRecords: [],
    }
    componentDidMount = () => {
        axios
        .get("https://randomuser.me/api/?results=500&nat=us")
        .then((records) => {
            

        })
    }


}