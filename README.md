# Command Line Markdown Generator

This project is a javascript program that prompts users from the command line in the VSCode terminal, and uses the user inputs to generate a markdown file.

 This program requires Node.js and the inquirer dependency. If you do not have Node.js installed you can download it [here](https://nodejs.org/en/). 
 
 After node.js is installed you can fork this repository to your github account using the "Fork" button located towards the top-right of this repository.

 ![Fork button on github](/assets/markdownfork.png)

 This program also requires the Inquirer dependency and all of its node modules. To install inquirer, open the terminal and use the command 'npm i inquirer'.
 
 ![Install inquirer](/assets/markdowninquirerinstall.png)
 

Once you open the repository in your editor with both Node.js and inquirer installed, the program can be invoked with the command 'node index.js' in the terminal. 

![Command to invoke program](/assets/markdowninvoke.png)

The user will follow the prompt to the end of the command-line questions. 

![Command line questionnaire](/assets/markdownquestions.png)

At the end of the command line questionnaire, a markdown file named 'README.md' will be placed in the utils folder of this directory. 

![Generated Markdown](/assets/markdownresult.png)

Here is a short GIF demonstrating how this program is used. 

![Demo GIF](/assets/markdowngendemo.gif)

A sample README.md using this program is included in the repository of this project in the /utils folder. 

![Sample README.md](/assets/samplereadme.png)