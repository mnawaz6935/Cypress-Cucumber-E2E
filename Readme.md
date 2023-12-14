# Cypress E2E Testing with Cucumber

This repository demonstrates how to set up end-to-end (E2E) testing using Cypress with Cucumber integration, enabling behavior-driven development (BDD) practices for web applications.

## Prerequisite 
- [Node (v16.17.0) or Greater version](https://www.npackd.org/p/org.nodejs.NodeJS64/16.17.0) 
- [VS Code](https://code.visualstudio.com/docs/?dv=win) 

## Setup Windows and Mac OS
### Install the node and virtual studio code
  - [Download node.js](https://www.npackd.org/p/org.nodejs.NodeJS64/16.17.0) 
  - Install node.msi file 
  - Set environment variable for node
  - To check the node version by running following command 
    ``` 
    node --version
    ```
  - [Download and install Visual Studio Code](https://code.visualstudio.com/docs/?dv=win) 

### Install required packages
  - Clone Repository:  
   - Open command prompt and Navigating to project Directory
   - Run command  `npm install`

## Open project and run the tests
- Open the project in VS Code
 - Open Terminal in VS Code
 - For UI Cypress Run Command `npx cypress open` It will open the UI of cypress and shows all feature files
 - For headless Run Command `npx cypress run`

## How to generate automation test reports

- After Running Test cases Following command will Generate Test Report.
 ```
  npm run report

 ```
- Report file will be generated in the `reports` folder.
- Open the report `index.html` into browser
