export class Trade {
    constructor(_date, _quantity, _value) {
        this._date = _date;
        this._quantity = _quantity;
        this._value = _value;
    }
    get date() {
        return new Date(this._date.getTime());
    }
    get quantity() {
        return this._quantity;
    }
    get value() {
        return this._value;
    }
    get volume() {
        return this._quantity * this._value;
    }
    static createFrom(date, quantity, value) {
        return new Trade(new Date(date.split("-").join(",")), Number(quantity), Number(value));
    }
}
