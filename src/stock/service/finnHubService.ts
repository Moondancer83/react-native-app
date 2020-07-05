import fetch, {Response} from 'node-fetch';
import * as hubSetup from './finnhub.json';

export interface SymbolDTO {
  description: string;
  displaySymbol: string;
  symbol: string;
}

export async function getSymbols(): Promise<Array<SymbolDTO>> {
  const url = hubSetup.uri + '/stock/symbol?exchange=US' + '&token=';
  const response: Response = await fetch(url + hubSetup.apiKey);

  if (response.ok) {
    const start = new Date();
    const body: Array<SymbolDTO> = await response.json();
    console.log('fetch time', new Date().getTime() - start.getTime() + 'ms');

    return body;
  } else {
    return [];
  }
}

export interface Profile {
  name: string;
  ticker: string;
  [key: string]: string | number;
}

export async function getProfile(symbol: string): Promise<Profile> {
  const url =
    hubSetup.uri +
    '/stock/profile?symbol=' +
    symbol +
    '&token=' +
    hubSetup.apiKey;
  const response: Response = await fetch(url + hubSetup.apiKey);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}

export interface QuoteDTO {
  c: number;
  h: number;
  l: number;
  o: number;
  pc: number;
  t: number;
}

export async function getQuoteData(symbol: string): Promise<QuoteDTO> {
  const url = hubSetup.uri + '/quote?symbol=' + symbol + '&token=';
  const response: Response = await fetch(url + hubSetup.apiKey);
  if (response.ok) {
    const body = await response.json();
    console.log(url, 'GET', response.status, body);

    if (body.error) {
      throw Error(body.error);
    } else {
      return body as QuoteDTO;
    }
  } else {
    console.error('Error', response.status);
    throw Error(response.statusText);
  }
}

export interface HistoryDTO {
  c: Array<number>; // List of close prices for returned candles.
  h: Array<number>; // List of high prices for returned candles.
  l: Array<number>; // List of low prices for returned candles.
  o: Array<number>; // List of open prices for returned candles.
  s?: string; // Status of the response. This field can either be ok or no_data.
  t: Array<number>; // List of timestamp for returned candles.
  v: Array<number>; // List of volume data for returned candles.
}

export async function getCandleData(symbol: string): Promise<HistoryDTO> {
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);
  const endDate = new Date();
  const resolution = 'D';

  const url =
    hubSetup.uri +
    '/stock/candle?symbol=' +
    symbol +
    '&resolution=' +
    resolution +
    '&from=' +
    Math.floor(startDate.getTime() / 1000) +
    '&to=' +
    Math.floor(endDate.getTime() / 1000) +
    '&token=' +
    hubSetup.apiKey;
  const response: Response = await fetch(url);
  console.log(url, 'GET', response.status, response.body);
  if (response.ok) {
    const body = await response.json();
    console.log(url, 'GET', response.status, body);

    if (body.error) {
      throw Error(body.error);
    } else {
      return body as HistoryDTO;
    }
  } else {
    console.log('Error', response.status);
    throw Error(response.statusText);
  }
}
