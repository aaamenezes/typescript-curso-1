export class Trades {
    constructor(trades) {
        this.trades = [];
        this.trades = trades;
    }
    add(trade) {
        this.trades.push(trade);
    }
    getTradesList() {
        return this.trades;
    }
}
