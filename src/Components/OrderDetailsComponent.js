import React, {useState} from "react";

import ErrorFieldComponent from "./Commo/ErrorFieldComponent";
import { validateForm } from "../Services/formValidationService";

function OrderDetailsComponent({registerSubmit}){

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
        }
    })

    function submitForm(){
        const [validationResult, tempState] = validateForm(state)
        setState(tempState) 
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

    registerSubmit(submitForm)


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
                        <select onChange={(e)=>{updateState(e.target.value, "branch")}} style={{"width":"100%"}}>
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
                        <select onChange={(e)=>{updateState(e.target.value, "remeasureRequired")}} style={{"width":"100%"}}>
                            <option value="yes" selected>Yes</option>
                            <option value="no">No</option>
                            
                        </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default OrderDetailsComponent