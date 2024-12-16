import React, {useRef, useState} from "react";

import CustomerInformationComponent from './CustomerInformationComponent';
import OrderDetailsComponent from './OrderDetailsComponent';
import ProductSummaryComponent from './ProductSummaryComponent';
import AttachmentsComponent from './AttachmentsComponent';

import {ConvertToPDF, combinePDF} from "../Services/pdfService";
import { sendEmail } from "../Services/apiService";


function ContainerComponent(){
    const [loadingState, setloadingState] = useState(false)
    const customerInformationForm = useRef(null)
    const orderDetailsForm = useRef(null)
    const productSummaryform = useRef(null)
    const attachmentForm = useRef(null)

    const clearCustomerInformation = useRef(null)
    const clearOrderDetails = useRef(null)
    const clearProductSummary = useRef(null)
    const clearAttachment = useRef(null)

    async function submitForm(){
        
        const {validationResult, woNumber} = customerInformationForm.current();
        const orderDetailsValidation = orderDetailsForm.current();
        const producrSummaryValidation = productSummaryform.current();
        const attachment = await attachmentForm.current();
      
        if(validationResult && orderDetailsValidation && producrSummaryValidation){
            setloadingState(true)
            try{
              let pdfBlob = await ConvertToPDF();
              if(attachment){
                pdfBlob = await combinePDF(pdfBlob, attachment)
              }
              else {
                pdfBlob = pdfBlob.output("blob")
              }
              await sendEmail(pdfBlob, woNumber,setloadingState)
            }
            catch(e){
              setloadingState(false)
              alert("Unable to send the email")
            } 
        } 
    }

    function clearState(){
       clearCustomerInformation.current(); 
       clearOrderDetails.current();
       clearProductSummary.current();
       clearAttachment.current();
    }

    return(
        <div className='container-fluid'>
        <div className='card mt-2 ms-2 me-2 text-align-left'>
          <div className="card-header background-color-blue text-white">
            New Order Intake - Supply and Install
          </div>
          <div className="card-body">
            <div className='row'>
              <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 pe-0'>
                <CustomerInformationComponent registerSubmit = {(submit)=>{customerInformationForm.current = submit}} clearForm = {(clear)=>{clearCustomerInformation.current = clear}}/>
              </div>
              <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                <OrderDetailsComponent registerSubmit = {(submit)=>{orderDetailsForm.current = submit}} clearForm = {(clear)=>{clearOrderDetails.current = clear}}/>
              </div>  
            </div>
            <div className='row mt-2'>
              <div className='col-sm-12 col-md-12 col-lg-7 col-xl-7 pe-0'>
                <ProductSummaryComponent registerSubmit = {(submit)=>{productSummaryform.current = submit}} clearForm = {(clear)=>{clearProductSummary.current = clear}}/>
              </div>
              <div className='col-sm-12 col-md-12 col-lg-5 col-xl-5'>
                <AttachmentsComponent registerSubmit = {(submit)=>{attachmentForm.current = submit}} clearForm = {(clear)=>{clearAttachment.current = clear}}/>
              </div>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-1 mb-0">

            {loadingState?
              <div className="spinner-border pe-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>:""}

            <button 
              className="btn background-color-blue text-white md-2 width-180 rounded-0" 
              type="button"
              onClick={submitForm}>
              Submit
            </button>
            <button className="btn btn-light width-180 border rounded-0" type="button" onClick={clearState}>Cancel</button>
          </div>
          </div>
          
        </div>
    </div>
    )

}

export default ContainerComponent