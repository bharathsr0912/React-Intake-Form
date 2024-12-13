import React, {useState} from "react";

import ErrorFieldComponent from "./Commo/ErrorFieldComponent";
import { validateForm } from "../Services/formValidationService";

function ProductSummaryComponent({registerSubmit,clearForm}){

    const [state, setState] = useState({
        windows:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        cleanBcIqpCode:{
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
            windows:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            cleanBcIqpCode:{
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
                <b>Product Summary</b>
            </div>
            <div className="card-body">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                        <label htmlFor="windows" className="font-90">Windows <span className="text-red">*</span></label>
                        {state.windows.errorStatus?<ErrorFieldComponent data={state.windows.errorMessage}/>:""}
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <input 
                        type="text" 
                        placeholder="123456" 
                        id="windows" 
                        value={state['windows']["value"]} 
                        className="font-90 border" 
                        required
                        onChange={(e)=>{updateState(e.target.value, "windows")}}/>
                    </div>
                </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 form-display">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                            <label htmlFor="cleanBcIqpCode" className="font-90">CleanBC IQP Code Required Before Ordering Product <span className="text-red">*</span></label>
                            {state.cleanBcIqpCode.errorStatus?<ErrorFieldComponent data={state.cleanBcIqpCode.errorMessage}/>:""}
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <select onChange={(e)=>{updateState(e.target.value, "cleanBcIqpCode")}} className="select-style border">
                            <option disbaled>Select Option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                        </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductSummaryComponent