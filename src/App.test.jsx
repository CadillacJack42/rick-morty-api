import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App should fetch character data from Rick and Morty API', () => {
  it('Should fetch and display a list characters to App', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.getByText(/loading.../i);

    const link = await screen.findByText(/rick sanchez/i);
    userEvent.click(link);

    await screen.findByAltText(/image of rick sanchez/i);
  });
});
