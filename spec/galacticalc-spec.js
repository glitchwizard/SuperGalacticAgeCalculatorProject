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
      testGalacticalcWithOldBirthday.birthday = new Date('11/27/1930');
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

    it('7. findEarthYearsExpectedToLive_Male should return the number of years left to live on Earth', function () {
        let testResult = testGalacticalcWithYoungBirthday.findEarthYearsExpectedToLive_Male();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithYoungBirthday.birthday.getTime() + testGalacticalcWithYoungBirthday.maleLifeSpanInMilliseconds);

        let expectedResult = Math.floor((predictedDeathDate - today) / 31536000000);

        expect(testGalacticalcWithYoungBirthday.earthYearsRemaining).toEqual(expectedResult);
    })

    it('8. findMercuryYearsExpectedToLive_Male should return the number of years left to live on Mercury', function () {
        let testResult = testGalacticalcWithYoungBirthday.findMercuryYearsExpectedToLive_Male();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithYoungBirthday.birthday.getTime() + testGalacticalcWithYoungBirthday.maleLifeSpanInMilliseconds);

        let expectedResult = Math.floor((predictedDeathDate - today) / 31536000000 / testGalacticalcWithYoungBirthday.mercuryRatio);

        expect(testGalacticalcWithYoungBirthday.mercuryYearsRemaining).toEqual(expectedResult);
    });

    it('9. findVenusYearsExpectedToLive_Male should return the number of years left to live on Venus', function () {
        let testResult = testGalacticalcWithYoungBirthday.findVenusYearsExpectedToLive_Male();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithYoungBirthday.birthday.getTime() + testGalacticalcWithYoungBirthday.maleLifeSpanInMilliseconds);

        let expectedResult = Math.floor((predictedDeathDate - today) / 31536000000 / testGalacticalcWithYoungBirthday.venusRatio);

        expect(testGalacticalcWithYoungBirthday.venusYearsRemaining).toEqual(expectedResult);
    });

    it('10. findMarsYearsExpectedToLive_Male should return the number of years left to live on Mars', function () {
        let testResult = testGalacticalcWithYoungBirthday.findMarsYearsExpectedToLive_Male();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithYoungBirthday.birthday.getTime() + testGalacticalcWithYoungBirthday.maleLifeSpanInMilliseconds);

        let expectedResult = Math.floor((predictedDeathDate - today) / 31536000000 / testGalacticalcWithYoungBirthday.marsRatio);

        expect(testGalacticalcWithYoungBirthday.marsYearsRemaining).toEqual(expectedResult);
    });

    it('11. findJupiterYearsExpectedToLive_Male should return the number of years left to live on Jupiter', function () {
        let testResult = testGalacticalcWithYoungBirthday.findJupiterYearsExpectedToLive_Male();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithYoungBirthday.birthday.getTime() + testGalacticalcWithYoungBirthday.maleLifeSpanInMilliseconds);

        let expectedResult = Math.floor((predictedDeathDate - today) / 31536000000 / testGalacticalcWithYoungBirthday.jupiterRatio);

        expect(testGalacticalcWithYoungBirthday.jupiterYearsRemaining).toEqual(expectedResult);
    });

    it('12. findEarthYearsExpectedToLive_Female should return the number of years left to live on Earth', function () {
        let testResult = testGalacticalcWithYoungBirthday.findEarthYearsExpectedToLive_Female();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithYoungBirthday.birthday.getTime() + testGalacticalcWithYoungBirthday.femaleLifeSpanInMilliseconds);

        let expectedResult = Math.floor((predictedDeathDate - today) / 31536000000);

        expect(testGalacticalcWithYoungBirthday.earthYearsRemaining).toEqual(expectedResult);
    })

    it('13. findMercuryYearsExpectedToLive_Female should return the number of years left to live on Mercury', function () {
        let testResult = testGalacticalcWithYoungBirthday.findMercuryYearsExpectedToLive_Female();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithYoungBirthday.birthday.getTime() + testGalacticalcWithYoungBirthday.femaleLifeSpanInMilliseconds);

        let expectedResult = Math.floor((predictedDeathDate - today) / 31536000000 / testGalacticalcWithYoungBirthday.mercuryRatio);

        expect(testGalacticalcWithYoungBirthday.mercuryYearsRemaining).toEqual(expectedResult);
    });

    it('14. findVenusYearsExpectedToLive_Female should return the number of years left to live on Venus', function () {
        let testResult = testGalacticalcWithYoungBirthday.findVenusYearsExpectedToLive_Female();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithYoungBirthday.birthday.getTime() + testGalacticalcWithYoungBirthday.femaleLifeSpanInMilliseconds);

        let expectedResult = Math.floor((predictedDeathDate - today) / 31536000000 / testGalacticalcWithYoungBirthday.venusRatio);

        expect(testGalacticalcWithYoungBirthday.venusYearsRemaining).toEqual(expectedResult);
    });

    it('15. findMarsYearsExpectedToLive_Female should return the number of years left to live on Mars', function () {
        let testResult = testGalacticalcWithYoungBirthday.findMarsYearsExpectedToLive_Female();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithYoungBirthday.birthday.getTime() + testGalacticalcWithYoungBirthday.femaleLifeSpanInMilliseconds);

        let expectedResult = Math.floor((predictedDeathDate - today) / 31536000000 / testGalacticalcWithYoungBirthday.marsRatio);

        expect(testGalacticalcWithYoungBirthday.marsYearsRemaining).toEqual(expectedResult);
    });

    it('16. findJupiterYearsExpectedToLive_Female should return the number of years left to live on Jupiter', function () {
        let testResult = testGalacticalcWithYoungBirthday.findJupiterYearsExpectedToLive_Female();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithYoungBirthday.birthday.getTime() + testGalacticalcWithYoungBirthday.femaleLifeSpanInMilliseconds);

        let expectedResult = Math.floor((predictedDeathDate - today) / 31536000000 / testGalacticalcWithYoungBirthday.jupiterRatio);

        expect(testGalacticalcWithYoungBirthday.jupiterYearsRemaining).toEqual(expectedResult);
    });

    it('17. findEarthYearsBeyondWhatWasExpectedToLive_Male should return the number of years beyond what was expected to live on Earth', function () {

        let testResult = testGalacticalcWithOldBirthday.findEarthYearsBeyondWhatWasExpectedToLive_Male();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithOldBirthday.birthday.getTime() + testGalacticalcWithOldBirthday.maleLifeSpanInMilliseconds);

        let expectedResult = -Math.floor((predictedDeathDate - today) / 31536000000);

        expect(testGalacticalcWithOldBirthday.earthYearsBeyondExpectedDeath).toEqual(expectedResult);
    });

    it('18. findMercuryYearsBeyondWhatWasExpectedToLive_Male should return the number of years beyond what was expected to live on Mercury', function () {

        let testResult = testGalacticalcWithOldBirthday.findMercuryYearsBeyondWhatWasExpectedToLive_Male();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithOldBirthday.birthday.getTime() + testGalacticalcWithOldBirthday.maleLifeSpanInMilliseconds);

        let expectedResult = -Math.floor((predictedDeathDate - today) / 31536000000 / testGalacticalcWithOldBirthday.mercuryRatio);

        expect(testGalacticalcWithOldBirthday.mercuryYearsBeyondExpectedDeath).toEqual(expectedResult);
    });

    it('19. findVenusYearsBeyondWhatWasExpectedToLive_Male should return the number of years beyond what was expected to live on Venus', function () {

        let testResult = testGalacticalcWithOldBirthday.findVenusYearsBeyondWhatWasExpectedToLive_Male();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithOldBirthday.birthday.getTime() + testGalacticalcWithOldBirthday.maleLifeSpanInMilliseconds);

        let expectedResult = -Math.floor((predictedDeathDate - today) / 31536000000 / testGalacticalcWithOldBirthday.venusRatio);

        expect(testGalacticalcWithOldBirthday.venusYearsBeyondExpectedDeath).toEqual(expectedResult);
    });

    it('20. findMarsYearsBeyondWhatWasExpectedToLive_Male should return the number of years beyond what was expected to live on Mars', function () {

        let testResult = testGalacticalcWithOldBirthday.findMarsYearsBeyondWhatWasExpectedToLive_Male();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithOldBirthday.birthday.getTime() + testGalacticalcWithOldBirthday.maleLifeSpanInMilliseconds);

        let expectedResult = -Math.floor((predictedDeathDate - today) / 31536000000 / testGalacticalcWithOldBirthday.marsRatio);

        expect(testGalacticalcWithOldBirthday.marsYearsBeyondExpectedDeath).toEqual(expectedResult);
    });

    it('21. findJupiterYearsBeyondWhatWasExpectedToLive_Male should return the number of years beyond what was expected to live on Jupiter', function () {

        let testResult = testGalacticalcWithOldBirthday.findJupiterYearsBeyondWhatWasExpectedToLive_Male();

        let today = new Date();

        let predictedDeathDate = new Date(testGalacticalcWithOldBirthday.birthday.getTime() + testGalacticalcWithOldBirthday.maleLifeSpanInMilliseconds);

        let expectedResult = -Math.floor((predictedDeathDate - today) / 31536000000 / testGalacticalcWithOldBirthday.jupiterRatio);

        expect(testGalacticalcWithOldBirthday.jupiterYearsBeyondExpectedDeath).toEqual(expectedResult);
    });

});