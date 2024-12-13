import React, {useState} from "react";

import ErrorFieldComponent from "./Commo/ErrorFieldComponent";
import { validateForm } from "../Services/formValidationService";

function OrderDetailsComponent({registerSubmit, clearForm}){

    const [state, setState] = useState({
        branch:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        remeasureRequired:{
            value:"yes",
            errorStatus:false,
            errorMessage:""
        },
        orderType:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        deliveryZone:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        homeDepotOrder:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        paymentType:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        leadResource:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        sellPrice:{
            value:"",
            errorStatus:false,
            errorMessage:""
        }

    })

    function submitForm(){
        const [validationResult, tempState] = validateForm(state)
        setState(tempState)
        return validationResult; 
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
            branch:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            remeasureRequired:{
                value:"yes",
                errorStatus:false,
                errorMessage:""
            },
            orderType:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            deliveryZone:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            homeDepotOrder:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            paymentType:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            leadResource:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            sellPrice:{
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
                <b>Order Details</b>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                            <label htmlFor="branch" className="font-90">Branch <span className="text-red">*</span></label>
                            {state.branch.errorStatus?<ErrorFieldComponent data={state.branch.errorMessage}/>:""}
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <select onChange={(e)=>{updateState(e.target.value, "branch")}} className="select-style border">
                                <option disabled selected>Select Branch</option>
                                <option value="AA">AA</option>
                                <option value="AB">AB</option>
                                <option value="AC">AC</option>
                                <option value="AD">AD</option>
                            </select>
                        </div>
                    </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                                <label htmlFor="remeasureRequired" className="font-90">Remeasure Required <span className="text-red">*</span></label>
                                {state.remeasureRequired.errorStatus?<ErrorFieldComponent data={state.remeasureRequired.errorMessage}/>:""}
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <select onChange={(e)=>{updateState(e.target.value, "remeasureRequired")}} className="select-style border">
                                    <option value="yes" selected>Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                            <label htmlFor="orderType" className="font-90">Order Type <span className="text-red">*</span></label>
                            {state.orderType.errorStatus?<ErrorFieldComponent data={state.orderType.errorMessage}/>:""}
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <select onChange={(e)=>{updateState(e.target.value, "orderType")}} className="select-style border">
                                <option value="SI" selected>Supply & Install</option>
                                <option value="SO">Supply Only</option>
                            </select>
                        </div>
                    </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                                <label htmlFor="deliveryZone" className="font-90">Delivery Zone <span className="text-red">*</span></label>
                                {state.deliveryZone.errorStatus?<ErrorFieldComponent data={state.deliveryZone.errorMessage}/>:""}
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <select onChange={(e)=>{updateState(e.target.value, "deliveryZone")}} className="select-style border">
                                    <option disabled selected>Select Zone</option>
                                    <option value="A">Zone A</option>
                                    <option value="B">Zone B</option>
                                    <option value="C">Zone C</option>
                                    <option value="D">Zone D</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                            <label htmlFor="homeDepotOrder" className="font-90">Home Depot Order <span className="text-red">*</span></label>
                            {state.homeDepotOrder.errorStatus?<ErrorFieldComponent data={state.homeDepotOrder.errorMessage}/>:""}
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <select onChange={(e)=>{updateState(e.target.value, "homeDepotOrder")}} className="select-style border">
                                <option disabled selected>Select Depot</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                                <label htmlFor="paymentType" className="font-90">Payment Type <span className="text-red">*</span></label>
                                {state.paymentType.errorStatus?<ErrorFieldComponent data={state.paymentType.errorMessage}/>:""}
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <select onChange={(e)=>{updateState(e.target.value, "paymentType")}} className="select-style border">
                                    <option disabled selected>Select Payment</option>
                                    <option value="cash">Cash</option>
                                    <option value="credit">Credit Card</option>
                                    <option value="debit">Debit Card</option>
                                    <option value="gift">Gift Card</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                            <label htmlFor="leadResource" className="font-90">Lead Resource <span className="text-red">*</span></label>
                            {state.leadResource.errorStatus?<ErrorFieldComponent data={state.leadResource.errorMessage}/>:""}
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <input 
                                type="leadResource" 
                                placeholder="Lead Name" 
                                id="leadResource" 
                                value={state['leadResource']["value"]} 
                                className="font-90 border" 
                                required
                                onChange={(e)=>{updateState(e.target.value, "leadResource")}}/>
                        </div>
                    </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                                <label htmlFor="sellPrice" className="font-90">Sell Price (Before Tax) <span className="text-red">*</span></label>
                                {state.sellPrice.errorStatus?<ErrorFieldComponent data={state.sellPrice.errorMessage}/>:""}
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <input 
                                    type="sellPrice" 
                                    placeholder="0" 
                                    id="sellPrice" 
                                    value={state['sellPrice']["value"]} 
                                    className="font-90 border" 
                                    required
                                    onChange={(e)=>{updateState(e.target.value, "sellPrice")}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )

}

export default OrderDetailsComponent