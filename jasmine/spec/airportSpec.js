describe('airport', function () {

  beforeEach(function () {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
    weatherSpy = spyOn(airport, '_isClear').and.callFake(function () { return true });
  });

  describe('planes', function () {
    
    it('has a default capacity of 10', function () {
      expect(airport.capacity()).toEqual(10);
    });
    it('allows to override the default capacity', function () {
      airport = new Airport(20)
      expect(airport.capacity()).toEqual(20);      
    });

  })

  describe('land', function () {
    
    it('instructs a plane to land at an airport', function () {
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });
    it('stores a landed plane in the hangar', function () {
      airport.land(plane);
      expect(airport.planes()).toEqual(jasmine.arrayContaining([plane]));
    });
    it('raises an error if trying to land at a full airport', function () {
      for (var i = 0; i < 10; i++) {
        airport.land(plane);
      };
      expect(function () { airport.land(plane) }).toThrowError('cannot land at full airport');
    });
    it('raises error if weather is stromy', function () {
      weatherSpy.and.callFake(function () { return false });
      expect(function () { airport.land(plane) }).toThrowError('cannot land in stormy weather');
    });

  });

  describe('takeOff', function () {
    
    it('instructs a plane to take off from an airport', function () {
      airport.land(plane);
      airport.takeOff(plane);
      expect(plane.takeOff).toHaveBeenCalled();
    });
    it('confirms a plane has left the airport', function () {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes()).not.toEqual(jasmine.arrayContaining([plane]));
    });
    it('raises error if the plane is in a different airport', function () {
      expect(function () { airport.takeOff(plane) }).toThrowError('plane is not at this airport');
    });

  });

});
