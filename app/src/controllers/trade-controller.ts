import { execTimeLogin } from "../decorators/exec-time-login.js";
import { WeekDays } from "../enums/week-days.js";
import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
import { Snackbar } from "../views/snackbar.js";
import { TradesTable } from "../views/trades-table.js";

export class TradeController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private trades = new Trades([]);
  private tradesTable = new TradesTable("#trades-table", true);
  private snackbar = new Snackbar("#snackbar");

  constructor() {
    this.inputDate = document.querySelector("#date") as HTMLInputElement;
    this.inputQuantity = <HTMLInputElement>document.querySelector("#quantity");
    this.inputValue = <HTMLInputElement>document.querySelector("#value");
    this.tradesTable.update(this.trades);
  }

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
