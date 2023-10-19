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
    toText() {
        return JSON.stringify(this.trades, null, 2);
    }
    isEqual(trades) {
        return JSON.stringify(this.trades) === JSON.stringify(trades);
    }
}
//# sourceMappingURL=trades.js.map