import { useEffect, useState } from 'react';
import {
  Link,
  useHistory,
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ListView />
        </Route>
      </Switch>
    </Router>
  );
}
