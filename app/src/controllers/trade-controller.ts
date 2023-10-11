import { domInjector } from "../decorators/dom-injector.js";
import { execTimeLogin } from "../decorators/exec-time-login.js";
import { inspect } from "../decorators/inspect.js";
import { WeekDays } from "../enums/week-days.js";
import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
import { Snackbar } from "../views/snackbar.js";
import { TradesTable } from "../views/trades-table.js";

export class TradeController {
  @domInjector("#date")
  private inputDate: HTMLInputElement;
  @domInjector("#quantity")
  private inputQuantity: HTMLInputElement;
  @domInjector("#value")
  private inputValue: HTMLInputElement;

  private trades = new Trades([]);
  private tradesTable = new TradesTable("#trades-table");
  private snackbar = new Snackbar("#snackbar");

  constructor() {
    this.tradesTable.update(this.trades);
  }

  @inspect
  @execTimeLogin()
  public add(): void {
    const trade = Trade.createFrom(
      this.inputDate.value,
      this.inputQuantity.value,
      this.inputValue.value
    );

    if (!this.isBusinessDay(trade.date)) {
      return this.snackbar.update("Não é dia útil");
    }

    this.trades.add(trade);
    this.clearForm();
    this.updateView();
  }

  private clearForm(): void {
    this.inputDate.value = "";
    this.inputQuantity.value = "";
    this.inputValue.value = "";
    this.inputDate.focus();
  }

  private updateView(): void {
    this.tradesTable.update(this.trades);
    this.snackbar.update("Trade added successful");
  }

  private isBusinessDay(date: Date): boolean {
    if (date.getDay() === WeekDays.SUNDAY) return false;
    if (date.getDay() === WeekDays.SATURDAY) return false;
    return true;
  }
}
