import React, { useEffect, useState } from "react";
import axios from "axios";


const EquipmentRegistered = () => {

    const [equipment, setEquipment] = useState({});

    useEffect(() => {
        const params = {
            id: localStorage.getItem("newEquipment"),
        };
        axios.get("http://localhost:8080/findById", { params }).then((response) => {
            setEquipment(response.data);
        }).catch((error) => {

        });
    }, []);

    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="chartjs-size-monitor" style={{ position: 'absolute', left: '0px', top: '0px', right: '0px', bottom: '0px', overflow: 'hidden', 'pointer-events': 'none', visibility: 'hidden', 'z-index': '-1' }}>
                <div className="chartjs-size-monitor-expand" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', 'pointer-events': 'none', visibility: 'hidden', 'z-index': '-1' }}>
                    <div style={{ position: 'absolute', width: '1000000px', height: '1000000px', left: '0', top: '0' }}>
                    </div>
                </div>
                <div className="chartjs-size-monitor-shrink" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', 'pointer-events': 'none', visibility: 'hidden', 'z-index': '-1' }}>
                    <div style={{ position: 'absolute', width: '200%', height: '200%', left: '0', top: '0' }}>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h1"> Equipment added! {equipment.name} </h1>
            </div>

        </main>
    )
}

export default EquipmentRegistered;