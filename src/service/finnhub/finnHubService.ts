import fetch, {Response} from 'node-fetch';
import * as hubSetup from './finnhub.json';
import {FinnHubService, HistoryDTO, QuoteDTO, SymbolDTO} from './FinnHubApi';

class FinHubServiceImpl implements FinnHubService {
  public async getCandleData(symbol: string): Promise<HistoryDTO> {
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
      FinHubServiceImpl.getSeconds(startDate) +
      '&to=' +
      FinHubServiceImpl.getSeconds(endDate) +
      '&token=' +
      hubSetup.apiKey;
    const response: Response = await fetch(url);
    if (response.ok) {
      const body = await response.json();

      if (body.error) {
        throw Error(body.error);
      } else {
        return body as HistoryDTO;
      }
    } else {
      throw Error(response.statusText);
    }
  }

  private static getSeconds(timestamp: Date) {
    return Math.floor(timestamp.getTime() / 1000);
  }

  public async getQuoteData(symbol: string): Promise<QuoteDTO> {
    const url =
      hubSetup.uri + '/quote?symbol=' + symbol + '&token=' + hubSetup.apiKey;
    const response: Response = await fetch(url);
    if (response.ok) {
      const body = await response.json();
      if (body.error) {
        throw Error(body.error);
      } else {
        return body as QuoteDTO;
      }
    } else {
      throw Error(response.statusText);
    }
  }

  public async getSymbols(): Promise<Array<SymbolDTO>> {
    const url = hubSetup.uri + '/stock/symbol?exchange=US' + '&token=';
    const response: Response = await fetch(url + hubSetup.apiKey);

    if (response.ok) {
      return response.json();
    } else {
      return [];
    }
  }
}

export default new FinHubServiceImpl();
