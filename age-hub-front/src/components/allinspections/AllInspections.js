import React, { useEffect, useState } from "react";
import axios from "axios";

const AllInspections = () => {

    const [inspection, setInspection] = useState({});

    useEffect(() => {
        axios
            .get('http://localhost:8080/findAllInspection')
            .then((response) => {
                setInspection(response.data);
            })
            .catch((error) => { });
    }, []);

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Job Control Number</th>
                    <th scope="col">Type of Inspection</th>
                    <th scope="col">Discrepancy</th>
                    <th scope="col">Date Due</th>
                    <th scope="col">Equipment</th>
                </tr>
            </thead>
            <tbody>
                {Array.from(inspection).map(item => {
                    return (
                        <tr key={item.jobControlNumber}>
                            <td>{item.jobControlNumber}</td>
                            <td>{item.type}</td>
                            <td>{item.discrepancy}</td>
                            <td>{item.dateDue}</td>
                            <td>{item.equipment.name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default AllInspections;