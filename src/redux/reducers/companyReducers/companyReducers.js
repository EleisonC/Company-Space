import {
  CREATECOMPANY_REQUEST,
  CREATECOMPANY_REQUEST_FAIL,
  GETCOMPANIES_REQUEST_SUCCES,
  GETCOMPANIES_REQUEST_FAIL
} from '../../actions/actionTypes';

const initialState = {
  data: {},
  error: {},
  companies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GETCOMPANIES_REQUEST_SUCCES:
      return {
        ...state,
        companies: [
          ...action.payload
        ]
      }
    case CREATECOMPANY_REQUEST:
      return {
        ...state,
        data: action.payload
      };
    case GETCOMPANIES_REQUEST_FAIL:
    case CREATECOMPANY_REQUEST_FAIL:
        return {
          ...state,
          error: action.payload
        }
    default:
      return state
  }
}
