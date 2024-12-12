import React, {useRef} from "react";

import CustomerInformationComponent from './CustomerInformationComponent';
import OrderDetailsComponent from './OrderDetailsComponent';
import ProductSummaryComponent from './ProductSummaryComponent';
import AttachmentsComponent from './AttachmentsComponent';

import ConvertToPDF from "../Services/pdfService";

function ContainerComponent(){
    const customerInformationForm = useRef(null)
    const orderDetailsForm = useRef(null)
    const productSummaryform = useRef(null)

    function submitForm(){
        customerInformationForm.current();
        orderDetailsForm.current();
        productSummaryform.current();

        ConvertToPDF();
    }

    return(
        <div className='container-fluid'>
        <div className='card mt-5 ms-2 me-2 text-align-left'>
          <div className="card-header background-color-blue text-white">
            New Order Intake - Supply and Install
          </div>
          <div className="card-body">
            <div className='row'>
              <div className='col-sp 12 col-md-6 col-lg-6 col-xl-6 pe-0'>
                <CustomerInformationComponent registerSubmit = {(submit)=>{customerInformationForm.current = submit}}/>
              </div>
              <div className='col-sp 12 col-md-6 col-lg-6 col-xl-6'>
                <OrderDetailsComponent registerSubmit = {(submit)=>{orderDetailsForm.current = submit}}/>
              </div>  
            </div>
            <div className='row mt-2'>
              <div className='col-sp 12 col-md-7 col-lg-7 col-xl-7 pe-0'>
                <ProductSummaryComponent registerSubmit = {(submit)=>{productSummaryform.current = submit}}/>
              </div>
              <div className='col-sp 12 col-md-5 col-lg-5 col-xl-5'>
                <AttachmentsComponent/>
              </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3 mb-0">
            <button 
              className="btn background-color-blue text-white md-2 width-180 rounded-0" 
              type="button"
              onClick={submitForm}>
              Submit
            </button>
            <button className="btn btn-light width-180 border rounded-0" type="button">Cancel</button>
          </div>
          </div>
          
        </div>
    </div>
    )

}

export default ContainerComponent