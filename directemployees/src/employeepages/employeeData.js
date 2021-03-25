import React from "react";
import { MDBDataTable } from "mdbreact";

const employeeData = () => {
    const data = {
        columns:[
            {
                label: "Name",
                field: "name",
                sort: "asc",
                width:"500"
            },
            {
                label: "Email",
                field: "email",
                sort: "asc",
                width:"500"
            },
            {
                label: "Image",
                field: "Image",
                sort: "asc",
                width:"500"
            },
            {
                label: "Phone",
                field: "phone",
                sort: "asc",
                width:"300"
            },
            {
                label: "DOB",
                field: "dob",
                sort: "asc",
                width:"300"
            },
        ],
        rows:

    };
    

}

module.export = employeeData;