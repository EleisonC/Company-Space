import React from 'react';
import { connect } from 'react-redux';
import { fetchCompanies } from '../../redux/actions/company/companyAction';


class ViewAllCompanies extends React.Component {

  componentDidMount() {
    this.props.fetchCompanies();
  }

  render() {
    const { companies } = this.props;
    console.log('--------', companies)
    return(
      <div className="MainContainer">
        <h1 className="titleHeader">
          ALL COMPANIES
        </h1>
        <div class="row companyRow">
          {companies.map((company, index) => 
              <div class="col-sm-4 mb-3 mb-md-0" key={index}>
                <div class="card companycard">
                  <div class="card-body">
                    <h5 class="card-title">{company.name}</h5>
                    <a href="#!" class="btn btn-warning">Go somewhere</a>
                    <a href="#!" class="btn btn-dark">Go somewhere</a>
                  </div>
                </div>
              </div>
            )}
          </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  companies: state.company.companies,
})

export default connect(mapStateToProps, { fetchCompanies })(ViewAllCompanies)
