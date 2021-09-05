import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TwoButtonsCard from '..';

it('TwoButtonsCard component rendered correctly', () => {
  const { queryByTitle } = render(
    <Router>
      <TwoButtonsCard title="Test" body="Test" link="Test" onClick={() => {}} />
    </Router>
  ,
  );

  const TwoButtonsCardEl = queryByTitle('TwoButtonsCard');
  expect(TwoButtonsCardEl).toBeVisible();
});
