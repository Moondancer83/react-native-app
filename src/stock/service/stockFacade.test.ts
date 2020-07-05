import {searchStock} from './stockFacade';

test('searchStock should', () => {
  let actual = searchStock(undefined);
  expect(actual).toEqual({error: true, stock: null});
});
