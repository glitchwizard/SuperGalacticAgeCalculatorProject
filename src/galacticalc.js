class Galacticalc {
    constructor() {
        this.birthday = new Date();
        this.earthAge;
        this.mercuryAge;
        this.VenusAge;
        this.marsAge;
        this.jupiterAge;
        this.gender;
        this.mercuryRatio = 0.24;
        this.venusRatio = 0.62;
        this.marsRatio = 1.88;
        this.jupiterRatio = 11.86;
        this.maleLifeSpanInMilliseconds = 85 * 31536000000;
        this.femaleLifeSpanInMilliseconds = 85 * 31536000000;
        this.message = 'SuperGalacticAgeCalculator is working.'
    }

    // 31536000000 in a year

    setBirthday(birthdayString) {
        this.birthday = new Date(birthdayString);
    }

    findEarthAge() {

        let todaysDate = new Date();
        let foundEarthAgeMs = todaysDate - this.birthday
        let foundEarthAgeRaw = foundEarthAgeMs / 31536000000;
        let foundEarthAge = Math.floor(foundEarthAgeMs/31536000000);
        this.earthAge = foundEarthAge;
        return foundEarthAgeRaw;
    }

    findMercuryAge() {
        let mercuryAge = Math.floor(this.findEarthAge() / this.mercuryRatio);

        this.mercuryAge = Math.floor(mercuryAge);
    }

    findVenusAge() {
        let venusAge = Math.floor(this.findEarthAge() / this.venusRatio);

        this.venusAge = Math.floor(venusAge);
    }

    findMarsAge() {
        let marsAge = Math.floor(this.findEarthAge() / this.marsRatio);

        this.marsAge = Math.floor(marsAge);
    }

    findJupiterAge() {
        let jupiterAge = Math.floor(this.findEarthAge() / this.jupiterRatio);

        this.jupiterAge = Math.floor(jupiterAge);
    }

    findEarthYearsExpectedToLive_Male() {
        let predictedDeathDateInMS = this.birthday.getTime() + this.maleLifeSpanInMilliseconds;
        let predictedDeathDate = new Date(predictedDeathDateInMS);
        let today = new Date();
        let yearsRemainingToExistInTheUniverse = Math.floor((predictedDeathDate - today) / 31536000000);
        return yearsRemainingToExistInTheUniverse;
    }
}

export {
    Galacticalc
};