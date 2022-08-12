import React, { useEffect, useState } from "react";
import axios from "axios";

const AllEquipment = () => {

    const [equipment, setEquipment] = useState({});


    useEffect(() => {

        axios
            .get('http://localhost:8080/findAllEquipment')
            .then((response) => {
                setEquipment(response.data);
                console.log(response.data);
            })
            .catch((error) => { });
    }, []);

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Employee</th>
                </tr>
            </thead>
            <tbody>
                {Array.from(equipment).map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.employee.firstName} {item.employee.lastName}</td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}

export default AllEquipment;