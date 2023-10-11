import { Trade } from "./trade.js";

export class Trades {
  private trades: Array<Trade> = [];

  constructor(trades: Array<Trade>) {
    this.trades = trades;
  }

  public add(trade: Trade) {
    this.trades.push(trade);
  }

  public getTradesList(): ReadonlyArray<Trade> {
    return this.trades;
  }
}
