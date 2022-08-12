import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AddNewInspection() {

    const history = useHistory();

    const [equipment, setEquipment] = useState({});

    const [inspection, setInspection] = useState
        (
            {
                jobControlNumber: "",
                type: "",
                discrepancy: "",
                dateDue: "",
                equipment: {
                    id: ""
                }
            }
        )


    useEffect(() => {
        axios
            .get("http://localhost:8080/findAllEquipment")
            .then((response) => {
                setEquipment(response.data);
            })
            .catch((error) => { });
    }, []);

    const inspectionChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempInspection = { ...inspection }
        tempInspection[name] = value;
        tempInspection.equipment[name] = value;
        setInspection(tempInspection);
    }

    const addNewInspectionSubmitHandler = () => {
        axios.post("http://localhost:8080/saveInspection", inspection).then((response) => {
            localStorage.setItem("newInspection", response.data.tempInspection)
            console.log(response.data.tempInspection);
            history.push("/inspection-registered");

        }).catch((error) => {
            console.log("Inspection object not placed " + error)
        })
    }

    return (
        <div className="container-fluid home-margin-top-less-200px">
            <br></br>
            <br></br>
            <form className="row g-3">
                <h2> Register below</h2>
                <div className="col-md-6">
                    <label for="inputJobControlNumber" className="form-label">Job Control Number</label>
                    <input name="jobControlNumber" value={inspection.jobControlNumber} onChange={inspectionChangeHandler} type="text" className="form-control" id="inputJobControlNumber" />
                </div>
                <div className="col-md-6">
                    <label for="inputType" className="form-label">Type of Inspection</label>
                    <input name="type" value={inspection.type} onChange={inspectionChangeHandler} type="text" className="form-control" id="inputType" />
                </div>
                <div className="col-md-6">
                    <label for="inputDiscrepancy" className="form-label">Discrepancy</label>
                    <input name="discrepancy" value={inspection.discrepancy} onChange={inspectionChangeHandler} type="text" className="form-control" id="inputDiscrepancy" />
                </div>
                <div className="col-md-6">
                    <label for="inputDateDue" className="form-label">Date Due</label>
                    <input name="dateDue" value={inspection.dateDue} onChange={inspectionChangeHandler} type="date" className="form-control" id="inputDateDue" />
                </div>
                <div className="col-md-6">
                    <label for="inputId" className="form-label">Equipment</label>
                    <br></br>
                    <select name="id" value={inspection.equipment.id} onChange={inspectionChangeHandler} id="inputId">
                        <option>Choose</option>

                        {Array.from(equipment).map(item => {
                            return (
                                <option value={item.id}>
                                    {item.name}
                                </option>
                            )
                        })
                        }
                    </select>
                </div>


                <div className="d-grid gap-2 ">
                    <button onClick={addNewInspectionSubmitHandler} className="btn btn-primary" type="button">Register Inspection</button>
                </div>
            </form>
        </div >
    )
}