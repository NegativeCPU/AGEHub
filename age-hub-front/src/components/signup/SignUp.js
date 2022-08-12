import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function SignUp() {

    const history = useHistory();

    const [employee, setEmployee] = useState
        (
            {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                empRank: "",
                empLevel: ""
            }
        )

    const employeeChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempEmployee = { ...employee }
        tempEmployee[name] = value;
        setEmployee(tempEmployee);
    }

    const signUpSubmitHandler = () => {
        axios.post("http://localhost:8080/save", employee).then((response) => {
            localStorage.setItem("loggedInEmployee", response.data.tempEmployee)
            history.push("/thank-you");

        }).catch((error) => {
            console.log("Employee object not placed" + error)
        })
    }

    return (

        <section class="text-center">
            <div class="p-5 bg-image" style={{
                height: '200px',
            }}
            ></div>


            <div class="card mx-4 mx-md-5 shadow-5-strong" style={{
                marginTop: '-100px',
                background: 'hsla(0, 0%, 100%, 0.8)',
                backdropFilter: 'blur(30px)',
            }}>
                <div class="card-body py-5 px-md-5">

                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-8">
                            <h2 class="fw-bold mb-5">Sign up now</h2>
                            <form>

                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <label for="inputFirstName" className="form-label">First Name</label>
                                            <input name="firstName" value={employee.firstName} onChange={employeeChangeHandler} type="text" className="form-control" id="inputFirstName" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <label for="inputLastName" className="form-label">Last Name</label>
                                            <input name="lastName" value={employee.lastName} onChange={employeeChangeHandler} type="text" className="form-control" id="inputLastName" />
                                        </div>
                                    </div>
                                </div>


                                <div class="form-outline mb-4">
                                    <label for="inputEmail4" className="form-label">Email</label>
                                    <input name="email" value={employee.email} onChange={employeeChangeHandler} type="email" className="form-control" id="inputEmail" />
                                </div>

                                <div class="form-outline mb-4">
                                    <label for="inputPassword4" className="form-label">Password</label>
                                    <input name="password" value={employee.password} onChange={employeeChangeHandler} type="password" className="form-control" id="inputPassword" />
                                </div>

                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <label for="inputEmpRank4" className="form-label">Rank</label>
                                            <input name="empRank" value={employee.empRank} onChange={employeeChangeHandler} type="text" className="form-control" id="inputEmpRank" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <label for="inputEmpLevel4" className="form-label">Level</label>
                                            <input name="empLevel" value={employee.empLevel} onChange={employeeChangeHandler} type="text" className="form-control" id="inputEmpLevel" />
                                        </div>
                                    </div>
                                </div>

                                <button onClick={signUpSubmitHandler} className="btn btn-primary" type="button">Sign up</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}


