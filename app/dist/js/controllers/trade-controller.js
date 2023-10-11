import { WeekDays } from "../enums/week-days.js";
import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
import { Snackbar } from "../views/snackbar.js";
import { TradesTable } from "../views/trades-table.js";
export class TradeController {
    constructor() {
        this.trades = new Trades([]);
        this.tradesTable = new TradesTable("#trades-table", true);
        this.snackbar = new Snackbar("#snackbar");
        this.inputDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.inputValue = document.querySelector("#value");
        this.tradesTable.update(this.trades);
    }
    add() {
        const trade = Trade.createFrom(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isBusinessDay(trade.date)) {
            return this.snackbar.update("Não é dia útil");
        }
        this.trades.add(trade);
        this.clearForm();
        this.updateView();
    }
    clearForm() {
        this.inputDate.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
    updateView() {
        this.tradesTable.update(this.trades);
        this.snackbar.update("Trade added successful");
    }
    isBusinessDay(date) {
        if (date.getDay() === WeekDays.SUNDAY)
            return false;
        if (date.getDay() === WeekDays.SATURDAY)
            return false;
        return true;
    }
}
