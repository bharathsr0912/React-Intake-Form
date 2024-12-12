import React, {useState} from "react";

function OrderDetailsComponent({registerSubmit}){

    const [state, setState] = useState({})

    function submitForm(){
       
    }
    registerSubmit(submitForm)


    return(
        <div className="card rounded-0">
            <div className="card-header">
                <b>Order Details</b>
            </div>
            <div className="card-body">
                    
            </div>
        </div>
    )

}

export default OrderDetailsComponent