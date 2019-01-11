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
    testGalacticalc.getBirthday("11/27/1985");
    let year = testGalacticalc.birthday.getFullYear();
    let month = testGalacticalc.birthday.getMonth();
    let day =testGalacticalc.birthday.getDay();
    expect(testGalacticalc.birthday.getFullYear()).toEqual(1985);
    expect(testGalacticalc.birthday.getMonth()+1).toEqual(11);
    expect(testGalacticalc.birthday.getDate()).toEqual(27);
  }); 

});