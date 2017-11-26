describe('Plane', function () {

  var plane
  
  beforeEach(function () {
    plane = new Plane()
  });

  describe('land', function () {
    
    it('lands at an airport', function () {
      plane.land();
      expect(plane.landed()).toBe(true);
    });
    it('raises an error if already landed', function () {
      plane.land();
      expect(function() { plane.land() }).toThrowError('plane has already landed');
    });

  });

  describe('take off', function () {
    
    it('takes off from an airport', function () {
      plane.land();
      plane.takeOff();
      expect(plane.landed()).toBe(false);
    });
    it('raises an error if already taken off', function () {
      expect(function() { plane.takeOff() }).toThrowError('plane is already flying');
    });

  });

});
