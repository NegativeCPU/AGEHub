import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AddNewEquipment() {

    const history = useHistory();

    const [employees, setEmployees] = useState({});

    const [equipment, setEquipment] = useState
        (
            {
                name: "",
                type: "",
                employee: {
                    email: ""
                }
            }
        )


    useEffect(() => {
        axios
            .get("http://localhost:8080/findAllEmployees")
            .then((response) => {
                setEmployees(response.data);
                console.log(response.data);
            })
            .catch((error) => { });
    }, []);

    const equipmentChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempEquipment = { ...equipment }
        tempEquipment[name] = value;
        tempEquipment.employee[name] = value;
        setEquipment(tempEquipment);
    }

    const addNewEquipmentSubmitHandler = () => {
        axios.post("http://localhost:8080/saveEquipment", equipment).then((response) => {
            localStorage.setItem("newEquipment", response.data.tempEquipment)
            console.log(response.data.tempEquipment);
            history.push("/equipment-registered");

        }).catch((error) => {
            console.log("Equipment object not placed" + error)
        })
    }

    return (
        <div className="container-fluid home-margin-top-less-200px">
            <br></br>
            <br></br>
            <form className="row g-3">
                <h2> Register below</h2>
                <div className="col-md-6">
                    <label for="inputName" className="form-label">Name</label>
                    <input name="name" value={equipment.name} onChange={equipmentChangeHandler} type="text" className="form-control" id="inputName" />
                </div>
                <div className="col-md-6">
                    <label for="inputType" className="form-label">Type of Equipment</label>
                    <input name="type" value={equipment.type} onChange={equipmentChangeHandler} type="text" className="form-control" id="inputType" />
                </div>
                <div className="col-md-6">
                    <label for="inputEmail" className="form-label">Equipment Owner</label>
                    <br></br>
                    <select name="email" value={equipment.employee.email} onChange={equipmentChangeHandler} id="inputEmail">
                        <option>Choose</option>

                        {Array.from(employees).map(item => {
                            return (
                                <option value={item.email}>
                                    {item.firstName}
                                </option>
                            )
                        })
                        }
                    </select>
                </div>

                <div className="d-grid gap-2 ">
                    <button onClick={addNewEquipmentSubmitHandler} className="btn btn-primary" type="button">Sign up</button>
                </div>
            </form>
        </div >
    )
}