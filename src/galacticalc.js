class Galacticalc {

  constructor() {
    this.birthday = new Date();
    this.earthAge;
    this.mercuryAge;
    this.VenusAge;
    this.marsAge;
    this.jupiterAge;
    this.gender;
    this.message = 'SuperGalacticAgeCalculator is working.'
  }

  getBirthday(birthdayString) {
    let newBirthday = new Date(birthdayString);
    this.birthday = newBirthday;
  }

  findEarthAge() {
    let today = Date.now();
    let earthAge = today.GetYear() - this.birthday;

  }

  findAgeOnMercury() {
    return
  }
}

export {
  Galacticalc
};