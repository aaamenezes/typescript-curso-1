var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { execTimeLogin } from "../decorators/exec-time-login.js";
import { inspect } from "../decorators/inspect.js";
import { WeekDays } from "../enums/week-days.js";
import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
import { TradesService } from "../services/trades-service.js";
import { Snackbar } from "../views/snackbar.js";
import { TradesTable } from "../views/trades-table.js";
export class TradeController {
    constructor() {
        this.trades = new Trades([]);
        this.tradesTable = new TradesTable("#trades-table");
        this.snackbar = new Snackbar("#snackbar");
        this.tradesService = new TradesService();
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
    importData() {
        this.tradesService.getDailyTrades().then((formattedTrades) => {
            for (let trade of formattedTrades) {
                this.trades.add(trade);
            }
            this.tradesTable.update(this.trades);
        });
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
__decorate([
    domInjector("#date")
], TradeController.prototype, "inputDate", void 0);
__decorate([
    domInjector("#quantity")
], TradeController.prototype, "inputQuantity", void 0);
__decorate([
    domInjector("#value")
], TradeController.prototype, "inputValue", void 0);
__decorate([
    inspect,
    execTimeLogin()
], TradeController.prototype, "add", null);
