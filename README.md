# PHLash
PHLash is a Philly themed flashcard study app.

## Deployment
[![Netlify Status](https://api.netlify.com/api/v1/badges/92185ca9-9cd7-4854-a618-67a24fbbde13/deploy-status)](https://app.netlify.com/sites/phlash/deploys)

https://phlash.netlify.app/

## The Goal
Create a flashcard study app using React, deploy it online, and allow others to easily change the flashcard data with their own.



## Technology Stack

| Technology    	| Description     	|
| :------------------|----------------	|
| HTML, CSS, JS 			| Languages      				  |
| React			  |	JavaScript library for building user interfaces            |

## Project Specifications
* Header area for eventual "topic selection"
* grid area for flashacards
* ability to switch between front and back of flashcards individually
* help others learn by deploying the site  online, for the public
* ensure the software uses some kind of accepted standard as the basis for flashcard storage (markdown, json, etc)

## Anatomy of Project


| File/Folder    	| Purpose           	  |
| :------------------|:-------------------|
| src/components		 			| React Components    |

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

5. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

6. **`README.md`**: A text file containing useful reference information about your project.

## License
MIT License

Copyright (c) 2020 Frank Santaguida

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
