export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
    return this._code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this.code})`;
  }
}
