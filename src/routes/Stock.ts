export interface Stock {
  symbol: string;
  name: string;
  priceCurrent: number;
  priceOpening: number;
  priceHeight: number;
  priceLow: number;
  history: {[date: string]: number};
}
