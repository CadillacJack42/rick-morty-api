import { useEffect, useState } from 'react';
import {
  Link,
  useHistory,
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ListView from './views/ListView';
import DetailView from './views/DetailView';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/characters/:id">
          <DetailView />
        </Route>
        <Route path="/">
          <ListView />
        </Route>
      </Switch>
    </Router>
  );
}
