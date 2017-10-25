function Airport(capacity = 10) {
  this._capacity = capacity
  this._planes = []
};

Airport.prototype.land = function (plane) {
  if (this._planes.length >= this._capacity) throw new Error('cannot land at full airport');
  plane.land();
  this._planes.push(plane);
};

Airport.prototype.takeOff = function (plane) {
  var index = this._planes.indexOf(plane);
  if (index === -1) throw new Error('plane is not at this airport');
  plane.takeOff();
  this._planes.splice(index, 1);
}

Airport.prototype.capacity = function (capacity) {
  return this._capacity;
};

Airport.prototype.planes = function () {
  return this._planes;
};
