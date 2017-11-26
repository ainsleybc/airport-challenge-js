describe('weather', function () {

  var weather

  beforeEach(function () {
    weather = new Weather();
  });
  
  it('returns true for stormy weather', function () {
    spyOn(weather,'_randomizer').and.returnValue('stormy')
    expect(weather.isStormy()).toBe(true);
  });

  it('returns false for sunny weather', function () {
    spyOn(weather,'_randomizer').and.returnValue('sunny')
    expect(weather.isStormy()).toBe(false);
  });
  
});
