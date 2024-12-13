import React, {useState} from "react";
import ErrorFieldComponent from "./Commo/ErrorFieldComponent";
import { validateForm } from "../Services/formValidationService";

function CustomerInformationComponent({registerSubmit,clearForm}){

    const [state, setState] = useState({
        cnumber:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        streetAddress:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        workOrder:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        province:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        customerName:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        city:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        email:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        postalCode:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        phoneNumber:{
            value:"",
            errorStatus:false,
            errorMessage:""
        }
    })

    function submitForm(){
        const [validationResult, tempState] = validateForm(state)
        setState(tempState) 
        return {validationResult, "woNumber":state.cnumber.value}
    }

    function updateState(value,id){
        setState((prevState)=>({
            ...prevState,
            [id]:{
                errorStatus:false,
                errorMessage:"",
                value:value
            }
        }))
    }

    function clearState(){
        setState({
            cnumber:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            streetAddress:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            workOrder:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            province:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            customerName:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            city:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            email:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            postalCode:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            phoneNumber:{
                value:"",
                errorStatus:false,
                errorMessage:""
            }
        })
    }

    registerSubmit(submitForm)
    clearForm(clearState)

    return(
        <div className="card rounded-0">
            <div className="card-header">
                <b>Customer Information</b>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                            <label htmlFor="cnumber" className="font-90">Customer number <span className="text-red">*</span></label>
                            {state.cnumber.errorStatus?<ErrorFieldComponent data={state.cnumber.errorMessage}/>:""}
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <input 
                                type="text" 
                                placeholder="123456" 
                                id="cnumber" 
                                value={state['cnumber']["value"]} 
                                className="font-90 border" 
                                required
                                onChange={(e)=>{updateState(e.target.value, "cnumber")}}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                            <label htmlFor="address" className="font-90">Street Addres <span className="text-red">*</span></label>
                            {state.streetAddress.errorStatus?<ErrorFieldComponent data={state.streetAddress.errorMessage}/>:""}
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <input 
                                type="text" 
                                placeholder="Street Address" 
                                id="address" 
                                value={state.streetAddress.value} 
                                className="font-90 border" 
                                required
                                onChange={(e)=>{updateState(e.target.value, "streetAddress")}}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                            <label htmlFor="workOrder" className="font-90">Work Order # <span className="text-red">*</span></label>
                            {state.workOrder.errorStatus?<ErrorFieldComponent data={state.workOrder.errorMessage}/>:""}
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <input 
                                type="text" 
                                placeholder="A12340" 
                                id="workOrder" 
                                value={state['workOrder']["value"]} 
                                className="font-90 border" 
                                required
                                onChange={(e)=>{updateState(e.target.value, "workOrder")}}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                            <label htmlFor="province" className="font-90">Province <span className="text-red">*</span></label>
                            {state.province.errorStatus?<ErrorFieldComponent data={state.province.errorMessage}/>:""}
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <input 
                                type="text" 
                                placeholder="BC" 
                                id="province" 
                                value={state.province.value} 
                                className="font-90 border" 
                                required
                                onChange={(e)=>{updateState(e.target.value, "province")}}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                            <label htmlFor="customerName" className="font-90">Customer Name <span className="text-red">*</span></label>
                            {state.customerName.errorStatus?<ErrorFieldComponent data={state.customerName.errorMessage}/>:""}
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <input 
                                type="text" 
                                placeholder="John Doe" 
                                id="customerName" 
                                value={state['customerName']["value"]} 
                                className="font-90 border" 
                                required
                                onChange={(e)=>{updateState(e.target.value, "customerName")}}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                            <label htmlFor="city" className="font-90">City <span className="text-red">*</span></label>
                            {state.city.errorStatus?<ErrorFieldComponent data={state.city.errorMessage}/>:""}
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <input 
                                type="text" 
                                placeholder="Langley" 
                                id="city" 
                                value={state.city.value} 
                                className="font-90 border" 
                                required
                                onChange={(e)=>{updateState(e.target.value, "city")}}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                            <label htmlFor="email" className="font-90">Email <span className="text-red">*</span></label>
                            {state.email.errorStatus?<ErrorFieldComponent data={state.email.errorMessage}/>:""}
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <input 
                                type="text" 
                                placeholder="johndoe@gmail.com" 
                                id="email" 
                                value={state['email']["value"]} 
                                className="font-90 border" 
                                required
                                onChange={(e)=>{updateState(e.target.value, "email")}}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                            <label htmlFor="postalCode" className="font-90">Postal Code <span className="text-red">*</span></label>
                            {state.postalCode.errorStatus?<ErrorFieldComponent data={state.postalCode.errorMessage}/>:""}
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <input 
                                type="email" 
                                placeholder="V3E2X5" 
                                id="postalCode" 
                                value={state.postalCode.value} 
                                className="font-90 border" 
                                required
                                onChange={(e)=>{updateState(e.target.value, "postalCode")}}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                            <label htmlFor="phoneNumber" className="font-90">Phone Number <span className="text-red">*</span></label>
                            {state.phoneNumber.errorStatus?<ErrorFieldComponent data={state.phoneNumber.errorMessage}/>:""}
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <input 
                                type="tel" 
                                placeholder="905-123-1234" 
                                id="phoneNumber" 
                                value={state['phoneNumber']["value"]} 
                                className="font-90 border" 
                                required
                                onChange={(e)=>{updateState(e.target.value, "phoneNumber")}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

export default CustomerInformationComponent