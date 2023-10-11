export class Trade {
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
