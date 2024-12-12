import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import CustomerInformationComponent from './Components/CustomerInformationComponent';
import OrderDetailsComponent from './Components/OrderDetailsComponent';
import ProductSummaryComponent from './Components/ProductSummaryComponent';
import AttachmentsComponent from './Components/AttachmentsComponent';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='card mt-5 ms-2 me-2 text-align-left'>
          <div className="card-header background-color-blue text-white">
            New Order Intake - Supply and Install
          </div>
          <div className="card-body">
            <div className='row'>
              <div className='col-sp 12 col-md-5 col-lg-5 col-xl-5 pe-0'>
                <CustomerInformationComponent/>
              </div>
              <div className='col-sp 12 col-md-7 col-lg-7 col-xl-7'>
                <OrderDetailsComponent/>
              </div>  
            </div>
            <div className='row mt-2'>
              <div className='col-sp 12 col-md-6 col-lg-6 col-xl-6 pe-0'>
                <ProductSummaryComponent/>
              </div>
              <div className='col-sp 12 col-md-6 col-lg-6 col-xl-6'>
                <AttachmentsComponent/>
              </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3 mb-0">
            <button className="btn background-color-blue text-white md-2 width-180 rounded-0" type="button">Submit</button>
            <button className="btn btn-light width-180 border rounded-0" type="button">Cancel</button>
          </div>
          </div>
          
        </div>
    </div>
  </div>
  );
}

export default App;
