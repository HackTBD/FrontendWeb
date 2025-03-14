import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

test('displays homepage title', () => {
  render(<Page />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Welcome to HackTBD'
  );
});
