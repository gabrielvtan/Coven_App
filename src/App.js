import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import DealSummary from './containers/DealSummary/DealSummary';
import SubmitDeal from './containers/SubmitDeal/SubmitDeal';
import DealList from './containers/DealList/DealList';
import Contributions from './containers/Contributions/Contributions';
import Profile from './containers/Profile/Profile';


class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              <Switch>
                <Route path="/submit-deal" component={SubmitDeal}/>
                <Route path="/deal-list/deal-summary" component={DealSummary}/>
                <Route path="/deal-list" component={DealList}/>
                <Route path="/contributions" component={Contributions}/>
                <Route path="/profile" component={Profile}/>
              </Switch>
          </Layout>
      </div>
    );
  }
}

export default App;
