import React from 'react';
import { MDBBtn } from 'mdbreact';

const CreateCompanyForm = (props) => {
  return(
    <div className="createCompany">
        <div class="md-form">
          <input type="text" id="form1" class="form-control" name="name" onChange={props.handleInput} required/>
          <label for="form1">Name</label>
        </div>
        <div class="md-form">
          <input type="text" id="form2" class="form-control" name="country" onChange={props.handleInput} required/>
          <label for="form2">Country</label>
        </div>
        <div class="md-form">
          <input type="text" id="form3" class="form-control" name="street" onChange={props.handleInput} required/>
          <label for="form3">Street</label>
        </div>
        <div class="md-form">
          <input type="text" id="form4" class="form-control" name="postalCode" onChange={props.handleInput} required/>
          <label for="form4">Postal Code</label>
        </div>
        <div class="md-form">
          <input type="text" id="form5" class="form-control" name="city" onChange={props.handleInput} required/>
          <label for="form5">City</label>
        </div>
        <div class="md-form">
          <input type="text" id="form6" class="form-control" name="monthlyRent" onChange={props.handleInput} required/>
          <label for="form6">Monthly rent</label>
        </div><div class="md-form">
          <input type="text" id="form7" class="form-control" name="headQuarter" onChange={props.handleInput}/>
          <label for="form7">Headquarter id</label>
        </div>
        <MDBBtn color="warning"
        onClick={() => props.handleCompanyRegisteragtion()}>
          Create A New Company
        </MDBBtn>
      </div>
  )
}

export default CreateCompanyForm;
