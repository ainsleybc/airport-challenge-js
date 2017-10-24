function Airport(capacity = 10) {
  this._capacity = capacity
};

Airport.prototype.land = function (plane) {
  plane.land();
};

Airport.prototype.capacity = function (capacity) {
  return this._capacity;
};
