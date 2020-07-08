import {
  getHistoricalData,
  getSymbol,
  getSymbols,
  searchStock,
} from './stockFacade';
import finnHubService from './finnhub/finnHubService';
import finnHubServiceMock from './finnhub/__mocks__/finnHubServiceMock';

import quote from './finnhub/__mocks__/quotes.json';
import symbols from './finnhub/__mocks__/symbols.json';

finnHubService.getSymbols = jest
  .fn()
  .mockImplementation(finnHubServiceMock.getSymbols);
finnHubService.getQuoteData = jest
  .fn()
  .mockImplementation(finnHubServiceMock.getQuoteData);
finnHubService.getCandleData = jest
  .fn()
  .mockImplementation(finnHubServiceMock.getCandleData);

test('getSymbols should return array of symbols', async () => {
  let actual = await getSymbols();
  expect(finnHubService.getSymbols).toHaveBeenCalled();
  expect(actual[0]).toEqual({
    description: 'AGILENT TECHNOLOGIES INC',
    displaySymbol: 'A',
    symbol: 'A',
  });
});

test('getSymbol should return descriptor when valid symbol is given', async () => {
  let actual = getSymbol(symbols, 'AA');
  expect(actual).toEqual({
    description: 'ALCOA CORP',
    displaySymbol: 'AA',
    symbol: 'AA',
  });
});

test('getSymbol should return undefined when invalid symbol is given', async () => {
  let actual = getSymbol(symbols, 'XXX');
  expect(actual).toBeUndefined();
});

test('searchStock should return error when undefined is given', async () => {
  let actual = await searchStock(undefined);
  expect(actual).toEqual({error: true, stock: null});
});

test('searchStock should return stock when valid symbol is given', async () => {
  let actual = await searchStock({
    symbol: 'AAPL',
    description: 'Apple Inc',
    displaySymbol: 'AAPL',
  });

  expect(actual).toEqual({
    error: false,
    stock: {
      symbol: 'AAPL',
      name: 'Apple Inc',
      priceCurrent: quote.c,
      priceOpening: quote.o,
      priceHeight: quote.h,
      priceLow: quote.l,
    },
  });
});

test('searchStock should throw error when invalid symbol is given', async () => {
  let actual = await searchStock({
    symbol: 'XXX',
    description: '',
    displaySymbol: '',
  });
  expect(finnHubService.getQuoteData).toHaveBeenCalled();
  expect(actual).toEqual({error: true, stock: null});
});

test('getHistoricalData should throw error when invalid symbol is given', async () => {
  let actual = await getHistoricalData('XXX');
  expect(finnHubService.getCandleData).toHaveBeenCalled();
  expect(actual).toEqual({error: true, history: []});
});

test('getHistoricalData should return array of data when valid symbol is given', async () => {
  let actual = await getHistoricalData('AAPL');
  expect(finnHubService.getCandleData).toHaveBeenCalled();
  expect(actual.history.length).toEqual(252);
  expect(actual.history[0]).toEqual({date: '2019-07-05', value: 75.75});
});
