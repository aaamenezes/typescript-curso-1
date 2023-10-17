import { Trade } from "../models/trade.js";
export class TradesService {
    getDailyTrades() {
        return fetch("http://localhost:8080/dados")
            .then((response) => response.json())
            .then((data) => {
            return data.map((trade) => new Trade(new Date(), trade.vezes, trade.montante));
        });
    }
}
