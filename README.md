# Description
I have created a simple Rock, Paper, Scissors interactive game using HTML, CSS, and JavaScript.

# HTML

## index.html:
-Implements the user interface for a Rock Paper Scissors game.
-Structured with elements for displaying game choices, scores, and outcomes.
-Integrates user and computer choice representations with corresponding images.
-Utilizes modals for displaying game rules.
-Includes a "PLAY AGAIN" button to reset the game.

## win.html:
-Serves as a celebration page for winning the game.
-Features visual elements like stars and a trophy.
-Displays victory messages.
-Provides a "PLAY AGAIN" button with a link to restart the game.

# CSS

## style.css:
-Defines the styling for the Rock Paper Scissors game interface.
-Sets the background color, font styles, and positioning for various elements.
-Utilizes flexbox for score display and positioning of game choices.
-Implements drop shadows and transitions for visual effects.
-Manages visibility with the "hidden" class.
-Styles buttons for playing and displaying rules.

## winStyle.css:
-Defines the styling for the winning celebration page.
-Positions and styles visual elements such as stars and a trophy.
-Sets fonts, sizes, and colors for celebratory messages.
-Styles the "PLAY AGAIN" button for restarting the game.
-Manages visibility with the "hidden" class.

# JAVASCRIPT

## script.js:
-Declares an array pcChoices containing the choices "rock," "paper," and "scissor."
-Defines a function comPlay to generate a random computer choice from the array.
-Handles the toggle button functionality for displaying and hiding rules.
-Defines event listeners for user choices (rock, paper, and scissors).
-Manages the visual display of user and computer choices.
-Updates scores based on game outcomes (win, lose, tie).
-Implements a "Play Again" button to reset the game.
-Utilizes local storage to store and retrieve user and computer scores.

## winScript.js:
-Declares variables and initializes elements related to the game outcome display.
-Defines functions for updating user and computer scores.
-Handles user clicks on rock, paper, and scissors, updating the display accordingly.
-Implements win, lose, and tie functions to handle different game outcomes.
-Manages the display of the "Play Again" button and its positioning.
-Provides a function afterClick to handle actions after a user click, such as showing or hiding elements.




