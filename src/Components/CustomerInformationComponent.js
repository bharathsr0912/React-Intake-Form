import React, {useState} from "react";
import ErrorFieldComponent from "./Commo/ErrorFieldComponent";
import { validateForm } from "../Services/formValidationService";

function CustomerInformationComponent({registerSubmit}){

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
            </div>
        </div>
        
    )

}

export default CustomerInformationComponent