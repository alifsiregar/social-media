import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonCard from '..';

it('ButtonCard component rendered correctly', () => {
  const { queryByTitle } = render(
    <Router>
      <ButtonCard title="Test" link="Test" />
    </Router>
  ,
  );

  const ButtonCardEl = queryByTitle('ButtonCard');
  expect(ButtonCardEl).toBeVisible();
});
