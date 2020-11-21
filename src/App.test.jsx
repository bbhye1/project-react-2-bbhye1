import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector(
    {
      moodselectFields: {
        energy: '',
        brightness: '',
      },
      moodCategories: [],
    },
  ));

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  context('with path /', () => {
    it('renders the Mood controller page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('오늘은 어떤 날인가요?');
    });
  });

  context('with path /moodplay', () => {
    it('renders the Mood controller page', () => {
      const { container } = renderApp({ path: '/moodplay' });

      expect(container).toHaveTextContent('기분에 어울리는 장르들이에요!');
    });
  });
});
