import { expect, test } from 'vitest';

import { render } from '@testing-library/react';
import Intro from '../Intro';
import { data } from '../data';

test('Intro', () => {
  const { getByText } = render(<Intro />);
  expect(getByText(data.email)).toBeDefined();
});
