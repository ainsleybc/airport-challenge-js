function Plane() {
  this._landed = false;
};

Plane.prototype.landed = function () {
  return this._landed
};

Plane.prototype.land = function () {
  if (this._landed == true) {
    throw new Error('plane has already landed');
  } else {
    this._landed = true;
  };
};

Plane.prototype.takeOff = function () {
  if (this._landed == false) {
    throw new Error('plane is already flying');
  } else {
    this._landed = false;
  };
};
