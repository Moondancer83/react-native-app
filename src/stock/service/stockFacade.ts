import {Stock} from '../../routes/Stock';
import {SymbolDTO} from './finnHubService';
import * as finnHubService from './mock/finnHubService.mock';

interface StockDTO {
  error: boolean;
  stock: Stock | null;
}

export async function getSymbols(): Promise<Array<SymbolDTO>> {
  return finnHubService.getSymbols();
}

export async function searchStock(symbol?: string): Promise<StockDTO> {
  if (symbol) {
    try {
      const profile = await finnHubService.getProfile(symbol);
      const quote = await finnHubService.getQuoteData(symbol);

      console.log(symbol, 'QUOTE', quote);

      const stock: Stock = {
        symbol: profile.ticker,
        name: profile.name,
        priceCurrent: quote.c,
        priceOpening: quote.o,
        priceHeight: quote.h,
        priceLow: quote.l,
      };

      return {error: false, stock};
    } catch (e) {
      return {error: true, stock: null};
    }
  } else {
    return {error: true, stock: null};
  }
}

export interface HistoryData {
  date: string;
  value: number;
}

export async function getHistoricalData(
  symbol: string,
): Promise<{error: boolean; history: Array<HistoryData>}> {
  console.log('stockFacade.getHistoricalData(' + symbol + ')');
  try {
    const candles = await finnHubService.getCandleData(symbol);
    console.log(symbol, 'CANDELS', candles);

    const history: Array<HistoryData> = [];
    candles.t.forEach((value: number, index: number) => {
      const key = new Date(value * 1000).toISOString().split('T')[0];
      console.log('Date', key);
      const closingPrice = candles.c[index];
      history.push({date: key, value: closingPrice});
    });
    console.log('HistoricalData', history);
    return {error: false, history};
  } catch (e) {
    console.log('stockFacade.getHistoricalData => ERROR', e);
    return {error: true, history: []};
  }
}
