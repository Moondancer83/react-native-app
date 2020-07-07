import {Stock} from '../service/Stock';
import {SymbolDTO} from '../service/finnhub/FinnHubApi';

export type RootStackParamList = {
  Splash: undefined;
  Search: {symbols: Array<SymbolDTO>};
  Detail: {stock: Stock};
};
