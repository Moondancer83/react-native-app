import {Stock} from './Stock';

export type RootStackParamList = {
  Splash: undefined;
  Search: undefined;
  Detail: {stock: Stock};
};
