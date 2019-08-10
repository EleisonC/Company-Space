import React from 'react';
import CreateCompanyForm from './createCompanyForm';
import { connect } from 'react-redux';
import { createACompany } from '../../redux/actions/company/companyAction';


class CreateNewCompany extends React.Component {
  state = {
    name: '',
    country: '',
    street: '',
    postalCode: '',
    city: '',
    monthlyRent: null,
    headQuarterID: null
  }

  handleInput = (event) => {
    /* istanbul ignore next */
    const { name, value } = event.target;
    /* istanbul ignore next */
    this.setState({ [name]: value });
  };

  handleCompanyRegisteragtion = (e) => {
    const data = this.state;
    console.log(data)
    this.props.createACompany(data)
  }

  componentDidUpdate(prevProps) {
    const { company } = this.props;
    // eslint-disable-next-line eqeqeq
    if (company != prevProps.company) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
    <div className="ContainerCom">
      <CreateCompanyForm handleInput={this.handleInput} handleCompanyRegisteragtion={this.handleCompanyRegisteragtion}/>
    </div>
    )
  }
}
const mapStateToProps = (state) => ({
  company: state.company.data,
})

export default connect(mapStateToProps, { createACompany })(CreateNewCompany);
