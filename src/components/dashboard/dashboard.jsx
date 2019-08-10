import React from 'react';
import { MDBBtn } from 'mdbreact';

const WelcomePage = (props) => {
  return (
    <div className="welcomeScreen">
      <div className="leftScreen">
        <h1 className='textWelcome'>Company</h1>
        <MDBBtn color="warning"
        onClick={() => props.history.push('/create-new-company')}>
          Create A New Company
        </MDBBtn>
      </div>
      <div className="rightScreen">
        <h1 className='textWelcome'>Space</h1>
        <MDBBtn color="dark"
        onClick={() => props.history.push('/view-companies')}>
          VIEW ALL COMPANIES
        </MDBBtn>
      </div>
    </div>
  )
}

export default WelcomePage;