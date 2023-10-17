import { DailyTrade } from "../interfaces/daily-trade.js";
import { Trade } from "../models/trade.js";

export class TradesService {
  public getDailyTrades(): Promise<Trade[]> {
    return fetch("http://localhost:8080/dados")
      .then((response) => response.json())
      .then((data: DailyTrade[]) => {
        return data.map(
          (trade) => new Trade(new Date(), trade.vezes, trade.montante)
        );
      });
  }
}
