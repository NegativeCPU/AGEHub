import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EmployeeInfo() {
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        const params = {
            email: localStorage.getItem('loggedInEmployee')
        }

        axios.get('http://localhost:8080/findByEmail', { params }).then(response => {
            setEmployee(response.data);
        }).catch(error => {
            console.log("error" + error)
        });
    }, []
    );

    return (
        <div class="col-lg-8">
            <div class="card mb-4">
                <div class="card-body text-center">
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Full Name:</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{employee.firstName} {employee.lastName}</p>
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Email:</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{employee.email}</p>
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Rank:</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{employee.empRank}</p>
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0">Level:</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">{employee.empLevel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}