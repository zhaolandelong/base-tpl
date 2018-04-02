import { strReverse } from '@util';

describe('# strReverse', () => {
  it('"12345" => "54321"', () => {
    expect(strReverse('12345')).toBe('54321');
  });
});
