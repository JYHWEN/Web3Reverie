// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3Reverie title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3Reverie/i);
    expect(titleElement).toBeInTheDocument();
});
