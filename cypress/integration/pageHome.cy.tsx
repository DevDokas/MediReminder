import React from 'react';

import Home from '../../src/app/page';

describe('<Home />', () => {
  it('renders', () => {
    cy.mount(<Home />);
  });
});
