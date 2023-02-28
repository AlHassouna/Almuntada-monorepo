import { pgsql } from './pgsql';

describe('pgsql', () => {
  it('should work', () => {
    expect(pgsql()).toEqual('pgsql');
  });
});
