# Buggy Car Rating Automation

Buggy Car Rating allows you to register with them, log in, view the range of cars they have, and vote for the cars of your choice. This repository has some tests built using Cypress.

## Application under test: https://buggy.justtestit.org/

## Prerequisites
- node.js (Version v16.16.0)
- npm (8.11.0)

## How to run locally?
1. Clone the project
 
    ```git clone git@github.com:shishirmalla92/BuggyCarsRating.git```

2. Navigate to the project directory

    ```cd BuggyCarsRating```

3. Install dependencies
    
    ```npm install```

4. Run the tests

    ```npm run test```

## Limitations of this suite
- Username is not dynamic. We have to manually set the username and password in the loginHelper.js file.

## Note:
- There's one broken link on the website. The broken link test fails for that link. Results can be viewed on the BuggyCarsRating\cypress\screenshots directory.
- Once the test runs are completed, all the videos are stored in \BuggyCarsRating\cypress\videos directory. 

