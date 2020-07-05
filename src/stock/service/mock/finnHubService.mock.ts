import {HistoryDTO, Profile, QuoteDTO, SymbolDTO} from '../finnHubService';
import * as symbols from './symbols.json';
import * as quotes from './quotes.json';
import * as candles from './candles.json';

export async function getSymbols(): Promise<Array<SymbolDTO>> {
  return symbols as Array<SymbolDTO>;
}

export async function getProfile(symbol: string): Promise<Profile> {
  if (symbol.startsWith('X')) {
    throw Error('Unsupported symbol');
  }
  return {name: 'Apple Inc', ticker: 'AAPL'};
}

export async function getQuoteData(symbol: string): Promise<QuoteDTO> {
  if (symbol.startsWith('X')) {
    throw Error('Unsupported symbol');
  }
  return quotes as QuoteDTO;
}

export async function getCandleData(symbol: string): Promise<HistoryDTO> {
  if (symbol.startsWith('X')) {
    throw Error('Unsupported symbol');
  }
  return candles as HistoryDTO;
}
