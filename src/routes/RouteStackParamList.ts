import {Stock} from '../service/Stock';

export type RootStackParamList = {
  Splash: undefined;
  Search: undefined;
  Detail: {stock: Stock};
};
