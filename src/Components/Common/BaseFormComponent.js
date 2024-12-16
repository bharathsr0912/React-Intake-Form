import React from "react";

import ErrorFieldComponent from "./ErrorFieldComponent";

function BaseFormComponent({fields, state, updateState}){
    return(
        <div className="card-body">
                <div className="row">
                {fields.map(item=>{
                return (
                 <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 form-display mt-1" key={item.id}>
                     <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 px-0 ps-1">
                         <label htmlFor={item.id} className="font-90">{item.name} <span className="text-red">*</span></label>
                         {state[item.id].errorStatus?<ErrorFieldComponent data={state[item.id].errorMessage}/>:""}
                     </div>
                     <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        {item.input==="text"?( <input 
                         type="text" 
                         placeholder={item.placeholder}
                         id={item.id}
                         value={state[item.id]["value"]} 
                         className="font-90 border text-style" 
                         required
                         onChange={(e)=>{updateState(e.target.value, item.id)}}/>)
                         :
                         (
                            <select onChange={(e)=>{updateState(e.target.value, item.id)}} className="select-style border">
                                {item?.disbaled?(
                                    <option disabled selected>{item.disbaled}</option>
                                ):("")}
                                {item.options.map(option=>{
                                    return (option.default?(
                                        <option value={option.value} key={option.value} selected>{option.name}</option>
                                    ):(
                                        <option value={option.value} key={option.value}>{option.name}</option>
                                    ))
                            })}
                          </select>
                         )}
                    
                     </div>
                 </div>
                )})}
            </div>
        </div>
    )
}

export default BaseFormComponent