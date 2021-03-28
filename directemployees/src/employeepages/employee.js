import React from "react";
import axios from "axios";
import employeeData from "./employeeData";

class Employee extends React.Component{
    state = {
        employeeRecords: [],
    }
    componentDidMount = () => {
        axios
        .get("https://randomuser.me/api/?results=500&nat=us")
        .then((records) => {
            let employdata = records.data.results;
            let employeeRecordstemp = [];

            for (let i = 0; i < employdata.length; i++){
                let record = {
                    name: employdata[i].name,
                    email: employdata[i].email,
                    image: employdata[i].picture,
                    phone: employdata[i].phone,
                    dob: employdata[i].dob.date,
                }
                employeeRecordstemp.push(record)
            }
            this.setState({employeeRecords: employeeRecordstemp})
        })
    }
    render(){
        return(
            <div>
                <h2>Employee Details</h2>
                <employeeData employees = {this.state.employeeRecords} />
            </div>
        )
    }
};

export default Employee;