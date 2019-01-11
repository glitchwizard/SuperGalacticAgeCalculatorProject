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

#### 1. Configuration/dependencies
*  "Development Dependencies":
  -  "babel-core": "^6.26.0",
  -  "babel-loader": "^7.1.3",
  -  "babel-preset-es2015": "^6.24.1",
  -  "clean-webpack-plugin": "^0.1.18",
  -  "css-loader": "^0.28.10",
  -  "eslint": "^4.18.2",
  -  "eslint-loader": "^2.0.0",
  -  "html-webpack-plugin": "^3.0.6",
  -  "jasmine": "^3.1.0",
  -  "jasmine-core": "^2.99.0",
  -  "karma": "^2.0.0",
  -  "karma-chrome-launcher": "^2.2.0",
  -  "karma-cli": "^1.0.1",
  -  "karma-jasmine": "^1.1.1",
  -  "karma-jasmine-html-reporter": "^0.2.2",
  -  "karma-jquery": "^0.2.2",
  -  "karma-sourcemap-loader": "^0.3.7",
  -  "karma-webpack": "^2.0.13",
  -  "style-loader": "^0.20.2",
  -  "uglifyjs-webpack-plugin": "^1.2.2",
  -  "webpack": "^4.0.1",
  -  "webpack-cli": "^3.1.2",
  -  "webpack-dev-server": "^3.1.14"

*  "Production Dependencies": {
  -  "bootstrap": "^4.2.1",
  -  "jquery": "^3.3.1",
  -  "popper.js": "^1.14.6"

#### 2. Specifications:

| Spec # 	| Description 	| Expectation 	| Input 	| Output 	|
|---------	|--------------------------------------------------------------	|----------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------------------	|-------------------------------------------------------------------------------------------------------------------------	|
| 0 	| Galacticalc   class object instantiation verification 	| instantiation   of a new Galacticalc object 	| let   galacticalc = new Galacticalc(); 	| galacticalc.message   logs 'SuperGalacticAgeCalculator is working.' 	|
| 1 	| Collect   the users birthday 	| A   javascript Date Object capturing the users birthday 	| "11/27/1980" 	| Galacticalc.birthday.getYear()   = 1980, Galacticalc.birthday.getMonth()+1 = 11,   Galacticalc.birthday.getDate() = 27  	|
| 2 	| Calculate   the users age in Earth years 	| An   integer value representing the users age in Earth years 	| Galacticalc.birthday()   = "11/27/1980" 	| 38 	|
| 3 	| Calculate   the users age in Mercury years 	| An   integer value representing the users age in Mercury years 	| Galacticalc.birthday()   = "11/27/1980" 	| 158 	|
| 4 	| Calculate   the users age in Venus years 	| An   integer value representing the users age in Venus years 	| Galacticalc.birthday()   = "11/27/1980" 	| 61 	|
| 5 	| Calculate   the users age in Mars years 	| An   integer value representing the users age in Mars years 	| Galacticalc.birthday()   = "11/27/1980" 	| 20 	|
| 6 	| Calculate   the users age in Jupiter years 	| An   integer value representing the users age in Jupiter years 	| Galacticalc.birthday()   = "11/27/1980" 	| 3 	|
| 7 	| Calculate   remaining life expectancy on Earth for males 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 85 for males. 	| Galacticalc.birthday()   = "11/27/1980" 	| 47 	|
| 8 	| Calculate   remaining life expectancy on Mercury for males 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 85 for males. 	| Galacticalc.birthday()   = "11/27/1980" 	| 196 	|
| 9 	| Calculate   remaining life expectancy on Venus for males 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 85 for males. 	| Galacticalc.birthday()   = "11/27/1980" 	| 76 	|
| 10 	| Calculate   remaining life expectancy on Mars for males 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 85 for males. 	| Galacticalc.birthday()   = "11/27/1980" 	| 25 	|
| 11 	| Calculate   remaining life expectancy on Jupiter for males 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 85 for males. 	| Galacticalc.birthday()   = "11/27/1980" 	| 4 	|
| 12 	| Calculate   remaining life expectancy on Earth for females 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 87 for females. 	| Galacticalc.birthday()   = "11/27/1980" 	| 49 	|
| 13 	| Calculate   remaining life expectancy on Mercury for females 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 87 for females. 	| Galacticalc.birthday()   = "11/27/1980" 	| 375 	|
| 14 	| Calculate   remaining life expectancy on Venus for females 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 87 for females. 	| Galacticalc.birthday()   = "11/27/1980" 	| 79 	|
| 15 	| Calculate   remaining life expectancy on Mars for females 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 87 for females. 	| Galacticalc.birthday()   = "11/27/1980" 	| 26 	|
| 16 	| Calculate   remaining life expectancy on Jupiter for females 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 87 for females. 	| Galacticalc.birthday()   = "11/27/1980" 	| 4 	|
| 17 	| Calculate   remaining life expectancy on Earth for males 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 85 for males. 	| Galacticalc.birthday()   = "11/27/1928" 	| 5 	|
| 18 	| Calculate   remaining life expectancy on Mercury for males 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 85 for males. 	| Galacticalc.birthday()   = "11/27/1928" 	| 21 	|
| 19 	| Calculate   remaining life expectancy on Venus for males 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 85 for males. 	| Galacticalc.birthday()   = "11/27/1928" 	| 8 	|
| 20 	| Calculate   remaining life expectancy on Mars for males 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 85 for males. 	| Galacticalc.birthday()   = "11/27/1928" 	| 2 	|
| 21 	| Calculate   remaining life expectancy on Jupiter for males 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 85 for males. 	| Galacticalc.birthday()   = "11/27/1928" 	| 0 	|
| 22 	| Calculate   remaining life expectancy on Earth for females 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 87 for females. 	| Galacticalc.birthday()   = "11/27/1928" 	| 3 	|
| 23 	| Calculate   remaining life expectancy on Mercury for females 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 87 for females. 	| Galacticalc.birthday()   = "11/27/1928" 	| 13 	|
| 24 	| Calculate   remaining life expectancy on Venus for females 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 87 for females. 	| Galacticalc.birthday()   = "11/27/1928" 	| 5 	|
| 25 	| Calculate   remaining life expectancy on Mars for females 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 87 for females. 	| Galacticalc.birthday()   = "11/27/1928" 	| 1 	|
| 26 	| Calculate   remaining life expectancy on Jupiter for females 	| An   integer value representing the expected number of years to remain alive,   assuming an average life expectancy of 87 for females. 	| Galacticalc.birthday()   = "11/27/1928" 	| 0 	|

#### 3. Integration
  * Index.Html - All activity is run on this page.

#### 4. Polish
  *


## Known Bugs

## Support and contact details
Charley McGowan

## Technologies Used

HTML, CSS, Json, dotnet, Javascript, Karma, Jasmine, VSCode

### License

Licensed under the MIT license.

Copyright (c) 2018 ** Charley McGowan **
