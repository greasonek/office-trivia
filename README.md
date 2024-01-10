# The Office Trivia Game

## Author: Emily Greason

### Available Scripts

 `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Activity Log

- January 7, 2024:
  - Created The Office Trivia repo locally
  - Imported react router dom
  - Created multiple pages (home, about me, login, game) with navigation between pages
  - Added styling with MUI
  - Added background images to home, game and about

- January 8, 2024
  - Added styling to the game page, changed the game page background
  - Created a json file to hold game data (q/a's)
  - Added functionality to the game
    - Game card holds question, possible answers, next button and question count (1 of 5, etc)
    - Correct answer lights up green, wrong answer lights up red
    - Next button leads to next question until the end of the game
    - Score is displayed at the end of the game with a reset button
  - Took off Login button from header and commented out all login button related code from App.js and Header.js

..