import { expect, test } from 'vitest';

import { render } from '@testing-library/react';
import Bio from '../Bio';

test('Bio', async () => {
  const { getByText } = render(await Bio());
  expect(getByText(/type safety/)).toBeDefined();
});
