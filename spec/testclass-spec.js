import { Galacticalc } from './../src/Galacticalc';

describe('Galacticalc', function() {

  let testGalacticalc;
  beforeEach(function() {
    testGalacticalc = new Galacticalc();
  });


  it('if properly instantiated, messageProperty should return message', function() {
    expect(testGalacticalc.message).toEqual('SuperGalacticAgeCalculator is working.');
  });

  // it('should update the earth age property', function () {
    
  // })
});

