import React, {useState} from "react";

import fields from "../Assests/OrderDetailsFields.json"

import ErrorFieldComponent from "./Common/ErrorFieldComponent";
import BaseFormComponent from "./Common/BaseFormComponent";
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
        },
        estimator:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        listPrice:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        marketer:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        depositValue:{
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
            },
            estimator:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            listPrice:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            marketer:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            depositValue:{
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
                <b>Order Details</b>
            </div>
                <BaseFormComponent fields={fields} state={state} updateState={updateState}></BaseFormComponent>
            </div>
    )

}

export default OrderDetailsComponent