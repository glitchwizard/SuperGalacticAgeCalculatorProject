import {
  Galacticalc
} from './../src/Galacticalc';

describe('Galacticalc', function () {

    let testGalacticalc;
    let testGalacticalcWithYoungBirthday;
    let testGalacticalcWithOldBirthday;

  beforeEach(function () {
      testGalacticalc = new Galacticalc();

      testGalacticalcWithYoungBirthday = new Galacticalc();
      testGalacticalcWithYoungBirthday.birthday = new Date('11/27/1980');

      testGalacticalcWithOldBirthday = new Galacticalc();
      testGalacticalcWithOldBirthday.birthday = new Date('11/27/1980');
  });


  it('0. if properly instantiated, messageProperty should return message', function () {
    expect(testGalacticalc.message).toEqual('SuperGalacticAgeCalculator is working.');
  });

  it('1. should update the birthday property after user input is collected', function () {
      testGalacticalc.setBirthday("11/27/1985");

    let year = testGalacticalc.birthday.getFullYear();
    let month = testGalacticalc.birthday.getMonth();
      let day = testGalacticalc.birthday.getDay();

    expect(testGalacticalc.birthday.getFullYear()).toEqual(1985);
    expect(testGalacticalc.birthday.getMonth()+1).toEqual(11);
      expect(testGalacticalc.birthday.getDate()).toEqual(27);

    });

    it('2. findEarthAge should calculate the users age in Earth years', function () {
        testGalacticalcWithYoungBirthday.findEarthAge();
        let today = new Date();
        let expectedResult = today - testGalacticalcWithYoungBirthday.birthday;
        expectedResult = Math.floor(expectedResult / 31536000000);

        expect(testGalacticalcWithYoungBirthday.earthAge).toEqual(expectedResult);
    });

    it('3. findMercuryAge should calculate the users age in Mercury years', function () {
        testGalacticalcWithYoungBirthday.findMercuryAge();

        let today = new Date();
        let expectedResult = today - testGalacticalcWithYoungBirthday.birthday;
        expectedResult = Math.floor(expectedResult / 31536000000 / testGalacticalcWithYoungBirthday.mercuryRatio);

        expect(testGalacticalcWithYoungBirthday.mercuryAge).toEqual(expectedResult);
    });

    it('4. findVenusAge should calculate the users age in Venus years', function () {
        testGalacticalcWithYoungBirthday.findVenusAge();

        let today = new Date();
        let expectedResult = today - testGalacticalcWithYoungBirthday.birthday;
        expectedResult = Math.floor(expectedResult / 31536000000 / testGalacticalcWithYoungBirthday.venusRatio);

        expect(testGalacticalcWithYoungBirthday.venusAge).toEqual(expectedResult);
    });
});