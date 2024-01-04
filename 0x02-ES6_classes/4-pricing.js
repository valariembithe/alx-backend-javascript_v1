import Currency from "./3-currency";

export default class Pricing {
	constructor(amount, currency) {
		this.amount = amount;
		this.currency = currency;
	}
	get amount() {
		this._amount;
	}
	set amount(value) {
		if (!(value instanceof Number)) {
			throw new TypeError('amount must be a number');
		}
		this._amount = value;
	}

	get currency() {
		return this._currency;
	}
	set currency(value) {
		if (!(value instanceof Currency)) {
			throw new TypeError('currency must be a Currency');
		}
		this._currency = value;
	}
	displayFullPrice() {
		return `${this.amount} ${this.currency.name} ${this.currency.code}`
	}
	static convertPrice(amount, conversionRate) {
		if (!(amount instanceof Number)) {
			throw new TypeError('amount must be a number')
		}
		if (!(conversionRate instanceof Number)) {
			throw new TypeError('conversionRate must be a number');
		}
		return amount * conversionRate;
	}
}