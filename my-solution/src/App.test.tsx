import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import App from './App';

test('renders text input', () => {
  render(<App />);
  const textarea = screen.getByRole('textbox');
  expect(textarea).toBeInTheDocument();
});

test('input onchange works properly', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  const text = '# new text';
  fireEvent.change(input, { target: { value: text } });

  expect(screen.getByText(text)).toBeInTheDocument();
});

test('markdown render heading h1 & h2 when using # & ##', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: '## esto es un texto \n # this is another one' } });
  expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
});

test('markdown render <hr/> when receives ---', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: '---' } });
  const markdown = screen.getByRole('separator');
  expect(markdown).toBeInTheDocument();
});
