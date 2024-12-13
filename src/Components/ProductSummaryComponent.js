import React, {useState} from "react";

import BaseFormComponent from "./Common/BaseFormComponent";
import { validateForm } from "../Services/formValidationService";

import fields from '../Assests/ProductSummaryFields.json'

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
        },
        patioDoors:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        doorsSaved:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        doors:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        futureOpportunity:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        sealedUnits:{
            value:"",
            errorStatus:false,
            errorMessage:""
        },
        drwaing:{
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
            },
            patioDoors:{
                value:"",
                errorStatus:false,
                errorMessage:""
            }, doorsSaved:{
                value:"",
                errorStatus:false,
                errorMessage:""
            }, doors:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            futureOpportunity:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            sealedUnits:{
                value:"",
                errorStatus:false,
                errorMessage:""
            },
            drwaing:{
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
                <b>Product Summary</b>
            </div>
            <BaseFormComponent fields={fields} state={state} updateState={updateState}></BaseFormComponent>
        </div>
    )

}

export default ProductSummaryComponent