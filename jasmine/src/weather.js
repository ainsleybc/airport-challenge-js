function Weather() {
  this._OUTLOOKS = ['stormy', 'sunny', 'sunny', 'sunny', 'sunny'];
};

Weather.prototype.isStormy = function () {
  return this._randomizer() == 'stormy';
};

Weather.prototype._randomizer = function () {
  return this._OUTLOOKS[Math.floor(Math.random() * 5)];
};
