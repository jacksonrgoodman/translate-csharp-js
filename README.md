
[![C#](https://img.shields.io/badge/c%23-darkgreen?style=for-the-badge&logo=c-sharp&logoColor=white")](#)
[![JS](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](#)
# From C# to JavaScript and Back
A  _Project_ for [NSS Cohort-47](https://nashvillesoftwareschool.com/)  
## Installation
1. git clone this repository  

## Usage
1. `cd` into directory
2. Enter `dotnet run` in root of project
3. Test features.  


## Contributing
[Jackson Goodman](https://github.com/jacksonrgoodman)  

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Project Outline
This repository contains a collection of C# and JavaScript programs. Each program creates some data, performs some logic and prints results to the console.

C# programs are executed in the terminal using the `dotnet run` command. JavaScript programs are served with a web server _(e.g. `http-server` or `serve`)_ and executed in the browser.

## Your Task

For each program you are provided with either the C# or the JavaScript implementation. Your task is to read the code that is provided and translate it from one language into the other. When given a program written in C#, you should write a JavaScript program that has the same behavior. And, when given a JavaScript program, you should write a C# program.

The individual exercises are organized by folder _(see links below)_. Each exercise folder contains a `README.md` and both `csharp` and `js` folders. For C# to JavaScript translations, start in the `csharp` folder and write your new code in the `js` folder. For JavaScript to C# translations go the opposite direction.

> **NOTE:** It is _very important_ to remember that while there are many language similarities between C# and JavaScript, this is **NOT** a line-for-line translation. In many cases the C# code will look markedly different from the JavaScript code. The goal is for each implementation to have the same **behavior** not the same **code**.

> **NOTE:** It will be easiest to have multiple instances of VS Code open while working on these exercises. For example when working on the `place-names` exercise you should open VS Code from within each of these directories:  
> * `translate-csharp-js/place-names/csharp/PlaceNames`
> * `translate-csharp-js/place-names/js/placeNames`

### C# to JavaScript

Translate the C# code found in the exercises below into JavaScript code.

1. [Place Names](./place-names/)
1. [Enemies List](./enemies-list/)
1. [Rolling Dice](./rolling-dice/)
1. [Grimoire](./grimoire/)

### JavaScript to C#

Translate the JavaScript code found in the exercises below into C# code.

1. [Wish List](./wish-list/)
1. [Insulter](./insulter)
1. [Fizzbuzz](./fizzbuzz)
1. [Dinner Party](./dinner-party)
1. [Word Frequency](./word-frequency)

> **NOTE:** You will need to create a new project for each program.

```sh
cd csharp
dotnet new console -o <New Project Name>
```

## Resources

[C# vs JavaScript Cheatsheet](./CSHARP_JAVASCRIPT_COMPARISON.md)
