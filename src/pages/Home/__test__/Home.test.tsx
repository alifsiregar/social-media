import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '..';

it('Home page rendered correctly', () => {
  const { queryByTitle } = render(
    <Router>
      <Home />
    </Router>
  ,
  );

  const HomeEl = queryByTitle('Home');
  expect(HomeEl).toBeVisible();
});
