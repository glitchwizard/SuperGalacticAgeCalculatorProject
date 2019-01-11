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

    it('5. findMarsAge should calculate the users age in Mars years', function () {
        testGalacticalcWithYoungBirthday.findMarsAge();

        let today = new Date();
        let expectedResult = today - testGalacticalcWithYoungBirthday.birthday;
        expectedResult = Math.floor(expectedResult / 31536000000 / testGalacticalcWithYoungBirthday.marsRatio);

        expect(testGalacticalcWithYoungBirthday.marsAge).toEqual(expectedResult);
    });

    it('6. findJupiterAge should calculate the users age in Jupiter years', function () {
        testGalacticalcWithYoungBirthday.findJupiterAge();

        let today = new Date();
        let expectedResult = today - testGalacticalcWithYoungBirthday.birthday;
        expectedResult = Math.floor(expectedResult / 31536000000 / testGalacticalcWithYoungBirthday.jupiterRatio);

        expect(testGalacticalcWithYoungBirthday.jupiterAge).toEqual(expectedResult);
    });

    it('7. FindEarthYearsExpectedToLive_Male should return the number of years left to live', function () {
        let testResult = testGalacticalcWithYoungBirthday.findEarthYearsExpectedToLive_Male();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithYoungBirthday.birthday.getTime() + testGalacticalcWithYoungBirthday.maleLifeSpanInMilliseconds);

        let expectedResult = Math.floor((predictedDeathDate - today) / 31536000000);

        expect(testResult).toEqual(expectedResult);
    })
});