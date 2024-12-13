export const validateForm = (state) =>{
    let tempState = {...state}
    let validationResult = true
    for (var obj in state){
        let currentObj = state[obj]
        if(currentObj.value.length>0){
            switch(obj){
                case "phoneNumber": 
                                    if(!(currentObj.value.length===10) || isNaN(currentObj.value)){
                                    validationResult = false
                                    tempState = {
                                        ...tempState,
                                        [obj]:{
                                            value: tempState[obj].value,
                                            "errorStatus":true,
                                            "errorMessage":"Invalid phone number"
                                        }
                                    }
                                
                            }
                            break;
                case "postalCode" : {
                                    const regex = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
                                        if(!(regex.test(currentObj.value))){
                                            validationResult = false
                                            tempState = {
                                                ...tempState,
                                                [obj]:{
                                                    value: tempState[obj].value,
                                                    "errorStatus":true,
                                                    "errorMessage":"Invalid postal code format"
                                                }
                                            }
                                        }
                                    }
                                    break;
                case "email" : {
                                    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                                        if(!(regex.test(currentObj.value))){
                                            validationResult = false
                                            tempState = {
                                                ...tempState,
                                                [obj]:{
                                                    value: tempState[obj].value,
                                                    "errorStatus":true,
                                                    "errorMessage":"Invalid email format"
                                                    }
                                                }
                                            }
                                        }
                                        break;
                default : break;
                                    
                }
        }
        else{
            validationResult = false
            tempState = {
                ...tempState,
                [obj]:{
                    value: tempState[obj].value,
                    "errorStatus":true,
                    "errorMessage":"This field is required"
                }
            }
        }
        
    }
    return [validationResult, tempState];
}