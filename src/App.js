import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Dashboard from './components/dashboard/dashboard';
import CreateNewCompany from './components/createNewCompany/createNewCom'
import ViewAllCompanies from './components/viewCompanies/viewCompanies';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/create-new-company" component={CreateNewCompany} />
          <Route exact path="/view-companies" component={ViewAllCompanies} />
        </Switch>
      </div>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
