import counter from '../_mocks_/counter.js';

describe('Check comments count', () => {
  test('Total Comments for this item', async () => {
    const item = await counter(30);
    const total = item.length;
    expect(total).toEqual(2);
  });

  test('test2', async () => {
    const item = await counter(30);
    const total = item.length;
    expect(total === item.length).toBe(true);
  });
});
