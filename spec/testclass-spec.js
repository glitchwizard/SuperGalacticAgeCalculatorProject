import {
  Galacticalc
} from './../src/Galacticalc';

describe('Galacticalc', function () {

  let testGalacticalc;
  beforeEach(function () {
    testGalacticalc = new Galacticalc();
  });


  it('if properly instantiated, messageProperty should return message', function () {
    expect(testGalacticalc.message).toEqual('SuperGalacticAgeCalculator is working.');
  });

  it('should update the birthday property after user input is collected', function () {
    debugger;
    testGalacticalc.getBirthday("11/27/1985");
    expect(testGalacticalc.birthday.getFullYear()).toEqual(1985);
  }); 
 //
});