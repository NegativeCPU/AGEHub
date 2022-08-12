import React from "react";
import { Route, withRouter } from 'react-router-dom';
import Home from "../home/Home";
import Header from "../header/Header";
import SignUp from "../signup/SignUp";
import ThankYou from "../thankyou/ThankYou";
import AboutUs from './../aboutus/AboutUs';
import EquipmentRegistered from "../equipmentregistered/EquipmentRegistered";
import InspectionRegistered from "../inspectionregistered/InspectionRegistered";
import AllEquipment from "../allequipment/AllEquipment";
import EmployeeInfo from "../employeeinfo/EmployeeInfo";
import AddNewEquipment from './../addnewequipment/AddNewEquipment';
import AddNewInspection from './../addnewinspection/AddNewInspection';
import AllInspections from './../allinspections/AllInspections';
import PersonalEquipment from "../personalequipment/PersonalEquipment";

const Layout = () => {
    const toggleRoutes = () => {
        if (localStorage.getItem('loggedInEmployee')) {
            return (
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/add-new-equipment" component={AddNewEquipment} />
                    <Route path="/all-equipment" component={AllEquipment} />
                    <Route path="/equipment-registered" component={EquipmentRegistered} />
                    <Route path="/inspection-registered" component={InspectionRegistered} />
                    <Route path="/employee-info" component={EmployeeInfo} />
                    <Route path="/add-new-inspection" component={AddNewInspection} />
                    <Route path="/all-inspections" component={AllInspections} />
                    <Route path="/personal-equipment" component={PersonalEquipment} />
                </div>
            )
        } else {
            return (
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/thank-you" component={ThankYou} />
                    <Route path="/about-us" component={AboutUs} />
                </div>
            )
        }
    }
    return (
        <div>
            <Header />
            {toggleRoutes()}
        </div>
    )
}

export default withRouter(Layout);