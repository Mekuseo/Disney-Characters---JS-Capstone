import itemTotal from '../_mocks_/itemTotal.js';

describe('itemTotal', () => {
  it('should return the number of items', async () => {
    const item = await itemTotal();
    expect(item.length).toBe(50);
  });
});