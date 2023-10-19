import { Model } from "../interfaces/model.js";
import { Trade } from "./trade.js";

export class Trades implements Model<Trades> {
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

  public toText(): string {
    return JSON.stringify(this.trades, null, 2);
  }

  public isEqual(trades: Trades): boolean {
    return JSON.stringify(this.trades) === JSON.stringify(trades);
  }
}
