import React, { useEffect, useState } from "react";
import axios from "axios";

const PersonalEquipment = () => {

    const [equipment, setEquipment] = useState({});

    const [employee, setEmployee] = useState({});


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

    useEffect(() => {

        axios
            .get('http://localhost:8080/findAllEquipment')
            .then((response) => {
                setEquipment(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("error" + error)
            });
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

                    if (employee.email === item.employee.email) {
                        return (

                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>{item.employee.firstName} {item.employee.lastName}</td>
                            </tr>
                        )
                    }
                })}
            </tbody>
        </table>
    )
}

export default PersonalEquipment;