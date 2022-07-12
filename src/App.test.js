import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('is URl Right',() => {
  render(<App />);
  const linkElement = screen.getByTestId("test_link");
  expect(linkElement.href).toContain("https://reactjs.org");
});