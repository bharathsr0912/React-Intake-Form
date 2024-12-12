import React, {useState} from "react";

function CustomerInformationComponent({registerSubmit}){

    const [state, setState] = useState({})

    let tempObj = {}

    function submitForm(){
        console.log(state)
       
    }

    function updateState(value,id){
        setState((prevState)=>({
            ...prevState,
            [id]:value,
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
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <input 
                                type="text" 
                                placeholder="123456" 
                                id="cnumber" 
                                value={state['cnumber']} 
                                className="font-90 border" 
                                required
                                onChange={(e)=>{updateState(e.target.value, "cnumber")}}/>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 form-display">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                            <label htmlFor="address" className="font-90">Street Addres <span className="text-red">*</span></label>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <input 
                                type="text" 
                                placeholder="Street Address" 
                                id="address" 
                                value={state['streetAddress']} 
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