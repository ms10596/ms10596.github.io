import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { ThemeSwitcher } from '.';

expect.extend(toHaveNoViolations);

describe('ThemeSwitcher', () => {
  it('should be accessible', async () => {
    const { container } = render(<ThemeSwitcher />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
