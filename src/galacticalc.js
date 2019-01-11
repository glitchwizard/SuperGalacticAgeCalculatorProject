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
        this.message = 'SuperGalacticAgeCalculator is working.'
    }

    getBirthday(birthdayString) {
        this.birthday = new Date(birthdayString);
    }

    findEarthAge() {
        let thisYear = new Date.now().getFullYear();
            this.earthAge = thisYear - this.birthday.getFullYear();
    }
}

export {
    Galacticalc
};