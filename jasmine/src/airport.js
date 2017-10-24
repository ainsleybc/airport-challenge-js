function Airport(capacity = 10) {
  this._capacity = capacity
  this._planes = []
};

Airport.prototype.land = function (plane) {
  plane.land();
  this._planes.push(plane)
};

Airport.prototype.capacity = function (capacity) {
  return this._capacity;
};

Airport.prototype.planes = function () {
  return this._planes;
};
