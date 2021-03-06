# readmetoo
*Your favorite readme.md generator*

## Description
ReadMeToo is a readme generator application running in node.js. This is a CLI application, which will prompt the users for various parts of a readme file and then build that readme based on the supplied input.

**NPM Packages Used** : [inquirer](https://www.npmjs.com/package/inquirer)

**What does a generated ReadMe.MD contain?**
* Title of Project
* License
* Description
* Table of Contents
* Installation
* Usage
* Contributing
* Tests
* Questions

## Installation
**Clone the repo**
```
  $ git clone https://github.com/cpusillo/readmetoo.git
```
**Install the necessary node packages**
```
$ npm install
```

## Usage
**Run the application**
```
$ node index.js
```

## Contribution
* Download the repository using the installation instructions above
* Contributors may not push to the main branch, create your own branch and perform a pull request.
* Pull request should outline main changes made and should not deconstruct the basic logic.
* Project is running on [inquirer](https://www.npmjs.com/package/inquirer) read the docs before you get started.

## Tests
This is a relatively straight forward application. To test, run the test on the file that is producing the functionality in question.
To test license image issues:
```
$ node licenses.js
```

To test the application in general
```
$ node index.js
```

## Walkthrough of application & supporting images
[Video walk through of application](https://drive.google.com/file/d/10qz6z1hU_cb9qGbYU3ihZ5wFXRBGO8R4/view?usp=sharing)
![Screenshot](https://github.com/cpusillo/readmetoo/blob/main/img/readmetoo-screenshot1.jpg)




