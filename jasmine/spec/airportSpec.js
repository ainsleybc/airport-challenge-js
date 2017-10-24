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

  })
  
  it('instructs a plane to land at an airport', function () {
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled();
  });

});
