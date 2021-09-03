import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import { GlobalStyle } from './Global.styles';
import { routes } from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.name}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
