import apiClient from '../../axiosConfig/axiosConfig';
import {
  CREATECOMPANY_REQUEST,
  CREATECOMPANY_REQUEST_FAIL,
  GETCOMPANIES_REQUEST_SUCCES,
  GETCOMPANIES_REQUEST_FAIL
} from '../actionTypes';

const createdCompany = payload => ({
  type: CREATECOMPANY_REQUEST,
  payload,
})

const createCompanyFail = error => ({
  type: CREATECOMPANY_REQUEST_FAIL,
  error,
});

const fetchCompaniesSucces = payload => ({
  type: GETCOMPANIES_REQUEST_SUCCES,
  payload,
})

const fetchCompaniesFail = error => ({
  type: GETCOMPANIES_REQUEST_FAIL,
  error,
});

export const createACompany = (data) =>  async (dispatch) => {
  const url = 'company/';
  const info = {
    "headquarter": {
      "country": data.country,
      "street": data.street,
      "postal_code": data.postalCode,
      "city": data.city,
      "monthly_rent": data.monthlyRent
    },
    "headquarter_id": null,
    "name": data.name
  }

  try {
    const result = await apiClient('POST', url, {data: info});
    dispatch(createdCompany(result.data));
  } catch (error) {
    dispatch(createCompanyFail(error.response));
  }
}

export const fetchCompanies = () => async (dispatch) => {
  const url = 'company/';
  try {
    const results = await apiClient('GET', url)
    dispatch(fetchCompaniesSucces(results.data));
  } catch (error) {
    dispatch(fetchCompaniesFail(error.response));
  }
}
