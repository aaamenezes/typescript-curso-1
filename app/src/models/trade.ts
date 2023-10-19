import { Model } from "../interfaces/model.js";

export class Trade implements Model<Trade> {
  constructor(
    private _date: Date,
    private _quantity: number,
    private _value: number
  ) {}

  get date(): Date {
    return new Date(this._date.getTime());
  }

  get quantity(): number {
    return this._quantity;
  }

  get value(): number {
    return this._value;
  }

  get volume(): number {
    return this._quantity * this._value;
  }

  public toText(): string {
    return `
      Data: ${this.date}
      Quantidade: ${this.quantity}
      Valor: ${this.value}
    `;
  }

  public isEqual(trade: Trade): boolean {
    return (
      this.date.getDate() === trade.date.getDate() &&
      this.date.getMonth() === trade.date.getMonth() &&
      this.date.getFullYear() === trade.date.getFullYear()
    );
  }

  public static createFrom(
    date: string,
    quantity: string,
    value: string
  ): Trade {
    return new Trade(
      new Date(date.split("-").join(",")),
      Number(quantity),
      Number(value)
    );
  }
}
