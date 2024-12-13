import React, {useState} from "react";
import BaseFormComponent from "./Common/BaseFormComponent";
import { validateForm } from "../Services/formValidationService";

import fields from '../Assests/CustomerInformationFields.json'

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
        <div className="card rounded-0 h-100">
            <div className="card-header">
                <b>Customer Information</b>
            </div>
            <BaseFormComponent fields={fields} state={state} updateState={updateState}></BaseFormComponent>
        </div>
        
    )

}

export default CustomerInformationComponent