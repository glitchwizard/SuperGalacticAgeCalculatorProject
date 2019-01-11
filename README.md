# SuperGalacticAgeCalculator

#### By Charley McGowan

## Table of contents

**[Description](#description)**<br>
**[Resources](#resources)**<br>
**[Planning](#planning)**<br>
**[Installation Instructions](#setup/installation)**<br>
**[Specifications](#specifications)**<br>
**[Known Bugs](#known-bugs)**<br>
**[Support](#support-and-contact-details)**<br>
**[Technologies Used](#technologies-used)**<br>
**[License](#license)**<br>

## Description
This is a calculator that can calculate your galactic age in the solar system, based on the solar years of other planets. 

## Setup/Installation
1. Clone the code from [GitHub](https://github.com/glitchwizard/SuperGalacticAgeCalculatorProject)

## Resources

## Planning

1. Configuration/dependencies
*  "Development Dependencies":
  **  "babel-core": "^6.26.0",
  **  "babel-loader": "^7.1.3",
  **  "babel-preset-es2015": "^6.24.1",
  **  "clean-webpack-plugin": "^0.1.18",
  **  "css-loader": "^0.28.10",
  **  "eslint": "^4.18.2",
  **  "eslint-loader": "^2.0.0",
  **  "html-webpack-plugin": "^3.0.6",
  **  "jasmine": "^3.1.0",
  **  "jasmine-core": "^2.99.0",
  **  "karma": "^2.0.0",
  **  "karma-chrome-launcher": "^2.2.0",
  **  "karma-cli": "^1.0.1",
  **  "karma-jasmine": "^1.1.1",
  **  "karma-jasmine-html-reporter": "^0.2.2",
  **  "karma-jquery": "^0.2.2",
  **  "karma-sourcemap-loader": "^0.3.7",
  **  "karma-webpack": "^2.0.13",
  **  "style-loader": "^0.20.2",
  **  "uglifyjs-webpack-plugin": "^1.2.2",
  **  "webpack": "^4.0.1",
  **  "webpack-cli": "^3.1.2",
  **  "webpack-dev-server": "^3.1.14"

*  "Production Dependencies": {
  **  "bootstrap": "^4.2.1",
  **  "jquery": "^3.3.1",
  **  "popper.js": "^1.14.6"

## Specifications:
  * Spec 1: Collect the users age, in years
- [ ] **Expect:** An integer value representing the users name in years 
Input: 33 
Output: 33 Earth years

  * Spec 2: Calculate the users age in Mercury years. (A Mercury year is .24 Earth years.)
- [ ] **Expect:**  the users age in earth years
Input: 33  
Output: 137 Mercury years

  * Spec 3: Calculate the users age in Venus years. (A Venus year is .62 Earth years.)
- [ ] **Expect:**  the users age in earth years
Input: 33  
Output: 53 Venus years

  * Spec 4: Calculate the users age in Mars years. (A Mars year is 1.88 Earth years.)
- [ ] **Expect:**  the users age in earth years
Input: 33  
Output: 17 Mars Years

  * Spec 5: Calculate the users age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
- [ ] **Expect:**  the users age in earth years
Input: 33
Output: 2 Jupiter years

  * Spec 6: Calculate the users remaining life expectancy on each planet. For males the average life expectancy in this project is assumed to be 85 years, while for women it's expected to be about 87 years.
- [ ] **Expect:**  the users age in earth years
Input: 33, male/female
Output: 

Here is your life expectancy for each planet.

Male Outcome: As a male you can expect to live to 85 earth years, which would mean you'd have the following remaining years on each planet: 

52 more local years on Earth
217 more local years if you were living on Mercury
84 more local years if you were living on Venus
28 more local years if you were living on Mars
5 more local years if you were living on Jupiter

Female outcome: As a female you can expect to live to 87 earth years, which would mean you'd have the following remaining years on each planet: 

54 more local years on Earth
225 more local years if you were living on Mercury
87 more local years if you were living on Venus
29 more local years if you were living on Mars
5 more local years if you were living on Jupiter

  * Spec 7: If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.
- [ ] **Expect:**  the users age in earth years
Input: 90
Output: 
Male Outcome: As a male, you have lived past the expected 85 earth years, here's how many years you've lived beyond the expectation on all the planets: 

5 local years longer on Earth
21 local years longer if you were living on Mercury
8 local years longer if you were living on Venus
2 local years longer if you were living on Mars
0 local years longer if you were living on Jupiter

Female outcome: As a female, you have lived past the expected 87 earth years, here's how many years you've lived beyond the expectation on all the planets: 

3 local years longer on Earth
13 local years longer if you were living on Mercury
5 local years longer if you were living on Venus
1 local years longer if you were living on Mars
0 local years longer if you were living on Jupiter

3. Integration
  * Index.Html - All activity is run on this page.

4. Polish
  *


## Known Bugs

## Support and contact details
Charley McGowan

## Technologies Used

HTML, CSS, Json, dotnet, Javascript, Karma, Jasmine, VSCode

### License

Licensed under the MIT license.

Copyright (c) 2018 ** Charley McGowan **
