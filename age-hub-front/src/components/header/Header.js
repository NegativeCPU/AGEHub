import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


export default function Header() {

    const [signInEmployee, setSignInEmployee] = useState({ email: '', password: '' })

    const history = useHistory();

    const signOutSubmitHandler = () => {
        console.log('sign out clicked');
        localStorage.clear();
        history.push('/');
    }

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempSignIn = { ...signInEmployee };
        tempSignIn[name] = value;
        setSignInEmployee(tempSignIn);
    }

    const dropDownClick = () => {
        document.getElementById("myDropDown").classList.toggle("show");
    }

    window.onclick = function (e) {
        if (!e.target.matches('.dropbtn')) {
            let myDropDown = document.getElementById("myDropDown");
            if (myDropDown.classList.contains('show')) {
                myDropDown.classList.remove('show');
            }
        }
    }

    const signInSubmitHandler = () => {
        axios.post('http://localhost:8080/login', signInEmployee).then(response => {
            localStorage.setItem("loggedInEmployee", response.data.email);
            history.push('/profile');
        }).catch((error) => {
            console.log("Invalid" + error);
        })
    }

    const toggleDisplay = () => {
        if (localStorage.getItem('loggedInEmployee')) {
            return (
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <div class="dropdown">
                                <div class="nav-link dropdown-toggle" onClick={dropDownClick} id="myDropDown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    Profile
                                </div>
                                <div className="dropdown-item">
                                    <Link className="nav-link" to="/employee-info">Employee Info</Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link className="nav-link" to="/personal-equipment">Personal Equipment</Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div class="dropdown">
                                <div class="nav-link dropdown-toggle" onClick={dropDownClick} id="myDropDown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    Equipment
                                </div>
                                <div className="dropdown-item">
                                    <Link className="nav-link" to="/add-new-equipment">Add New Equipment</Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link className="nav-link" to="/all-equipment">All Equipment</Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div class="dropdown">
                                <div class="nav-link dropdown-toggle" onClick={dropDownClick} id="myDropDown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    Inspections
                                </div>
                                <div className="dropdown-item">
                                    <Link className="nav-link" to="/add-new-inspection">Add New Inspection</Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link className="nav-link" to="/all-inspections">All Inspections</Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About us</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-light" onClick={signOutSubmitHandler} type="button">Sign out</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/sign-up">Sign up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/about-us"}>About us</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" value={signInEmployee.email} onChange={changeHandler} name="email" type="email" placeholder="Email" aria-label="Email" />
                        <input className="form-control me-2" value={signInEmployee.password} onChange={changeHandler} name="password" type="password" placeholder="Password" aria-label="Password" />
                        <button className="btn btn-light" onClick={signInSubmitHandler} type="button">Sign in</button>
                    </form>
                </div>

            )
        }
    }
    return (
        <header>
            <div className="mb-5">
                <nav class="navbar navbar-expand-lg bg-primary navbar-dark ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">AGE Hub</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {toggleDisplay()}
                    </div>
                </nav>
            </div>
        </header>
    )
}