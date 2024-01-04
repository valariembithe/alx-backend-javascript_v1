import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    return this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slow the ${this.floors} floors`;
  }
}