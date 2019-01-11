class Galacticalc {
    constructor() {
        this.birthday = new Date();
        this.earthAge;
        this.mercuryAge;
        this.VenusAge;
        this.marsAge;
        this.jupiterAge;
        this.earthYearsRemaining;
        this.mercuryYearsRemaining;
        this.VenusYearsRemaining;
        this.marsYearsRemaining;
        this.jupiterYearsRemaining;
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

        this.mercuryAge = mercuryAge;
    }

    findVenusAge() {
        let venusAge = Math.floor(this.findEarthAge() / this.venusRatio);

        this.venusAge = venusAge;
    }

    findMarsAge() {
        let marsAge = Math.floor(this.findEarthAge() / this.marsRatio);

        this.marsAge = marsAge;
    }

    findJupiterAge() {
        let jupiterAge = Math.floor(this.findEarthAge() / this.jupiterRatio);

        this.jupiterAge = jupiterAge;
    }

    findEarthYearsExpectedToLive_Male() {
        let predictedDeathDateInMS = this.birthday.getTime() + this.maleLifeSpanInMilliseconds;
        let predictedDeathDate = new Date(predictedDeathDateInMS);
        let today = new Date();
        let predictedDeathDateRaw = (predictedDeathDate - today) / 31536000000;
        let earthYearsRemainingToExistInTheUniverse = Math.floor((predictedDeathDate - today) / 31536000000);
        this.earthYearsRemaining = earthYearsRemainingToExistInTheUniverse
        return predictedDeathDateRaw;
    }

    findMercuryYearsExpectedToLive_Male() {
        let mercuryYearsRemainingToExistInTheUniverse = Math.floor(this.findEarthYearsExpectedToLive_Male() / this.mercuryRatio);
        this.mercuryYearsRemaining = mercuryYearsRemainingToExistInTheUniverse;
    }

    findVenusYearsExpectedToLive_Male() {
        let venusYearsRemainingToExistInTheUniverse = Math.floor(this.findEarthYearsExpectedToLive_Male() / this.venusRatio);
        this.venusYearsRemaining = venusYearsRemainingToExistInTheUniverse;
    }

    findMarsYearsExpectedToLive_Male() {
        let marsYearsRemainingToExistInTheUniverse = Math.floor(this.findEarthYearsExpectedToLive_Male() / this.marsRatio);
        this.marsYearsRemaining = marsYearsRemainingToExistInTheUniverse;
    }

    findJupiterYearsExpectedToLive_Male() {
        let jupiterYearsRemainingToExistInTheUniverse = Math.floor(this.findEarthYearsExpectedToLive_Male() / this.jupiterRatio);
        this.jupiterYearsRemaining = jupiterYearsRemainingToExistInTheUniverse;
    }

    findEarthYearsExpectedToLive_Female() {
        let predictedDeathDateInMS = this.birthday.getTime() + this.femaleLifeSpanInMilliseconds;
        let predictedDeathDate = new Date(predictedDeathDateInMS);
        let today = new Date();
        let predictedDeathDateRaw = (predictedDeathDate - today) / 31536000000;
        let earthYearsRemainingToExistInTheUniverse = Math.floor((predictedDeathDate - today) / 31536000000);
        this.earthYearsRemaining = earthYearsRemainingToExistInTheUniverse
        return predictedDeathDateRaw;
    }

    findMercuryYearsExpectedToLive_Female() {
        let mercuryYearsRemainingToExistInTheUniverse = Math.floor(this.findEarthYearsExpectedToLive_Female() / this.mercuryRatio);
        this.mercuryYearsRemaining = mercuryYearsRemainingToExistInTheUniverse;
    }

    findVenusYearsExpectedToLive_Female() {
        let venusYearsRemainingToExistInTheUniverse = Math.floor(this.findEarthYearsExpectedToLive_Female() / this.venusRatio);
        this.venusYearsRemaining = venusYearsRemainingToExistInTheUniverse;
    }

    findMarsYearsExpectedToLive_Female() {
        let marsYearsRemainingToExistInTheUniverse = Math.floor(this.findEarthYearsExpectedToLive_Female() / this.marsRatio);
        this.marsYearsRemaining = marsYearsRemainingToExistInTheUniverse;
    }

    findJupiterYearsExpectedToLive_Female() {
        let jupiterYearsRemainingToExistInTheUniverse = Math.floor(this.findEarthYearsExpectedToLive_Female() / this.jupiterRatio);
        this.jupiterYearsRemaining = jupiterYearsRemainingToExistInTheUniverse;
    }


    

}

export {
    Galacticalc
};