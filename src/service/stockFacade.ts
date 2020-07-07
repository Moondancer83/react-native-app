import {Stock} from './Stock';
import {SymbolDTO} from './finnhub/FinnHubApi';
import finnHubService from './finnhub/finnHubService';

interface StockDTO {
  error: boolean;
  stock: Stock | null;
}

export async function getSymbols(): Promise<Array<SymbolDTO>> {
  return finnHubService.getSymbols();
}

async function getSymbol(symbol: string): Promise<SymbolDTO> {
  const symbols = await getSymbols();
  const filtered = symbols.filter((s) => s.symbol === symbol);
  if (filtered.length === 1) {
    return filtered[0];
  } else {
    return Promise.reject();
  }
}

export async function searchStock(symbol?: string): Promise<StockDTO> {
  if (symbol) {
    try {
      const profile = await getSymbol(symbol);
      const quote = await finnHubService.getQuoteData(symbol);

      const stock: Stock = {
        symbol: profile.symbol,
        name: profile.description,
        priceCurrent: quote.c,
        priceOpening: quote.o,
        priceHeight: quote.h,
        priceLow: quote.l,
      };

      return {error: false, stock};
    } catch (e) {
      console.log(e);
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
  try {
    const candles = await finnHubService.getCandleData(symbol);

    const history: Array<HistoryData> = [];
    candles.t.forEach((value: number, index: number) => {
      const key = new Date(value * 1000).toISOString().split('T')[0];
      const closingPrice = candles.c[index];
      history.push({date: key, value: closingPrice});
    });
    return {error: false, history};
  } catch (e) {
    console.log('stockFacade.getHistoricalData => ERROR', e);
    return {error: true, history: []};
  }
}
