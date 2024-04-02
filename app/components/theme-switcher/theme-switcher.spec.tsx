import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { userEvent } from '@testing-library/user-event';
import { ThemeSwitcher } from '.';

expect.extend(toHaveNoViolations);

describe('ThemeSwitcher', () => {
  it('should switch theme', async () => {
    render(<ThemeSwitcher />);
    const input = screen.getByRole('checkbox');
    await userEvent.click(input);
  });

  it('should be accessible', async () => {
    const { container } = render(<ThemeSwitcher />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
