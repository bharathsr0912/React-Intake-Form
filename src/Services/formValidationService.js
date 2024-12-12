export const validateForm = (state) =>{
    let tempState = {...state}
    let validationResult = true
    for (var obj in state){
        let currentObj = state[obj]
        if(currentObj.value.length>0){
            switch(obj){
                case "phone": if(!(currentObj.value.length==10)){
                                tempState = {
                                    ...tempState,
                                    [obj]:{
                                        value: tempState[obj].value,
                                        "errorStatus":true,
                                        "errorMessage":"Number cannot exceed 10 characters "
                                    }
                                }
                            }
                            break;
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