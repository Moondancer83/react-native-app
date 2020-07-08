import {FinnHubService, HistoryDTO, QuoteDTO, SymbolDTO} from '../FinnHubApi';
import symbols from './symbols.json';
import quotes from './quotes.json';
import candles from './candles.json';

class FinnHibServiceMock implements FinnHubService {
  public async getCandleData(symbol: string): Promise<HistoryDTO> {
    if (symbol.startsWith('X')) {
      throw Error('Unsupported symbol');
    }
    return candles as HistoryDTO;
  }

  public async getQuoteData(symbol: string): Promise<QuoteDTO> {
    if (symbol.startsWith('X')) {
      throw Error('Unsupported symbol');
    }
    return quotes as QuoteDTO;
  }

  public async getSymbols(): Promise<Array<SymbolDTO>> {
    return symbols as Array<SymbolDTO>;
  }
}

export default new FinnHibServiceMock();
