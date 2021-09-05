import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PhotosCard from '..';

it('PhotosCard component rendered correctly', () => {
  const { queryByTitle } = render(
    <Router>
      <PhotosCard image="Test" link="Test" title="Test" />
    </Router>
  ,
  );

  const PhotosCardEl = queryByTitle('PhotosCard');
  expect(PhotosCardEl).toBeVisible();
});
