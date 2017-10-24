describe('airport', function () {

  var airport 

  beforeEach(function () {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
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

  });

});
