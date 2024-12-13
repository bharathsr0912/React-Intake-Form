import React from "react";

function ErrorFieldComponent({data}){
    return(
        <>
            <br></br><small className="text-red font-80 danger-text-position">{data}</small>
        </>
    )
}

export default ErrorFieldComponent