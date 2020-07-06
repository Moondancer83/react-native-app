export interface SymbolDTO {
  description: string;
  displaySymbol: string;
  symbol: string;
}

export interface QuoteDTO {
  c: number;
  h: number;
  l: number;
  o: number;
  pc: number;
  t: number;
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

export interface FinnHubService {
  getSymbols(): Promise<Array<SymbolDTO>>;
  getQuoteData(symbol: string): Promise<QuoteDTO>;
  getCandleData(symbol: string): Promise<HistoryDTO>;
}
